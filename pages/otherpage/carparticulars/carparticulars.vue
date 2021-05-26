<template>
	<view class="big">
		<view class="top-left">
			<u-icon @click="goup" name="arrow-left"></u-icon>
		</view>

		<view class="header-tab">
			<template>
				<view>
					<u-swiper indicator-pos="bottomRight" :circular='true' :autoplay='false' mode='number' height='600' :list="list"></u-swiper>
				</view>
			</template>
		</view>

		<!-- 一口价与秒杀价 价格展示 -->
		<view class="section">
			<view v-if="oro" class="section-seckill section-all">
				<image src="../../../static/carparticulars/zhuangshi.png" mode=""></image>
				<view class="section-all-content">
					<view class="">
						竞拍价
					</view>
					<view style="font-size: 40rpx;margin-left: 20rpx; top:10rpx;">
						24.0
					</view>
					<view style="margin-left: 20rpx;">
						万
					</view>
				</view>
			</view>

			<view v-if="!oro" class="section-once section-all">
				<image src="../../../static/carparticulars/zhuangshi.png" mode=""></image>
				<view class="section-all-content">
					<view class="">
						一口价
					</view>
					<view style="font-size: 40rpx;margin-left: 20rpx; top:10rpx;">
						24.0
					</view>
					<view style="margin-left: 20rpx;">
						万
					</view>
				</view>
			</view>
		</view>

		<!-- 我要购买，我想要 底部 -->
		<view class="footer">
			<view class="footer-header">
				<view class="footer-header-box">
					<view @click="change(index)" :class="{'active':delta==index}" v-for="(item,index) in 5" :key="index" class="footer-header-content">
						车辆西{{index}}
					</view>
				</view>

				<view :style="{left:left +'px',width:width +'px'}" class="footer-x">

				</view>
			</view>

			<view class="footer-bottom">
				<view v-if="!oro" class="footer-bottom-footer">
					<view class="buy">
						我要购买
					</view>
				</view>

				<view v-if="oro" class="footer-bottom-footer-order">
					<view class="buy">
						<view class="content">
							我要购买
						</view>
					</view>
					<view class="want">
						<view class="content">
							我想要
						</view>
					</view>

				</view>
			</view>
		</view>


		<!-- 底部内容 -->
		<!-- <view v-for="(item,index) in 5" :key="index" class="index">
			<view class="ceshi">
				车辆{{index}}
			</view>
			<view v-for="(item,index) in 40" :key="index">
				测试内容
			</view>
		</view> -->


		<!-- 详情内容 -->
		<view class="footer-content">
			<view class="footer-content-header">
				[南通·苏F] 本田 思域 2011年产1.8L 自动
				无天窗 带巡航
			</view>

			<view class="footer-content-header-detailed">
				<view class="footer-content-header-detailed-left">
					<view class="footer-content-header-detailed-left-name">
						骨架
					</view>
					<template>
						<u-rate active-color="#FF7F00" inactive-icon="star-fill" :disabled="true" :count="count" v-model="value"></u-rate>
					</template>
				</view>
				<view :class="{'collect':collector}" class="footer-content-header-detailed-right">
					<u-icon name="bookmark-fill"></u-icon>
					<view class="footer-content-header-detailed-right-content">
						收藏
					</view>
				</view>
			</view>
		</view>

		<!-- 车辆信息 -->
		<view class="car-message all-box">
			<view class="car-all">
				<view class="ceshi car-all-header">
					<view class="car-all-header-content">
						车辆信息
					</view>
					<view class="car-all-header-content-right">
						(车型号：12345678)
					</view>
				</view>

				<view class="var-all-message">
					<view :class="{'left':index==0||index==3||index==6||index==9,'right':index==2||index==5||index==8||index==11}"
					 v-for="(item,index) in 9" :key="index" class="var-all-messages">
						<view class="var-all-messages-top">
							2020.05
						</view>
						<view class="var-all-messages-bottom">
							上牌日期
						</view>
					</view>
				</view>

				<view class="var-all-message-footer">
					<view @click="goallconfiguration(1)" class="var-all-message-footer-content">
						查看更多配置
					</view>
					<view class="var-all-message-footer-icon">
						<u-icon name="arrow-right"></u-icon>
					</view>
				</view>
			</view>
		</view>


		<view class="all-box  car-contents">
			<view v-for="item in 4" :key="item.id" class="car-content ceshi">
				<view class="car-content-header">
					<view class="car-content-header-content car-all-header-content">
						外观检测
					</view>
					<view class="car-content-header-content-right">
						5项
						<u-icon style="margin-left: 10rpx ; margin-top: 5rpx;color: #F21717;" name="info-circle"></u-icon>
					</view>
				</view>

				<view class="car-content-section">
					<view class="car-content-section-left">
						<view class="car-content-section-left-content">
							前保险杠：
						</view>
						<view class="car-content-section-left-content">
							前保险杠：
						</view>
					</view>
					<view class="car-content-section-right">
						<view class="car-content-section-right-content">
							轻微划痕；轻微变形；
						</view>
						<view class="car-content-section-right-content">
							轻微划痕；轻微变形；
						</view>
					</view>


				</view>
				<view class="car-content-section-img">
					<view class="footer-wrap">
						<u-swiper :autoplay='false' :effect3d="true" :title='true' indicator-pos="topLeft" mode="number" height=300 :list="list1"></u-swiper>
					</view>
				</view>
			</view>

			<view style="margin-top: -30rpx;" class="car-all-header-content">
				综合报告
			</view>

			<view class="car-allfooter">
				<view class="car-content-section-left">
					<view class="car-content-section-left-content">
						<view class="circle" />
						前保险杠：
					</view>
					<view class="car-content-section-left-content">
						<view class="circle" />
						前保险杠：
					</view>
				</view>
				<view class="car-content-section-right">
					<view class="car-content-section-right-content">
						轻微划痕；轻微变形；
					</view>
					<view class="car-content-section-right-content">
						轻微划痕；轻微变形；
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
				list: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					}
				],

				delta: 0,

				left: 0,
				width: 0,
				scrollTop: [],


				// 星星
				count: 3,
				value: 1,
				// 是否收藏
				collector: false,

				// 外观检测
				list1: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',

						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',

						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					}
				],

				// 判断秒杀或者一口价
				oro: true

			}
		},
		onPageScroll(res) {
			// console.log(res.scrollTop)
			if (res.scrollTop > this.scrollTop[0] && res.scrollTop < this.scrollTop[1]) {
				this.delta = 0
			} else if (res.scrollTop > this.scrollTop[1] && res.scrollTop < this.scrollTop[2]) {
				this.delta = 1
			} else if (res.scrollTop > this.scrollTop[2] && res.scrollTop < this.scrollTop[3]) {
				this.delta = 2
			} else if (res.scrollTop > this.scrollTop[3] && res.scrollTop < this.scrollTop[4]) {
				this.delta = 3
			} else if (res.scrollTop > this.scrollTop[4]) {
				this.delta = 4
			}
		},
		methods: {
			goup() {
				uni.navigateBack({
					delta: -1,
				})
			},
			// 底部改变index
			change(index) {
				this.delta = index
				console.log(index);
				console.log(this.scrollTop[index]);
				uni.pageScrollTo({
					scrollTop: this.scrollTop[index] + 10
				})

			},
			// 去详情界面
			goallconfiguration(index) {
				console.log('详情界面', index);
				uni.navigateTo({
					url: 'carparticularsparticulars/carparticularsparticulars',
				})
			}

		},
		watch: {
			delta() {
				var that = this
				var i = uni.createSelectorQuery().selectAll('.footer-header-content')
				i.fields({
						size: true,
						rect: true,
						scrollOffset: true
					},
					data => {
						that.left = data[that.delta].left
						that.width = data[that.delta].width
					}).exec();
			}
		},
		mounted() {
			var that = this
			// var i = uni.createSelectorQuery().in(that).selectAll('.footer-header-content')
			setTimeout(function() {
				var i = uni.createSelectorQuery().selectAll('.footer-header-content')
				console.log(i);
				i.fields({
						size: true,
						rect: true,
						scrollOffset: true
					},
					data => {
						console.log(data);
						console.log(data[that.delta].left, data[that.delta].width);
						that.left = data[that.delta].left
						that.width = data[that.delta].width

						//添加卷曲高度
						var demo = uni.createSelectorQuery().selectAll('.ceshi')
						console.log(demo);
						demo.fields({
								size: true,
								rect: true,
								scrollOffset: true
							},
							data => {
								console.log(data);
								for (var i = 0; i < data.length; i++) {
									that.scrollTop.push(data[i].top)
								}
								console.log(that.scrollTop);

							}).exec();

					}).exec();


			}, 100);
		}
	}
