<template>
	<view>
		<!--标题栏-->
		<bar-title bgColor="bg-white" isBack>
			<block slot="content">转充</block>
		</bar-title>
		
		<!--标题-->
		<!--表单-->
		
		<view class="cu-form-view">
			<input v-model="money" placeholder="请输入金额"/>
		</view>
		<view @tap="qq" style="margin: 30rpx 30rpx;color: blue;font-size: 25rpx;">
			全部转充
		</view>
		
		<view style="margin: 30rpx 30rpx;color:red">
			将奖池金额转为购彩金
		</view>
		<view style="margin: 30rpx 30rpx;">
			可转金额为{{can_zhuan}}
		</view>
		<!--按钮-->
		<view class="bg-white zaiui-btn-view zaiui-foot-padding-bottom">
			<view class="flex flex-direction">
				<button  class="cu-btn bg-red" @click="verify()">转充</button>
			
			</view>
		</view>
		
	</view>
</template>

<script>
	import barTitle from '@/components/zaiui-common/basics/bar-title';
	import _tool from '@/static/zaiui/util/tools.js';	//工具函数
	export default {
		components: {
			barTitle
		},
		data() {
			return {
				id:"",
				money:"",
				is_sm:false,
				can_zhuan:0
			}
		},
		onLoad() {
			this.$api.getUserInfo({}).then(res=>{
				
				this.can_zhuan = res.data.data.award_amount
			})
		},
		
		onReady() {
			_tool.setBarColor(true);
			uni.pageScrollTo({
			    scrollTop: 0,
			    duration: 0
			});
		},
		methods: {
			qq(){
				this.money = this.can_zhuan
			},
			getInfo(){
				var that = this
				this.$api.getRealAuthentication().then(res=>{
					if(res.data != null){
						that.name = res.data.real_name
						that.card = res.data.id_card
						that.is_sm = true
					}else{
						that.is_sm = false
					}
					
					
				})
			},
			verify(){
				var that = this
				uni.showModal({
					title: '提示',
					content: '确定要转？',
					cancelText: '取消',
					confirmText: '确认',
					success: res => {
						if (res.confirm) {
							var data = {"money":this.money}
							this.$api.zhuanchong(data).then(res=>{
								
									
								
									uni.showToast({
										title:'操作成功',
									})
								that.can_zhuan = that.can_zhuan-that.money
								that.money = 0
									
								
							})
						}
					}
				})
			
			
			}
		}
	}
</script>


<style lang="scss">
	/* #ifdef APP-PLUS */
		@import "../../static/colorui/main.css";
		@import "../../static/colorui/icon.css";
		@import "../../static/zaiui/style/app.scss";
	/* #endif */
	page { background: #FFFFFF; }
	.zaiui-title-view {
	    position: relative;
	    padding: 18.18rpx;
	}
	.zaiui-content-view {
		position: relative;
		padding: 0 18.18rpx;
	}
	.cu-form-view {
		position: relative;
		margin: 0 27.27rpx;
		padding: 18.18rpx 0;
		border-bottom: 2rpx solid rgba(0,0,0,0.1);
		input {
			
		}
	}
	.cu-form-view.margin-top-lg {
		margin-top: 40rpx;
	}
	.zaiui-btn-view {
	    position: fixed;
	    width: 100%;
		bottom: 0;
		.flex {
			padding: 18.18rpx;
		}
	}
</style>
