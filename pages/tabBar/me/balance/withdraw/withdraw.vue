<template>
	<view class="big">
		<hea-der>
			<template v-slot:header>
				<text>提现</text>
			</template>
		</hea-der>

		<view class="draw-money">
			<view class="draw-money-header">
				提现金额（元）
			</view>

			<u-field v-model="money" label="¥" placeholder="请填写金额">
			</u-field>
			
			<view class="now-money">
				<view class="now-money-content">
					本次可提现：2000.00元
				</view>
				<view class="now-money-all">
					全部提现
				</view>
			</view>
		</view>
		
		<view class="section">
			<view class="section-content-box">
				<view class="section-content-box-left">
					到账地址
				</view>
				<view class="section-content-box-right">
					<image style="width: 30rpx;height: 30rpx;" src="../../../../../static/weixin.png" mode=""></image>
					<view style="margin: 0 20rpx;" class="">
						微信钱包余额
					</view>
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="section-content-box">
				<view class="section-content-box-left">
					到账时间
				</view>
				<view class="section-content-box-right">
					<view  class="">
						2个工作日内到账
					</view>
				</view>
			</view>
		</view>
		
		<view class="footer">
			提现
		</view>
	</view>
</template>

<script>
	import heaDer from '../../../../../components/header.vue';
	export default {
		components: {
			heaDer
		},
		data() {
			return {
				money: ''
			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.big {
		padding: 0 30rpx;
	}

	.draw-money {
		width: 100%;
		margin-top: 70rpx;
		box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
		border-radius: 30rpx;
		padding: 50rpx 50rpx 70rpx 50rpx;
	}

	.draw-money-header {
		font-size: 35rpx;
	}

	.big>>>.u-field {
		margin-top: 20rpx;
		padding: 50rpx 0;
	}

	.big>>>.u-label {
		flex: 0 0 60rpx !important;
		font-size: 40rpx;
	}

	.big>>>.u-flex-1 {
		font-size: 40rpx;
	}
	.now-money{
		display: flex;
		margin-top: 20rpx;
		color: #909090;
	}
	.now-money-all{
		color: #4A92FC;
		margin-left: 20rpx;
	}
	.section{
		width: 100%;
		padding: 0 10rpx;
		margin-top: 100rpx;
	}
	.section-content-box{
		display: flex;
		margin: 50rpx 0;
		align-items: center;
		justify-content: space-between;
	}
	.section-content-box-right{
		display: flex;
		align-items: center;
		color: #909090;
	}
	.section-content-box-left{
		font-size: 35rpx;
	}
	.footer{
		text-align: center;
		color: #ffffff;
		font-size: 37rpx;
		margin-top: 150rpx;
		padding: 27rpx 0 ;
		background: #FF7F00;
		box-shadow: 0px 2px 4px 0px rgba(255, 127, 0, 0.5);
		border-radius: 25px;
	}
</style>
