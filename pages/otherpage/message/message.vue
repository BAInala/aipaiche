<template>
	<view class="big">
		<hea-der>
			<template v-slot:header>
				<text>消息中心</text>
			</template>
		</hea-der>
		
		<view @click="goannouncement" class="inform">
			<view class="inform-img">
				
			</view>
			<view  class="inform-content">
				<view class="inform-content-top">
					艾拍车公告
				</view>
				<view  class="inform-content-bottom">
					这是公告信息
				</view>
			</view>
			<view class="inform-time">
				2021-03-09
			</view>
		</view>
		<view class="inform">
			<view class="inform-img">
				
			</view>
			<view class="inform-content">
				<view class="inform-content-top">
					系统消息
				</view>
				<view class="inform-content-bottom">
					这是系统信息
				</view>
			</view>
			<view class="inform-time">
				2021-03-09
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

			}
		},
		methods: {
			goannouncement(){
				uni.navigateTo({
					url: './announcement/announcement',
				})
			}
		}
	}
</script>

<style scoped>
	.big{
		padding: 0 30rpx;
	}
	.inform{
		width: 100%;
		margin-top: 40rpx;
		padding: 20rpx 10rpx;
		display: flex;
		position: relative;
		border-bottom: 0.5px solid #E1E1E1;
	}
	.inform-img{
		width:90rpx;
		height: 90rpx;
		border-radius: 20rpx;
		background-color: #89b4b5;
	}
	.inform-content-top{
		font-size: 33rpx;
	}
	.inform-content{
		margin-left: 20rpx;
		
	}
	.inform-content-bottom{
		color:#909090 ;
		margin-top: 10rpx;
		font-size: 30rpx;
	}
	.inform-time{
		position: absolute;
		right:10rpx;
		font-size: 24rpx;
		color: #909090;
	}
	
</style>
