<template>
	<view class="big">
		<view @tap.stop="clickprop(1)" class="footer-small-box-footer-left">
			更多
		</view>
		<view :class="{'show':shows==1}" :id="`more${index}`"class="prop">
			<view class="padding">
				取消预约
			</view>
			<view class="y">

			</view>
			<view class="padding">
				取消发布
			</view>
			<view class="y">

			</view>
			<view class="padding">
				删除订单
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shows: '',
			
			};
		},
		props: {
			show: '',
			index:""
		},
		watch: {
			show() {
				console.log(this.show);
				this.shows = this.show
			}
		},
		methods: {
			clickprop(index) {
				// console.log('子组件点击触发');
				console.log(this.show);
				console.log("index",this.index);
				console.log(this.$parent)
				if(this.$parent.item === '' ){
					this.$parent.item=this.index
				}
				if(this.$parent.item !== this.index){
					console.log("我是新的")
					// debugger
					this.$parent.$refs.prop[this.$parent.item].changeshow()
				}
				console.log("item---",this.$parent.item);
				if (!this.shows == index) {
					this.shows = index
					this.$parent.item=this.index;
				} else {
					this.shows = 0
				}
			},
			changeshow() {
				// console.log('父组件点击触发');
				this.shows = 0
			}


		}
	}
</script>

<style scoped>
	
	.prop {
		background-color: #FDFDFD;
		box-shadow: 0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08), 0px 3px 6px -4px rgba(0, 0, 0, 0.12);
		position: absolute;
		display: none;
		font-size: 20rpx;
		padding: 17rpx 0;
		border-radius: 5rpx;
	}

	.footer-small-box-footer-left {
		font-size: 24rpx;
		position: relative;
		padding-bottom: 10rpx;
	}

	.show {
		display: inline;
	}

	.padding {
		padding: 15rpx 30rpx;
	}

	.y {
		width: 100%;
		height: 1rpx;
		background-color: #E1E1E1;
	}
</style>
