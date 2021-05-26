<template>
	<view :style="{minHeight:height+'px'}" class="big" @click="propnumbers">
		<view class="header-box">
			<view class="header">
				<hea-der>
					<template v-slot:header>
						<text>我发布的</text>
					</template>
				</hea-der>
			</view>

			<view class="header-tab">
				<u-tabs bar-height="4" active-color="#FF7F00" bar-width="100" :list="list" :is-scroll="false" :current="current"
				 @change="change"></u-tabs>
			</view>
		</view>
		<!-- :style="{height:height-topheader+'px'}" -->
		<view v-show="show" class="footer">
			<view :style="{width:width*list.length+'px',marginLeft:'-'+left+'px'}" class="footer-box">

				<view :style="{width:width+'px'}" class="footer-small">


					<view v-if="current==0" v-for="item in 3" :key="item.id" class="footer-small-box">
						<view class="footer-small-box-header">
							<view class="footer-small-box-header-left">
								审核中
							</view>
							<view class="footer-small-box-header-right">
								提交时间 2021-03-16 17:56:00
							</view>
						</view>

						<view class="footer-small-box-bootom">
							<view class="footer-small-box-bootom-header">
								<view class="footer-small-box-bootom-header-left">
									<view class="footer-small-box-bootom-header-left-key">
										姓名:
									</view>
									<view class="footer-small-box-bootom-header-left-name">
										夏天
									</view>
								</view>
								<view class="footer-small-box-bootom-header-right">
									<view class="footer-small-box-bootom-header-left-key">
										联系电话:
									</view>
									<view class="footer-small-box-bootom-header-left-name">
										18909871234
									</view>
								</view>
							</view>

							<view class="footer-small-box-city">
								<view class="footer-small-box-bootom-header-left-key">
									检测地址:
								</view>
								<view class="footer-small-box-bootom-header-left-name">
									江苏省南通市通州区永和路333号
								</view>
							</view>
							<view class="footer-small-box-city">
								<view class="footer-small-box-bootom-header-left-key">
									检测车型:
								</view>
								<view class="footer-small-box-bootom-header-left-name">
									大众-朗逸-2019款
								</view>
							</view>
							<view class="footer-small-box-city">
								<view class="footer-small-box-bootom-header-left-key">
									预约检测时间:
								</view>
								<view class="footer-small-box-bootom-header-left-name">
									2021-03-21
								</view>
							</view>

							<view class="footer-small-box-footer">

								<pr-op ref='prop' :index="item" :show='propnumber'></pr-op>


								<view class="footer-small-box-footer-right">
									<view class="service border">
										联系客服
									</view>
									<view @click="propshow=true" class="data border">
										修改预约资料
									</view>
								</view>
							</view>
						</view>
					</view>


					<!-- 弹出层 -->
					<u-popup :closeable=true :mask-close-able=false border-radius=20 width="90%" mode="center" v-model="propshow">
						<view class="prop">
							<view class="change">
								修改预约资料
							</view>
							<u-form-item label="姓名">
								<u-input placeholder='请输入姓名' v-model="carname" />
							</u-form-item>
							<u-form-item label="电话">
								<u-input placeholder='请输入电话' v-model="carname" />
							</u-form-item>
							<u-form-item label-width=140 label="检测地点">
								<u-input placeholder='省、市、区、街道、门牌号' v-model="carname" />
							</u-form-item>
							<u-form-item label-width=140 label="检测时间">
								<u-input placeholder='例：2021-03-10' v-model="carname" />
							</u-form-item>
							<u-form-item label-width=140 label="品牌车型">
								<u-input placeholder='例：大众-朗逸-2019款' v-model="carname" />
							</u-form-item>

							<view class="footer-bottom">
								保存
							</view>
						</view>
					</u-popup>

				</view>
				<view :style="{width:width+'px'}" class="footer-small">

					<care-message v-if="current==1">
						<template v-slot:carimg>
							<image style="width: 35rpx;height: 35rpx;" src="../../../../static/carparticulars/folderopenfill(1).png" mode=""></image>
						</template>

						<template v-slot:carusername>
							<view class="">
								卖车车的小王
							</view>
						</template>
						<template v-slot:yellow>
							<view class="">
								等待卖出
							</view>
						</template>


						<template v-slot:prop>
							<view class="bottom">
								<pr-op ref='propright' :show='propnumber'></pr-op>
							</view>
						</template>


						<template v-slot:header>
							<view class="car-headline">
								[南通] 本田 思域 2011年产1.8L 自动 无天窗 带巡航
							</view>
						</template>

						<template v-slot:skeleton>
							<text>骨架3星 2007.02 11.09万公里 苏F 10人收藏</text>
						</template>



						<template v-slot:pattern>
							<text>一口价:</text>

						</template>
						<template v-slot:number>
							<text>¥200,000.00</text>
						</template>

						<template v-slot:bgcname>
							<text>一口价</text>
						</template>

						<template v-slot:bidname>
							<text>30人出价</text>
						</template>

						<template v-slot:tallnumber>
							<view class="red">
								<view class="red-left">
									最高报价:
								</view>
								<view class="red-right">
									¥180,000.00
								</view>
							</view>
						</template>

						<template v-slot:tallimg>
							<view class="tallimg">
								<view class="tallimg-imgs">

								</view>

								<view class="tallimg-number">
									100
								</view>
							</view>
						</template>


						<template v-slot:price-tall>
							<view class="border-number">
								修改价格
							</view>
						</template>

						<template v-slot:price-number>
							<view class="border-color">
								卖出价:¥300,000.00
							</view>
						</template>


					</care-message>


				</view>


			</view>
		</view>
	</view>
