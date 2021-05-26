<template>
	<view class="big">
		<hea-der>
			<template v-slot:header>
				<text>公告消息</text>
			</template>
		</hea-der>
		
		

		<view v-for="(item,index) in 2" :key="index"  class="message">
			<view class="message-time">
				2021-03-09
			</view>
			<view class="message-all">
				<view class="car-name">
					艾拍车春节调研
				</view>
				
				<view class="car-contnet">
					今年两会，全国人大将审查国民经济和社会发展第十四个五年规划和2035年远景目标纲要草案，为未来五年与更长远的2035年勾画出宏伟蓝图。
					
					目前，信息科技领域涌现出很多颠覆性的创新技术，包括人工智能、移动互联网、物联网、量子信息、新型半导体、区块链、大数据+等。
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import heaDer from '../../../../components/header.vue';

	export default {
		components: {
			heaDer
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.message-time{
		text-align: center;
		padding: 60rpx 0 30rpx;
		font-size: 26rpx;
		color: #909090;
	}
	.big{
		padding: 0 30rpx;
	}
		.message-all{
			width: 100%;
			border-radius: 20rpx;
			background-color: #ffffff;
			box-shadow: 0px 5px 10px 0px #dadada;
			padding: 30rpx;
			
		}
		.car-name{
			font-size: 30rpx;
			margin-bottom: 30rpx;
		}
		.car-contnet{
			font-size: 25rpx;
		}
</style>
