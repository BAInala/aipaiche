<template>
	<view :style="{minHeight:height+'px'}" class="big">
		<view class="header-box">
			<view class="header">
				<hea-der>
					<template v-slot:header>
						<text>我卖出的</text>
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
					
					
					1
					
					
				</view>
				<view :style="{width:width+'px'}" class="footer-small">
					
					2
					
					
					
				</view>
				
				
			</view>
		</view>
	</view>
</template>

<script>
	import heaDer from '../../../../components/header.vue'
	export default {
		components: {
			heaDer
		},
		data() {
			return {
				list: [{
					name: '我竞拍的'
				}, {
					name: '我拍得的'
				}],
				current: 0,

				// 屏幕宽高
				show: false,
				width: "",
				left: '',
				height: '',
			}
		},
		created() {
			var that = this
			this.show = true
			console.log(uni.getSystemInfoSync());
			this.height = uni.getSystemInfoSync().windowHeight
			this.width = uni.getSystemInfoSync().screenWidth
			console.log(this.width);


			
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

	
</style>