</template>

<script>
	import careMessage from '../../../../components/carmessage.vue'
	import heaDer from '../../../../components/header.vue'
	import prOp from '../../../../components/prop.vue'
	export default {
		components: {
			heaDer,
			prOp,
			careMessage
		},
		data() {
			return {
				list: [{
					name: '未检测的'
				}, {
					name: '已发布的'
				}],
				current: 0,
				item:"",

				// 屏幕宽高
				show: false,
				width: "",
				left: '',
				height: '',


				// 修改信息
				carname: '',

				// 弹窗
				propshow: !true,

				// prop更多弹窗
				propnumber: 0
			}
		},
		created() {
			var that = this
			this.show = true
			console.log(uni.getSystemInfoSync());
			this.height = uni.getSystemInfoSync().windowHeight
			this.width = uni.getSystemInfoSync().screenWidth
			console.log(this.width);
			// console.log(this.$store.state.loginStatus);



		},
		methods: {
			change(index) {
				console.log(index);
				this.current = index;
				this.left = index * this.width;

			},
			propnumbers() {
				console.log(this.current, this.$refs);

				// if (this.current == 0) {
				// 	for (var i = 0; i < 3; i++) {
				// 		this.$refs.prop[i].changeshow()
				// 	}
				// } else {
				// 	for (var i = 0; i < 1; i++) {
				// 		this.$refs.propright.changeshow()
				// 	}
				// }



			}
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
		padding: 80rpx 40rpx 200rpx;
	}

	.footer-box {
		transition: 0.5s all;
		display: flex;
	}

	.footer-small-box {
		width: 100%;
		margin-bottom: 50rpx;
	}

	.footer-small-box-header-left {
		font-size: 24rpx;
		color: #FF7F00;
	}

	.footer-small-box-header {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 10rpx;
	}

	.footer-small-box-header-right {
		font-size: 20rpx;
	}

	.footer-small-box-bootom {
		width: 100%;
		background-color: #ffffff;
		border-radius: 16rpx;
		padding: 35rpx 35rpx 30rpx 35rpx;
		box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.05);
	}

	.footer-small-box-bootom-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.footer-small-box-bootom-header-left,
	.footer-small-box-bootom-header-right {
		display: flex;
		align-items: center;
	}

	.footer-small-box-bootom-header-left-name {
		margin-left: 20rpx;
		font-size: 25rpx;
	}

	.footer-small-box-bootom-header-left-key {
		font-size: 24rpx;
		color: #909090;
	}

	.footer-small-box-city {
		display: flex;
		margin: 30rpx 0;
	}

	.footer-small-box-footer {
		display: flex;
		align-items: center;
	}

	.footer-small-box-footer-right {
		margin-left: 150rpx;
		display: flex;
	}

	.border {
		font-size: 20rpx;
		padding: 7rpx 10rpx;
		border-radius: 50rpx;
		border: 1px solid #000000;
		margin-right: 50rpx;
	}

	.service {
		background-color: #FF8989;
		border: 1px solid #FF8989;
		color: #FFFFFF;
	}

	.data {
		color: #909090;
		border: 1px solid #DCD8D6;
	}

	.prop {
		padding: 50rpx 50rpx !important;
	}

	.change {
		font-size: 35rpx;
		text-align: center;
		margin-bottom: 20rpx;
	}

	.footer-bottom {
		text-align: center;
		color: #ffffff;
		font-size: 37rpx;
		margin-top: 80rpx;
		padding: 27rpx 0;
		background: #FF7F00;
		box-shadow: 0px 2px 4px 0px rgba(255, 127, 0, 0.5);
		border-radius: 25px;
	}

	.bottom {
		width: 100%;
		position: absolute;
		bottom: 0;
	}

	.red {
		color: rgba(234, 0, 0, 1);
		display: flex;
		align-items: center;
	}

	.red-left {
		font-size: 20rpx;
	}

	.red-right {
		font-size: 24rpx;
	}

	.tallimg {
		display: flex;
		align-items: center;
	}

	.tallimg-imgs {
		width: 20rpx;
		height: 20rpx;
		background-color: #19BE6B;
		border-radius: 100px;
		margin: 0 5rpx;
	}

	.tallimg-number {
		background-color: rgba(255, 137, 137, 1);
		padding: 10rpx;
		color: #ffffff;
		font-size: 16rpx;
		border-radius: 10rpx;
	}

	.border-number {

		background: #FFFFFF;
		color: rgba(255, 127, 0, 1);
		border-radius: 50rpx;
		border: rgba(255, 127, 0, 1) 1px solid;
		padding: 8rpx 15rpx;
		font-size: 21rpx;
	}

	.border-color {

		font-size: 23rpx;
	}
</style>
