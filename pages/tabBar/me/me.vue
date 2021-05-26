<template>
	<view class="big">
		<view class="header-top">
			<!-- 头像这块 -->
			<view class="user-content">
				<view class="user-content-left">
					<view @click="gomes" class="user-content-box">
						<open-data type="userAvatarUrl"></open-data>
					</view>
					<view class="user-content-name">
						<view class="user-content-name-con">
							<open-data type="userNickName"></open-data>
						</view>
					</view>

				</view>

				<view class="user-content-right">
					<view @click="gomessage" style="margin-right: 30rpx;" class="user-function">
						<image src="../../../static/me/bell.png" mode=""></image>
						<view class="user-function-text-o">
							消息
						</view>
					</view>
					<!-- 退出登录 -->
					<!-- <view class="user-function">
						<image src="../../../static/me/logout.png" mode=""></image>
						<view class="user-function-text-o">
							退出登录
						</view>
					</view> -->

				</view>
			</view>

			<!--我发布的，我卖出的  -->
			<view class="menu">
				<view @click="goissue" class="user-function">
					<image style="width: 95rpx;
						height: 85rpx;" src="../../../static/me/wofabude.png" mode=""></image>
					<view class="user-function-text-o menu-content">
						我发布的
					</view>
				</view>
				<view @click="gosale" class="user-function">
					<image style="width: 95rpx;
						height: 85rpx;" src="../../../static/me/womaichude.png" mode=""></image>
					<view class="user-function-text-o menu-content">
						我卖出的
					</view>
				</view>
				<view @click="gobuy" class="user-function">
					<image style="width: 95rpx;
						height: 85rpx;" src="../../../static/me/womairude.png" mode=""></image>
					<view class="user-function-text-o menu-content">
						我买入的
					</view>
				</view>
			</view>
			<image src="../../../static/me/bgct.png" mode=""></image>
		</view>

		<view class="section">
			<image src="../../../static/me/bgcb.png" mode=""></image>
			<!-- 我的账户 -->
			<view class="account">
				我的账户
			</view>
			<view class="money-box">
				<view @click="gobalance" class="money-box-left">
					<view class="money-box-left-p">
						余额（元）
					</view>
					<view class="money-box-left-p-content">
						0.00
					</view>
				</view>
				<view class="money-box-left">
					<view class="money-box-left-p">
						保证金（元）

						<view class="none">
							不可用
						</view>
					</view>
					<view class="money-box-left-p-content">
						0.00
					</view>
				</view>
			</view>

		</view>
		<view class="footer">
			<view class="account">

				<view class="account-left">
					我的服务
				</view>

				<!-- 更多 -->
				<!-- <view class="account-right">
					更多
					<u-icon name="arrow-right"></u-icon>
				</view> -->
			</view>


			<view class="footer-box">
				<view class="user-function">
					<image style="width: 55rpx;
						height: 45rpx;" src="../../../static/me/shoucang.png" mode=""></image>
					<view class="user-function-text-o menu-content">
						收藏
					</view>
				</view>
				<view class="user-function">
					<image style="width: 55rpx;
						height: 45rpx;" src="../../../static/me/kefu.png" mode=""></image>
					<view class="user-function-text-o menu-content">
						我的客服
					</view>
				</view>
				<view class="user-function">
					<image style="width: 40rpx;
						height: 45rpx;" src="../../../static/me/youhuijuan.png" mode=""></image>
					<view class="user-function-text-o menu-content">
						优惠卷
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

			}
		},
		methods: {
			gobalance() {
				console.log('余额');
				uni.navigateTo({
					url: 'balance/balance',
				})
			},
			gomessage() {
				uni.navigateTo({
					url: '../../otherpage/message/message',
				})
			},
			gomes() {
				uni.navigateTo({
					url: 'allmes/allmes'
				})

			},
			goissue() {
				console.log('我发布的');
				uni.navigateTo({
					url: 'issue/issue'
				})
			},
			gosale() {
				console.log('我卖出的');
				uni.navigateTo({
					url: 'sale/sale'
				})
			},
			gobuy() {
				console.log('我买入的');
				uni.navigateTo({
					url: 'buy/buy'
				})
			}
		},
		mounted() {
			var that = this

		}
	}
