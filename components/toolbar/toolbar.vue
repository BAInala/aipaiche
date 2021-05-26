<template>
	<view class="toolbar">
		<view @click="reset" class="toolbar-left">
			重置{{importnumber}}
		</view>
		<view @click="examine" class="toolbar-right">
			查看{{importnumber}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		props: {
			importnumber: ''
		},
		methods: {
			reset() {
				console.log('重置', this.importnumber);
				if (this.importnumber == 0) {
					this.$emit('city', '重置城市')
				} else if (this.importnumber == 1) {
					this.$emit('city', '重置价格')
				} else if (this.importnumber == 2) {
					this.$emit('city', '重置品牌')
				}

			},

			examine() {
				console.log('查看', this.importnumber);
				if (this.importnumber == 0) {
					this.$emit('cityexamine', '查看城市')
				} else if (this.importnumber == 1) {
					this.$emit('cityexamine', '查看价格')
				} else if (this.importnumber == 2) {
					this.$emit('cityexamine', '查看品牌')
				}
			}
		}


	}
</script>

<style scoped>
	.toolbar {
		width: 100%;
		height: 85rpx;
		position: fixed;
		bottom: 0rpx;
		left: 0;
		/* overflow: hidden; */
		display: flex;
		z-index: 20;
	}

	.toolbar-left {
		width: 40%;
		height: 100%;
		font-size: 37rpx;
		color: #909090;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #ffffff;
		border-bottom-left-radius: 50px;
		border-top-left-radius: 50px;
		border-top: 1px solid #ebebeb;
	}

	.toolbar-right {
		width: 60%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #ffffff;
		font-size: 37rpx;
		background-color: #FF7F00;
		border-bottom-right-radius: 50px;
		border-top-right-radius: 50px;
		border-top: 1px solid #ebebeb;
	}
</style>