</script>

<style scoped>
	.big {
		padding-bottom: 270rpx;
		position: relative;
	}

	.top-left {
		width: 100%;
		height: 80rpx;
		/* background-color: #55aa00; */
		position: absolute;
		top: 100rpx;
		font-size: 40rpx;
		padding: 0 30rpx;
		color: #ffffff;
		display: flex;
		align-items: center;
		z-index: 10;
	}

	.header-tab {
		background-color: #bbbe00;
	}

	.wrap {
		height: 800rpx;
		background-color: #2B85E4;
	}

	/* .big>>>.u-indicator-item-number {
		right: 50rpx !important;
		position: absolute;
		margin-top: -50rpx;
	} */

	.section {
		margin-bottom: 40rpx;
	}

	.section-seckill {
		width: 100%;
		height: 95rpx;
		background: linear-gradient(184deg, #FFE6CD 0%, #FF7F00 100%);
	}

	.section-once {
		width: 100%;
		height: 95rpx;
		background: linear-gradient(184deg, #FFCDCD 0%, #FF7575 100%);
	}

	.section-all {
		padding: 0 40rpx;
		display: flex;
		position: relative;
		align-items: center;
	}

	.section-all>image {
		height: 100%;
		position: absolute;
	}

	.section-all-content {
		display: flex;
		color: #FFFFFF;
		align-items: baseline;
	}

	.footer {
		width: 100%;
		background-color: #ffffff;
		box-shadow: 0px 0px 5px 0px #dfdfdf;
		position: fixed;
		bottom: 0;
		z-index: 2;
		padding: 30rpx 40rpx;
	}

	.footer-header {
		width: 100%;
		height: 85rpx;
		font-size: 30rpx;
		background-color: #ffffff;
	}

	.footer-header-box {
		display: flex;
		justify-content: space-between;
	}

	.footer-header-content {
		transition: all 0.5s;
	}

	.footer-x {
		width: 80rpx;
		height: 1.5px;
		background-color: #FF7F00;
		border-radius: 20px;
		position: absolute;
		margin-top: 10rpx;
		transition: all 0.5s;
	}

	.active {
		color: #FF7F00;
	}

	.footer-content {
		width: 100%;
		/* background-color: #18B566; */
		padding: 0 40rpx 40rpx;

	}

	.footer-content-header {
		color: #271E19;
		font-size: 32rpx;
		font-weight: 600;
	}

	.footer-content-header-detailed {
		width: 100%;
		background-color: #ffffff;
		margin-top: 20rpx;
		display: flex;
		justify-content: space-between;
	}

	.footer-content-header-detailed-left {
		display: flex;
		font-size: 30rpx;
		color: #909090;
		align-items: center;
	}

	.footer-content-header-detailed-right {
		text-align: center;
		color: #909090;
	}

	.footer-content-header-detailed-left-name {
		margin-right: 30rpx;
	}

	.footer-content-header-detailed-right-content {
		font-size: 22rpx;

	}

	.collect {
		color: #FF7F00;
	}

	.all-box {
		width: 100%;
		padding: 0 20px;
	}


	.car-all {
		box-shadow: 0px 5px 10px 0px #e2e2e2;
		width: 100%;
		background-color: #ffffff;
		border-radius: 20rpx;
		padding: 20rpx 20rpx 0 20rpx;
	}

	.car-all-header {
		display: flex;
		align-items: center;
	}

	.car-all-header-content {
		font-size: 32rpx;
		font-weight: 600;
	}

	.car-all-header-content-right {
		color: #909090;
		font-size: 25rpx;
		margin-left: 30rpx;
	}

	.var-all-message {
		width: 100%;
		border-bottom: 1px solid #E1E1E1;
		padding-bottom: 10rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 30rpx;
	}

	.var-all-messages {
		text-align: center;
		width: 33%;
		margin-bottom: 30rpx;
	}

	.var-all-messages-top {
		font-size: 32rpx;
	}

	.var-all-messages-bottom {
		font-size: 27rpx;
		color: #909090;
		margin-top: 10rpx;
	}

	.var-all-message-footer {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 30rpx 0;
	}

	.var-all-message-footer-icon {
		margin-top: 7rpx;
		margin-left: 30rpx;
		position: relative;
		z-index: 0;

	}

	.var-all-message-footer-content {
		font-size: 32rpx;
		font-weight: 600;
	}

	.right {
		text-align: right;
	}

	.left {
		text-align: left;
	}

	.car-content {
		width: 100%;
		margin-bottom: 80rpx;
	}

	.car-contents {
		margin-top: 60rpx;
	}

	.car-content-header {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.car-content-header-content-right {
		display: flex;
		align-items: center;
		font-size: 27rpx;
	}

	.car-content-section {
		width: 100%;
		display: flex;
		height: 100rpx;
		margin: 60rpx 0;
	}

	.car-content-section-left {
		min-width: 30%;
		height: 100%;
	}

	.car-content-section-right {
		width: 70%;
		height: 100%;
	}

	.car-content-section-left-content,
	.car-content-section-right-content {
		padding-bottom: 20rpx;
	}

	.car-content-section-img {
		width: 100%;
		border-radius: 10px;
		overflow: hidden;
	}

	.car-allfooter {
		width: 100%;
		margin-top: 50rpx;
		box-shadow: 0px 5px 10px 0px #e2e2e2;
		width: 100%;
		background-color: #ffffff;
		border-radius: 20rpx;
		padding: 20rpx 20rpx 0 20rpx;
		display: flex;
	}

	.car-content-section-left-content {
		display: flex;
		align-items: center;
	}

	.circle {
		width: 20rpx;
		height: 20rpx;
		background-color: #F4F1EF;
		border-radius: 100px;
		margin-right: 20rpx;
	}

	.footer-bottom {
		width: 100%;
		height: 90rpx;
	}

	.footer-bottom-footer {
		width: 100%;
		height: 100%;
		border-radius: 50rpx;
		background-color: #FF7F00;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.footer-bottom-footer>.buy {
		font-size: 35rpx;
		color: #FFFFFF;
	}

	.footer-bottom-footer-order {
		display: flex;
		height: 100%;
		justify-content: space-between;
	}

	.footer-bottom-footer-order .buy {
		width: 45%;
		height: 100%;
		border-radius: 50rpx;
		font-size: 35rpx;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #FF7F00;
	}

	.footer-bottom-footer-order .want {
		border-radius: 50rpx;
		width: 45%;
		background-color: #FF8989;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 35rpx;
		color: #FFFFFF;
	}
</style>
