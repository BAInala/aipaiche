<template>
	<view class="big">
		<hea-der>
			<template v-slot:header>
				<text>充值余额</text>
			</template>
		</hea-der>

		<view class="money-box">
			<view class="money-box-contet">
				现有余额（元）
			</view>

			<view class="money-box-number">
				<view class="money-box-number-center">
					<view class="money-box-number-center-left">
						￥
					</view>
					<view class="money-box-number-center-right">
						2000.00
					</view>
				</view>
			</view>


		</view>

		<view class="face-box">
			<view class="face-box-header">
				充值金额
			</view>

			<view class="face-content">
				
				<view v-for="item in number" :key="item.id" class="face-content-div">
					充 {{item}}元
				</view>
			</view>

		</view>
		
		<view class="payment">
			<view class="payment-left">
				付款方式
			</view>
			<view class="payment-right">
				<image style="width: 30rpx;height: 30rpx;" src="../../../../../static/me/weplay.png" mode=""></image>
				<view style="margin-left: 10rpx;font-size:32rpx;"  class="">
					微信支付
				</view>
			</view>
		</view>
		
		<view class="footer">
			确认支付
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
				number:[100,200,500,1000,2000,5000]
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

	.money-box {
		margin: 70rpx 0;
		padding: 0 30rpx;
	}

	.money-box-contet {
		font-size: 32rpx;
	}

	.money-box-number-center {
		display: flex;
		padding: 80rpx 0 0;
		justify-content: center;
		align-items: center;
	}

	.money-box-number-center-right {
		font-size: 45rpx;
		margin-left: 10rpx;
		font-weight: 600;
	}

	.face-box {
		width: 100%;
		box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
		border-radius: 8px;
		padding: 30rpx;
		font-size: 32rpx;
	}

	.face-content {
		width: 100%;
		margin: 0rpx 0 30rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.payment-left{
		font-size:35rpx;
	}
	.face-content-div {
		width: 30%;
		padding: 15rpx 0;
		font-size:30rpx;
		border: 1px solid #DCD8D6;
		background: #FFFFFF;
		border-radius: 4px;
		text-align: center;
		margin-top: 30rpx;
	}
	.payment{
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 80rpx;
		align-items: center;
	}
	.payment-right{
		display: flex;
		align-items: center;
	}
	.footer{
		text-align: center;
		color: #ffffff;
		font-size: 37rpx;
		margin-top: 100rpx;
		padding: 27rpx 0 ;
		background: #FF7F00;
		box-shadow: 0px 2px 4px 0px rgba(255, 127, 0, 0.5);
		border-radius: 25px;
	}
</style>
