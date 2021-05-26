<template>
	<view class="big">
		<view class="carmessage">
			<view class="carmessage-header">

				<view class="header-flex">
					<view class="carmessage-name">
						卖家：
					</view>
					<view class="carmessage-img">
						<slot name="carimg"></slot>
					</view>
					<view class="carmessage-name">
						<slot name="carusername"></slot>
					</view>
				</view>

				<view class="header-flex">
					<view style="margin-right: 10rpx;" class="carmessage-name">
						上架时间
					</view>

					<view class="carmessage-name">
						2021-03-16 17:56:00
					</view>
				</view>

			</view>

			<view class="car-footer">

				<view class="car-footer-left">
					<view class="car-footer-left-img">

					</view>

					<view class="yellow">
						<slot name="yellow"></slot>
					</view>

					<view class="prop">
						<slot name="prop"></slot>
					</view>

				</view>

				<view class="car-footer-right">
					<view class="car-headline">
						<slot name="header"></slot>
					</view>

					<view class="car-detailed">
						<slot name="skeleton"></slot>
					</view>


					<view class="car-pattern">
						<view style="font-size: 20rpx;" class="">
							<slot name="pattern"></slot>
						</view>
						<view style="margin-left: 10rpx; color: #FF7F00;" class="">
							<slot name="number"></slot>
						</view>

						<view class="bgc">
							<slot name="bgcname"></slot>
						</view>

						<view class="bid">
							<slot name="bidname"></slot>
						</view>
					</view>

					<view class="tall">
						<view class="tall-flex">
							<slot name="tallnumber"></slot>
						</view>
						<view class="tall-flex">
							<slot name="tallimg"></slot>
						</view>
					</view>
					
					<view class="price">
						<view class="tall-flex">
							<slot name="price-tall"></slot>
						</view>
						<view class="tall-flex">
							<slot name="price-number"></slot>
						</view>
					</view>
					
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			propnumbers() {
				console.log(1, this.$refs);

				for (var i = 0; i < 3; i++) {
					this.$refs.prop[i].changeshow()
				}
			}
		}
	}
</script>

<style scoped>
	.carmessage {
		width: 100%;
		border-radius: 15rpx;
		padding: 30rpx;
		background-color: #ffffff;
		box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
	}

	.header-flex {
		display: flex;
		align-items: center;
	}

	.carmessage-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.carmessage-name {
		font-size: 20rpx;
	}

	.carmessage-img {
		width: 35rpx;
		height: 35rpx;
		overflow: hidden;
		margin-top: 4rpx;
		border-radius: 50rpx;
		background-color: #19BE6B;
		margin-right: 10rpx;
	}

	.car-footer {
		display: flex;
		padding-top: 30rpx;
	}

	.car-footer-left {
		flex: 1;
		padding-right: 30rpx;
		position: relative;
	}

	.car-footer-right {
		flex: 2;
	}

	.car-footer-left-img {
		width: 100%;
		height: 130rpx;
		border-radius: 10rpx;
		background-color: #000000;
	}

	.yellow {
		color: #FF7F00;
		margin-top: 25rpx;
		font-size: 23rpx;
	}
	

	.car-headline {
		width: 100%;
	}

	.car-detailed {
		color: #909090;
		font-size: 19rpx;
		line-height: 65rpx;
	}

	.car-pattern {
		display: flex;
		font-size: 24rpx;
		align-items: center;
		position: relative;
		margin-top: 15rpx;
	}

	.bgc {

		background: #FFE6CD;
		border-radius: 10rpx;
		color: #ec7200;
		padding: 7rpx 10rpx;
		font-size: 17rpx;
		margin-left: 10rpx;
	}

	.bid {
		font-size: 20rpx;
		color: #909090;
		position: absolute;
		right: 0;
	}

	.tall {
		display: flex;
		justify-content: space-between;
		margin-top: 25rpx;
	}
	.price{
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 30rpx;
	}
	
</style>
