<template>
	<view class="big">
		<hea-der>
			<template v-slot:header>
				<text>车辆参数配置</text>
			</template>
		</hea-der>

		<view class="footer-content-header">
			[南通·苏F] 本田 思域 2011年产1.8L 自动
			无天窗 带巡航
		</view>

		<view v-for="(item,index) in 2" :key="index" class="message-car">
			<view class="message-car-header">
				<view class="circle" />
				<view class="message-car-header-content">
					基本信息
				</view>
			</view>

			<view class="message-car-contents">
				<view class="car-left">
					<view class="car-left-content">
						所在地
					</view>
					<view class="car-left-content">
						南通
					</view>
				</view>
				<view class="car-left">
					<view class="car-left-content">
						南通
					</view>
					<view class="car-left-content">
						南通
					</view>
				</view>
			</view>
		</view>
	</view>
</template>


<script scoped>
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

		}
	}
</script>

<style scoped>
	.big {
		width: 100%;
		padding: 0 40rpx 100rpx;
	}

	.footer-content-header {
		color: #271E19;
		font-size: 32rpx;
		font-weight: 600;
		margin-bottom: 50rpx;
		margin-top: 50rpx;
	}

	.message-car {
		width: 100%;
		margin-top: 30rpx;
	}

	.circle {
		width: 30rpx;
		height: 30rpx;
		border-radius: 100px;
		background-color: #FF7F00;
	}

	.message-car-header {
		display: flex;
		align-items: center;
	}

	.message-car-header-content {

		font-size: 35rpx;
		font-weight: 600;
		margin-left: 20rpx;
	}

	.message-car-contents {
		width: 100%;
		margin-top: 60rpx;
	}

	.message-car-contents {
		display: flex;
	}

	.car-left {
		flex: 1;
		font-size: 30rpx;
		margin-bottom: 20rpx;
	}

	.car-left-content {
		margin-bottom: 20rpx;
	}
</style>
