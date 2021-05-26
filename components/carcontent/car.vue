<template>
	<view class="big">
		<view class="car-img">
			<slot  name="header-img"></slot>
		</view>
		<view class="car-content">
			<view class="car-headline">
				<slot name="header"></slot>
			</view>
			<view class="car-detailed">
				<slot name="skeleton"></slot>
			</view>
			<view class="money">
				<view class="money-number">
					<view class="money-number-left">
						<slot name="seckill"></slot>
					</view>
					<view class="money-number-right">

						<slot name="seckillnumber"></slot>
					</view>

					<view class="money-number-left">
						<slot name="seckillnumbertrail"></slot>
					</view>
				</view>
				<view class="people">
					<slot name="collect"></slot>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.big {
		display: flex;
		margin-bottom: 30rpx;
	}

	.big>.car-img {
		width: 37%;
		height: 190rpx;
		border-radius: 8px;
		overflow: hidden;
	}

	.big>.car-content {
		width: 63%;
		height: 190rpx;
		position: relative;
		padding: 0 15px;
	}

	.car-headline {
		font-size: 31rpx;
		color: #271E19;
		height: 85rpx;
		overflow: hidden;
	}

	.car-detailed {
		color: #909090;
		font-size: 22rpx;
		line-height: 60rpx;
	}

	.money {
		display: flex;
		align-items: center;
		justify-content: space-between;
		bottom: 0;
		height: 30rpx;
		overflow: hidden;
		margin-top: 15rpx;
	}

	.money-number {
		display: flex;
	}

	.money-number-left {
		color: #FF7F00;
		font-size: 31rpx;
	}

	.money-number-right {
		font-size: 33rpx;
		color: #FF7F00;
		margin-left: 8rpx;
	}

	.people {
		font-size: 25rpx;
		color: #909090;
		position: absolute;
		right: 15px;
	}
</style>
