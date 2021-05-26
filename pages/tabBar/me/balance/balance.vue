<template>
	<view class="big">
		<image class="background" src="../../../../static/me/bg.png" mode=""></image>
		<hea-der>
			<template v-slot:header>
				<text>余额</text>
			</template>
		</hea-der>
		<view class="balance-all">
			<view class="balance-all-header">
				<view class="balance-all-header-left">
					可用余额 (元)
				</view>
				<view @click="gofinancialdetails" class="balance-all-header-right">
					资金明细<u-icon style="margin-left: 5rpx;" name="arrow-right"></u-icon>
				</view>
			</view>

			<view class="money-number">
				￥ <view style="margin-left: 5rpx;" class="money-numbers">
					1000.00
				</view>
			</view>

			<view class="margin-account">
				<view class="">
					保证金
				</view>
				<view style="margin-left: 20rpx;" class="">
					¥ 2000.00
				</view>
				<view style="margin-left: 20rpx;" class="no">
					不可用
				</view>
			</view>

			<view class="red-content">
				(保证金大于 ¥5000 可无限购买/竞拍多辆车源)
			</view>
		</view>


		<view class="section">
			<view @click="gorefill"  class="section-all-box">
				<view class="earnest">
					<image style="width: 30rpx;height: 30rpx;" src="../../../../static/me/creditcard.png" mode=""></image>
					<view style="margin-left: 20rpx;" class="section-content">
						充值保证金
					</view>
				</view>
				<u-icon style="margin-left: 5rpx;color: #c7c7c7;" name="arrow-right"></u-icon>
			</view>
			<view @click="gowithdraw" class="section-all-box">
				<view  class="balance">
					<image style="width: 30rpx;height: 30rpx;" src="../../../../static/me/moneycollect.png" mode=""></image>
					<view style="margin-left: 20rpx;" class="section-content">
						余额提现
					</view>
				</view>
				<u-icon style="margin-left: 5rpx;color: #c7c7c7;" name="arrow-right"></u-icon>
			</view>
		</view>


	</view>
</template>

<script>
	import heaDer from '../../../../components/header.vue';
	export default {

		data() {
			return {

			}
		},
		components: {
			heaDer
		},
		methods: {
			gorefill() {
				uni.navigateTo({
					url:'refill/refill'
				})
				console.log('去充值页面');
			},
			gowithdraw() {
				uni.navigateTo({
					url:'withdraw/withdraw'
				})
				console.log('去余额页面');
			},
			gofinancialdetails(){
				uni.navigateTo({
					url:'financialdetails/financialdetails'
				})
			}
		}
	}
</script>

<style scoped>
	.big {
		overflow: hidden;
		padding: 0 30rpx;
	}

	.background {
		width: 100%;
		height: 740rpx;
		position: absolute;
		margin-left: -30rpx;
		z-index: -1;
	}

	.balance-all {
		width: 100%;
		height: 295rpx;
		margin-top: 75rpx;
		padding: 40rpx;
		display: flex;
		align-content: space-between;
		flex-direction: column;
		justify-content: space-between;
	}

	.balance-all-header {
		width: 100%;
		position: relative;
		z-index: 2;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.balance-all-header-right {
		font-size: 25rpx;
	}

	.money-number {
		width: 100%;
		height: 50rpx;
		display: flex;
		align-items: center;
		font-size: 27rpx;
	}

	.money-numbers {
		font-size: 40rpx;
	}

	.margin-account {
		display: flex;
		font-size: 25rpx;
		align-items: center;
	}

	.section {
		margin-top: 80rpx;
	}

	.no {
		background-color: #FF7F00;
		font-size: 18rpx;
		padding: 6rpx 15rpx;
		border-radius: 10rpx;
		color: #FFFFFF;
	}

	.earnest,
	.balance {
		display: flex;
		align-items: center;
	}

	.section-all-box {
		display: flex;
		padding: 30rpx 10rpx;
		border-bottom: 0.5rpx #e8e8e8 solid;
		justify-content: space-between;
	}

	.section-content {
		font-size: 30rpx;
	}

	.footer {
		font-size: 37rpx;
		padding: 25rpx 0;
		text-align: center;
		margin-top: 100rpx;
		border: 1px solid #DCD8D6;
		border-radius: 50rpx;
	}

	.red-content {
		color: #EA0000;
		font-size: 20rpx;
	}
</style>
