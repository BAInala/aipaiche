<template>
	<view :style="{minHeight:height+'px'}" class="big">
		<hea-der class="header">
			<template v-slot:header>
				<!-- <text>公告消息</text> -->
			</template>
		</hea-der>

		<image style="width: 100%;margin-top: -80rpx;" src="../../../static/home/检测/zhuangshi.png" mode=""></image>

		<view class="detectioncontent">
			<!-- 检测信息 -->
			<view v-if="show==0"  class="box">
				<view class="detectioncontent-header">
					<view class="detectioncontent-p">
						我要检测----
					</view>
					<image style="position: absolute;height: 100%;width: 130%;top: 0;left: 0;" src="../../../static/home/检测/检测.png"
					 mode=""></image>
				</view>


				<view class="detectioncontent-box">
					<u-field label-align='right' label-width='180' v-model="mobile" label="名字" placeholder="名字">
					</u-field>
					<u-field label-align='right' label-width='180' v-model="mobile" label="电话" placeholder="手机号">
					</u-field>
					<u-field label-align='right' label-width='180' v-model="mobile" label="检测地点" placeholder="省、市、区、街道、门牌号">
					</u-field>
					<u-field label-align='right' label-width='180' v-model="mobile" label="检测时间" placeholder="例：2021-03-10">
					</u-field>
					<u-field label-align='right' label-width='180' v-model="mobile" label="品牌车型" placeholder="例：大众-朗逸-2019款">
					</u-field>
					<view @click="go" class="submit">
						<view class="submit-content">
							提交
						</view>
					</view>
				</view>

			</view>

	
			<view  v-if="show==1" class="box-content">
				<view class="img-box">
					<image style="width: 190rpx;height:150rpx ;" src="../../../static/home/检测/successful.png" mode=""></image>
				</view>
				<view style="margin: 25rpx 0; font-weight: 600; color: #FF7F00;font-size: 38rpx;" class="successful-content">
					恭喜！已成功提交
				</view>
				<view style=" margin: 10rpx 0 50rpx;color: #271E19;font-size: 30rpx;" class="successful-content">
					我们会在2个工作日内联系您
				</view>

				<view class="return">
					<view style="color: #f3f3f3;
		background-color:#FF7F00 ;border: 1px solid #FF7F00" class="return-content">
						返回列表 （3s）
					</view>
				</view>
				<view class="return-return">
					<view style="color:#FF7F00;
		background-color:#ffffff ;
border: 1px solid #FF7F00;" class="return-content">
						返回首页
					</view>
				</view>

			</view>

			<view  v-if="show==2" class="box-content">
				<view class="img-box">
					<image style="width: 190rpx;height:150rpx ;" src="../../../static/home/检测/提交失败.png" mode=""></image>
				</view>
				<view style="margin: 25rpx 0; font-weight: 600; color: #FF2525;font-size: 38rpx;" class="successful-content">
					提交失败
				</view>
				<view style=" margin: 10rpx 0 50rpx;color: #271E19;font-size: 30rpx;" class="successful-content">
					请点击返回列表重新提交
				</view>

				<view class="return">
					<view style="color: #f3f3f3;
					background-color:#FF7F00 ;border: 1px solid #FF7F00" class="return-content">
						返回列表 （3s）
					</view>
				</view>
				<view class="return-return">
					<view style="color:#FF7F00;
					background-color:#ffffff ;
			border: 1px solid #FF7F00;" class="return-content">
						返回首页
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import heaDer from '../../../components/header.vue';
	export default {
		components: {
			heaDer
		},
		data() {
			return {
				height: '',
				// 0 首页 1 成功 2 失败
				show:'0'
			}
		},
		methods: {
			go() {

			}
		},
		onShow() {

		},
		mounted() {
			var that = this
			uni.getSystemInfo({
				success: function(res) {

					console.log(res.windowHeight);
					that.height = res.windowHeight



				}
			})

		}
	}
</script>

<style scoped>
	.big {
		width: 100%;
		height: 100%;
		background-color: #FF9831;
		overflow: hidden;
		padding: 0 30rpx 150rpx;
	}

	.detectioncontent {
		width: 100%;
		background-color: #ffffff;
		margin-top: 60rpx;
		padding: 35rpx 30rpx 100rpx;
		position: relative;
		border-radius: 48rpx;
		box-shadow: 0px 5px 10px 0px rgba(198, 108, 20, 0.5);
	}

	.detectioncontent-header {
		width: 60%;
		height: 130rpx;
		position: relative;
		text-align: center;
		margin: 0 auto;
		line-height: 140rpx;
	}

	.detectioncontent-p {
		font-size: 40rpx;
		position: relative;
		z-index: 2;
		font-weight: 500;
		letter-spacing: 3px;
		color: #FFFFFF;
	}

	.detectioncontent-box {
		width: 100%;
		margin-top: 50rpx;
	}

	.big>>>.u-label {
		padding-right: 20rpx;
		font-size: 32rpx;
	}

	.big>>>.u-field {
		margin: 10rpx 0;
	}

	.submit {
		padding: 20rpx 30rpx;
		background-color: #FF7F00;
		border-radius: 8px;
		font-size: 40rpx;
		color: #FFFFFF;
		text-align: center;
		width: 100px;
		height: 44px;
		position: absolute;
		bottom: -50rpx;
		left: calc(50% - 100rpx);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.big>>>.u-flex-1 {
		padding-left: 20rpx;
		font-size: 25rpx;
	}

	

	.img-box {
		display: flex;
		justify-content: center;
		margin: 30rpx 0;
	}

	.box-content {
		display: flex;
		text-align: center;
		flex-direction: column;
		justify-content: center;
	}

	.return,
	.return-return {
		display: flex;
		justify-content: center;
	}

	.return-content {
		width: 50%;
		padding: 17rpx 40rpx;
		margin: 20rpx 0;
		font-size: 30rpx;
		border-radius: 10rpx;
	}
</style>
