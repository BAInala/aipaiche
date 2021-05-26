<template>
	<view class="big">
		<hea-der>
			<template v-slot:header>
				<text>车辆参数配置</text>
			</template>
		</hea-der>

		<view  v-if="data==''" class="img-nocar">
			<image src="../../../static/nomorecar.png" mode=""></image>
			<view class="img-content">
				<view class="lin">
					暂无收藏车源

				</view>
				<view class="lin">
					快去收藏您心仪的车源吧
				</view>
			</view>
		</view>

		<view v-if="!data==''" class="newcar-content">
			<view @click='gocarparticulars(item)' v-for="item in data.carIndexVoList" :key="item.id" class="wrap">
				<car-content>
					<template v-slot:header-img>
						<image style="width: 100% ;height: 190rpx;" :src="item.path" mode=""></image>
					</template>
					<template v-slot:header>
						<text>{{item.title}}</text>
					</template>
					<template v-slot:skeleton>
						<text>骨架{{item.star}}星 2007.02 {{item.distance}}万公里 {{item.provinceCode}}{{item.cityCode}}</text>
					</template>
					<template v-slot:seckill>
						<text>秒杀价 ¥</text>
					</template>

					<template v-slot:seckillnumber>
						<text>7.35</text>
					</template>

					<template v-slot:seckillnumbertrail>
						<text>万</text>
					</template>
					<template v-slot:collect>
						<text>{{item.attention}}人收藏</text>
					</template>
					<u-icon name="photo"></u-icon>

				</car-content>
			</view>

			<u-loadmore :status="status" />
		</view>
	</view>
</template>

<script>
	import carContent from '../../../components/carcontent/car.vue'
	import heaDer from '../../../components/header.vue'
	export default {
		data() {
			return {
				data: '',
				// 上拉刷新
				status: 'loadmore',
				// list: 15,
				page: 5
			}
		},
		components: {
			heaDer,
			carContent
		},
		mounted() {
			var that= this
			uni.request({
				url: that.url + '/index', //仅为示例，并非真实接口地址。
				header: {
					'Authorization': uni.getStorageSync('userdata').token
				},
				method: 'POST',
				data: {
					'pageNum': 0,
					'pageSize': 5
				},
				success: (res) => {
					console.log(res.data.data);
					that.data = res.data.data
				}
			});
		},
		onReachBottom() {
			console.log('上拉刷新');
			console.log('refresh');

			var that = this
			if (that.page < 100) {
				that.page = that.page + 5
			}
			uni.request({
				url: that.url + '/index', //仅为示例，并非真实接口地址。
				method: 'POST',
				data: {
					'pageNum': 0,
					'pageSize': that.page
				}, //自定义请求头信息,
				// header: {
				// 	'Authorization': 'Authorization' 
				// },
				success: (res) => {
					console.log(res.data.data);
					that.data = res.data.data
				}
			});
			this.status = 'loading';
			setTimeout(() => {
				this.status = 'nomore';
			}, 2000)
		},
		methods: {

		}
	}
</script>

<style scoped>
	.big {
		padding: 0 30rpx;
	}

	.section {
		width: 100%;
		height: 100rpx;
		background-color: #18B566;
		margin-top: 40rpx;
	}
	.newcar-content{
		margin-top: 40rpx;
		padding-bottom: 40rpx;
	}
	.img-nocar{
		display: flex;
		flex-wrap: wrap;
		margin-top: 300rpx;
		justify-content: center;
	}
	.img-nocar image{
		width: 400rpx;
		height: 180rpx;
		
	}
	.img-content{
		width: 100%;
		margin-top: 50rpx;
		text-align: center;
	}
	.lin{
		line-height: 50rpx;
	}
</style>
