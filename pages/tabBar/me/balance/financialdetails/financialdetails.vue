<template>
	<view :style="{minHeight:height+'px'}" class="big">
		<view class="header-box">
			<view class="header">
				<hea-der>
					<template v-slot:header>
						<text>余额明细</text>
					</template>
				</hea-der>
			</view>

			<view class="header-tab">
				<u-tabs bar-height="4" active-color="#FF7F00" bar-width="60" :list="list" :is-scroll="false" :current="current"
				 @change="change"></u-tabs>
			</view>
		</view>
		<!-- :style="{height:height-topheader+'px'}" -->
		<view v-show="show" class="footer">
			<view :style="{width:width*list.length+'px',marginLeft:'-'+left+'px'}" class="footer-box">

				<view :style="{width:width+'px'}" class="footer-small">
					
					<view class="recharge">
						<view class="recharge-left">
							<view class="recharge-left-header">
								<view class="recharge-left-header-content">
									充值
								</view>
								<view class="recharge-left-header-carname">
									(本田思域2010年产)
								</view>
								<view class="recharge-left-header-state">
									线下交易中
								</view>
							</view>
							<view class="recharge-left-footer">
								2021.03.06
							</view>
						</view>
						<view class="recharge-right">
							<view class="recharge-right-money">
								+
							</view>
							<view class="recharge-right-money recharge-right-money-number">
								¥2000
							</view>
						</view>
					</view>
					<view class="recharge">
						<view class="recharge-left">
							<view class="recharge-left-header">
								<view class="recharge-left-header-content">
									充值
								</view>
								<view class="recharge-left-header-carname">
									(本田思域2010年产)
								</view>
								<view class="recharge-left-header-state">
									线下交易中
								</view>
							</view>
							<view class="recharge-left-footer">
								2021.03.06
							</view>
						</view>
						<view class="recharge-right">
							<view class="recharge-right-money">
								+
							</view>
							<view class="recharge-right-money recharge-right-money-number">
								¥2000
							</view>
						</view>
					</view>
					
					<view class="recharge">
						<view class="recharge-left">
							<view class="recharge-left-header">
								<view class="recharge-left-header-content">
									充值
								</view>
								<view class="recharge-left-header-carname">
									(本田思域2010年产)
								</view>
								<view class="recharge-left-header-state">
									线下交易中
								</view>
							</view>
							<view class="recharge-left-footer">
								2021.03.06
							</view>
						</view>
						<view class="recharge-right">
							<view class="recharge-right-money">
								+
							</view>
							<view class="recharge-right-money recharge-right-money-number">
								¥2000
							</view>
						</view>
					</view>
					
				</view>
				<view :style="{width:width+'px'}" class="footer-small">
					<view class="recharge">
						<view class="recharge-left">
							<view class="recharge-left-header">
								<view class="recharge-left-header-content">
									充值
								</view>
								<view class="recharge-left-header-carname">
									(本田思域2010年产)
								</view>
								<view class="recharge-left-header-state">
									线下交易中
								</view>
							</view>
							<view class="recharge-left-footer">
								2021.03.06
							</view>
						</view>
						<view class="recharge-right">
							<view class="recharge-right-money">
								+
							</view>
							<view class="recharge-right-money recharge-right-money-number">
								¥2000
							</view>
						</view>
					</view>
				</view>
				<view :style="{width:width+'px'}" class="footer-small">
					<view class="recharge">
						<view class="recharge-left">
							<view class="recharge-left-header">
								<view class="recharge-left-header-content">
									充值
								</view>
								<view class="recharge-left-header-carname">
									(本田思域2010年产)
								</view>
								<view class="recharge-left-header-state">
									线下交易中
								</view>
							</view>
							<view class="recharge-left-footer">
								2021.03.06
							</view>
						</view>
						<view class="recharge-right">
							<view class="recharge-right-money">
								+
							</view>
							<view class="recharge-right-money recharge-right-money-number">
								¥2000
							</view>
						</view>
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import heaDer from '../../../../../components/header.vue'
	export default {
		components: {
			heaDer
		},
		data() {
			return {
				list: [{
					name: '全部'
				}, {
					name: '收入'
				}, {
					name: '支出',
					// count: 5
				}],
				current: 0,

				scrollTop: 0,
				old: {
					scrollTop: 0
				},


				// 屏幕宽高
				show: false,
				width: "",
				left: '',
				height: '',
				topheader: ''
			}
		},
		created() {
			var that = this
			this.show = true
			console.log(uni.getSystemInfoSync());
			this.height = uni.getSystemInfoSync().windowHeight
			this.width = uni.getSystemInfoSync().screenWidth
			console.log(this.width);


			var i = uni.createSelectorQuery().in(this).selectAll('.header-box')
			console.log(i);
			i.fields({
					size: true,
					rect: true,
					scrollOffset: true
				},
				data => {
					console.log(data);

					var header = data[0].height + data[0].top + 35
					that.topheader = header
					console.log(header);

				}).exec();
		},
		methods: {
			change(index) {
				console.log(index);
				this.current = index;
				this.left = index * this.width;

			},
		}
	}
</script>

<style scoped>
	.big {
		padding: 0 0;
		overflow: hidden;
		background-color: #f9f9f9;
	}

	,
	.header-box {
		background-color: #ffffff;
	}

	.header {
		width: 100%;
		padding: 0 35rpx;
	}

	.header-tab {
		width: calc(100% + 70rpx);
		margin-left: -35rpx;
		margin-top: 50rpx;
		padding-bottom: 40rpx;
		box-sizing: content-box;
		position: relative;
		z-index: 5;
		box-shadow: 0 5px 5px 0px rgba(225, 225, 225, 0.1);
	}

	.footer {
		overflow: hidden;
		position: relative;
	}

	.footer-small {
		padding: 80rpx 40rpx;
	}

	.footer-box {
		transition: 0.5s all;
		display: flex;
	}

	.recharge {
		width: 100%;
		padding-bottom: 20rpx;
		display: flex;
		margin-bottom: 20rpx;
		align-items: center;
		border-bottom: 1px solid #E1E1E1;
		justify-content: space-between;
	}

	.recharge-left {
		height: 100%;
	}

	.recharge-right {
		height: 100%;
		display: flex;
		align-items: center;
	}
	.recharge-left-header{
		display: flex;
		align-items: center;
	}
	.recharge-left-header-content{
		font-size: 32rpx;
		font-weight: 600;
	}
	.recharge-left-header-carname{
		color: #909090;
		font-size: 22rpx;
		margin-left: 20rpx;
	}
	.recharge-left-header-state{
		color: #FF8989;
		margin-left: 20rpx;
		font-size: 22rpx;
	}
	.recharge-left-footer{
		margin-top: 10rpx;
		font-size: 25rpx;
		color: #909090;
	}
	.recharge-right-money{
		margin-left: 20rpx;
		color: #EA0000;
		font-size: 35rpx;
	}
	.recharge-right-money-number{
		margin-top: 5rpx;
	}
</style>
