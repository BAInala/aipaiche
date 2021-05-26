<template>
	<view for="option1" class="header">
		<view @click="goup"  style="width: 80rpx" class="">
			<u-icon  id="left" class="header-icon" name="arrow-left"></u-icon>
		</view>
		<view class="header-content">
				<slot name="header"></slot>
		</view>
		<u-icon style="visibility: hidden;" @click="goup" class="header-icon" name="arrow-left"></u-icon>
	</view>
</template>

<script scoped>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			goup() {
				uni.navigateBack({
					delta: -1,
				})
			},
		}
	}
</script>

<style scoped>
	.header{
		width: 100%;
		padding: 20rpx 0;
		padding-top: 70rpx;
		display: flex;
		position: relative;
		z-index: 10;
		align-items: center;
		justify-content: space-between;
	}
	.header-icon{
		font-size: 35rpx;
	}
	.header-content{
		font-size: 35rpx;
		font-weight: 600;
	}
</style>