</script>

<style lang="scss" scoped>
	.big {
		overflow: hidden;
		width: 100%;
		padding-bottom: 200rpx;
		background-color: #FDFDFD;
	}

	.header-top {
		width: 100%;
		padding-bottom: 50rpx;
		position: relative;
		// background-color: #2B85E4;
		// padding-bottom: 30rpx;

		image {
			width: 100%;
			height: 400rpx;
		}

		.user-content {
			display: flex;
			justify-content: space-between;
			width: 100%;
			height: 100rpx;
			position: absolute;
			// background-color:#19BE6B ;
			position: absolute;
			margin-top: 150rpx;
			padding: 0 40rpx;

			.user-content-left {
				// background-color: #333333;
				display: flex;

				.user-content-box {
					width: 100rpx;
					overflow: hidden;
					height: 100rpx;
					border-radius: 100px;
					border: 1px solid #ffffff;
					background-color: #366092;
				}

				.user-content-name {
					height: 100%;
					margin-left: 30rpx;
					display: flex;
					align-items: center;

					// background-color: #2979FF;
					.user-content-name-con {
						color: #ffffff;
						font-size: 30rpx;
					}
				}
			}

			.user-content-right {
				// background-color: #2979FF;
				display: flex;



				.user-function {
					image {
						width: 35rpx;
						height: 35rpx;
					}

					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;

					.user-function-text-o {
						font-size: 25rpx;
					}
				}
			}

		}

	}

	.user-function {
		text-align: center;
	}

	.menu {
		width: 100%;
		position: absolute;
		bottom: 0rpx;
		display: flex;
		padding: 20rpx 50rpx;
		justify-content: space-around;
		align-items: center;
		z-index: 5;

		.menu-content {
			font-size: 30rpx;
			margin-top: -20rpx;
			color: #6a6a6a;
		}
	}

	.account {
		font-size: 35rpx;
		position: relative;
		z-index: 2;
		font-weight: 800;
		padding: 70rpx 40rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;


		.account-right {
			font-size: 25rpx;
			font-weight: 400;
			color: #909090;
		}
	}

	.section {
		width: 100%;
		position: relative;
		padding-top: 10rpx;
		box-shadow: 00px 10px 10px #f8f8f8;
		border-bottom-right-radius: 20rpx;
		border-bottom-left-radius: 20rpx;
		padding-bottom: 50rpx;

		image {
			width: 110%;
			margin-top: -200rpx;
			position: absolute;
			z-index: 2;
			margin-left: -5%;
		}

		.money-box {
			width: 100%;
			height: 200rpx;
			position: relative;
			z-index: 3;
			padding: 0 50rpx;
			display: flex;
			justify-content: space-between;

			// background-color: #c5cf04;
			.money-box-left {
				width: 47%;
				padding: 0 30rpx;
				border-radius: 10rpx;
				border: 1px solid #f3f3f3;

				.money-box-left-p {
					font-size: 32rpx;
					font-weight: 400;
					padding: 30rpx 0;
					position: relative;

					.none {
						font-size: 20rpx;
						padding: 5rpx 10rpx;
						background-color: #F4F1EF;
						position: absolute;
						border-radius: 10rpx;
						color: #909090;
						right: -20rpx;
						top: 35rpx;
					}
				}

				.money-box-left-p-content {
					font-size: 32rpx;
					font-weight: 400;
					padding: 0 0 25rpx;

				}
			}
		}
	}

	.footer {
		width: 100%;
		background-color: #ffffff;
		margin-top: 50rpx;
		box-shadow: 5px 0 10px #f5f5f5;
	}

	.footer-box {
		width: 100%;
		padding: 0 100rpx 100rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.menu-content {
			font-size: 30rpx;
		}
	}
</style>
