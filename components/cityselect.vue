<template>
	<view :class="{'border-show':border,'border':true}" @click="click">
		<slot name="cityname"></slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				border: false
			};
			
		},
		props:{
			cityname:''
		},
		methods: {
			click() {
				var that = this
				console.log('触发click');
					that.border = !that.border

			},
			no() {
				this.border = false
			}
		}
	}
</script>

<style scoped>
	.border {
		margin-bottom: 25rpx;
		font-size: 30rpx;
		width: 28vw;
		border-radius: 7rpx;
		text-align: center;
		border: 1rpx solid rgba(220, 216, 214, 1);
		padding: 10rpx 0 10rpx 0;
	}

	.border-show {
		margin-bottom: 25rpx;
		font-size: 30rpx;
		width: 28vw;
		border-radius: 7rpx;
		text-align: center;
		border: 1rpx solid rgba(255, 127, 0, 1);
		padding: 10rpx 0 10rpx 0;
		background-color: rgba(242, 203, 164, 0.5);
	}
</style>
