<template>
	<view class="container">
		<!-- 轮播 -->
		<view class="banner">

			<!-- banner顶部搜索框 -->
			<view class="header">
				<view @click="gomessage" class="header-left">
					<image style="width: 15px;height: 15px;" src="../../static/home/消息通知.png" mode=""></image>
					<view class="informcontent">
						消息
					</view>
				</view>
				<view @click="gosearch" class="header-right">
					<icon style="transform:rotate(90deg);margin: 0 15px;" type="search" size="13" />
					<input disabled=true placeholder="输入你想要的车" type="text" value="" />
				</view>
			</view>

			<swiper class="swiper" :autoplay="true" :interval="3000" :duration="1000" :current="swiperCurrent"
				@change="changeSwiper">
				<swiper-item v-for="item in data.carouselList" :key="item.id">
					<image class="swiper-item" :src="item.image" mode="widthFix"></image>
				</swiper-item>
			</swiper>

			<!-- 轮播指示点样式修改 -->
			<view class="dots">
				<block v-for="(item,index) in data.carouselList" :key="item">
					<view class="dot" :class="index==swiperCurrent ? ' active' : ''"></view>
				</block>
			</view>
		</view>
		<!-- 底部 -->
		<view class="footer">
			<!-- 背景颜色 -->
			<view class="background">
				<image style="width: 100%;height: 150rpx;margin-top: -105rpx;position: absolute;left: 0;z-index: 2;"
					src="../../static/home/背景图片.png" mode=""></image>
			</view>
			<!-- 我要批车 收藏车源 我要检测 心愿清单-->
			<view class="navigation">
				<view style="background-color:#BAB1FF ;" class="navigation-content">
					<image src="../../static/home/ineedacar.png" mode=""></image>
					<view class="navigation-p">
						我要批车
					</view>
					<view class="navigation-span">
						I NEED A CAR
					</view>
				</view>
				<view @click="gocollect" style="background-color: #FE9EB6;" class="navigation-content">
					<image src="../../static/home/lovecar.png" mode=""></image>
					<view class="navigation-p">
						收藏车源
					</view>
					<view class="navigation-span">
						Favorite car source
					</view>
				</view>
				<view @click="godetection" style="background-color: #98BEFD;" class="navigation-content">
					<image src="../../static/home/wanttotest.png" mode=""></image>
					<view class="navigation-p">
						我要检测
					</view>
					<view class="navigation-span">
						I WANT TO TEST
					</view>
				</view>
				<view style="background-color: #FEBF7E;" class="navigation-content">
					<image src="../../static/home/wishlist.png" mode=""></image>
					<view class="navigation-p">
						心愿清单
					</view>
					<view class="navigation-span">
						WISH LIST
					</view>
				</view>
			</view>
			<!-- 维保查询 我的客服 心愿清单 收藏车源 -->
			<view class="usernavigation">
				<view style="display: none">
					<button @click="getUser">点击</button>
				</view>
				<view class="usernavigation-content">
					<image src="../../static/home/chaxun.png" mode=""></image>
					<view class="usernavigation-p">
						维保查询
					</view>
				</view>
				<view class="usernavigation-content">
					<image src="../../static/home/kefu.png" mode=""></image>
					<view class="usernavigation-p">
						我的客服
					</view>
				</view>
				<view class="usernavigation-content">
					<image src="../../static/home/list.png" mode=""></image>
					<view class="usernavigation-p">
						心愿清单
					</view>
				</view>
				<view @click="gocollect" class="usernavigation-content">
					<image src="../../static/home/shoucang.png" mode=""></image>
					<view class="usernavigation-p">
						收藏车源
					</view>
				</view>
			</view>
			<!-- 最新车源 -->
			<view class="newcar">
				<view class="newcar-header">
					<view class="newcar-header-left">
						最新车源
					</view>
					<view class="newcar-header-right">
						统计时间 ：{{data.currentTime}}
					</view>
				</view>
				<view class="newcar-content">
					<view @click='gocarparticulars(item)' v-for="item in data.carIndexVoList" :key="item.id"
						class="wrap">
						<car-content>
							<template v-slot:header-img>
								<image style="width: 100% ;height: 190rpx;" :src="item.path" mode=""></image>
							</template>
							<template v-slot:header>
								<text>{{item.title}}</text>
							</template>
							<template v-slot:skeleton>
								<text>骨架{{item.star}}星 2007.02 {{item.distance}}万公里
									{{item.provinceCode}}{{item.cityCode}}</text>
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
		</view>



	</view>
</template>


<script>
	import carContent from '../../components/carcontent/car.vue'
	export default {
		components: {
			carContent,
		},
		data() {
			return {
				data: '',
				swiperImg: [
					'https://cdn.uviewui.com/uview/swiper/1.jpg',
					'http://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
					'http://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg'
				],
				current: 0,
				swiperCurrent: 0,

				// 上拉刷新
				status: 'loadmore',
				// list: 15,
				page: 5,
				userInfo: {},
				canIGetUserProfile: false,
			};
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
			// 去搜索界面
			gosearch() {
				console.log('去搜索界面');
				uni.navigateTo({
					url: '../tabBar/me/search/search',
				})
			},
			// 去收藏界面
			gocollect() {
				console.log('收藏界面');
				uni.navigateTo({
					url: '../otherpage/collect/collect',
				})
			},
			gomessage() {
				uni.navigateTo({
					url: '../otherpage/message/message',
				})
			},
			changeSwiper(e) {
				this.swiperCurrent = e.detail.current;
			},
			// 下拉刷新

			gocarparticulars(index) {
				console.log('跳转车详情', index);
				uni.navigateTo({
					url: '../otherpage/carparticulars/carparticulars',
				})
			},
			// 去检测
			godetection() {
				uni.navigateTo({
					url: './detection/detection',
				})
			},
			getUser() {
				let that = this;
				uni.getUserProfile({ // 友好的用户体验  先授权 允许后 拿code换取openId
					desc: '登录22222',
					provider: 'weixin',
					success: function(res) {
						//console.log(res);
						that.userInfo = res.userInfo;
						console.log('用户昵称为：' + res.userInfo.nickName);
						try {
							that.login();
						} catch (e) {}
					},
					fail(res) {
						console.log('用户昵称为：失败');
						that.login(); // 因为失败了 只有用户看不见了 但是我还是能用code换取openID
					}
				});

			},
			//这个 默认 就可以执行 不需要 授权允许  拿code给后端 换取openId session
			login() {
				var that = this
				uni.getProvider({
					service: 'oauth',
					success: function(res) {
						if (~res.provider.indexOf('weixin')) {
							uni.login({
								provider: 'weixin',
								success: (res2) => {
									debugger
									console.log("2222", res2.code);
									uni.request({
										url: that.url + 'login/wx', //仅为示例，并非真实接口地址。
										method: 'POST',
										data: {
											'code': res2.code
										}, //自定义请求头信息,
										success: (res) => {
											console.log("code换取", res.data.data)
											uni.setStorageSync('userdata', res.data
												.data);
											console.log(uni.getStorageSync('userdata'))

											uni.request({
												url: that.url +
													'/index', //仅为示例，并非真实接口地址。
												header: {
													'Authorization': uni
														.getStorageSync(
															'userdata')
														.token
												},
												method: 'POST',
												data: {
													'pageNum': 0,
													'pageSize': 5
												},
												success: (res) => {
													console.log(res.data
														.data);
													that.data = res.data
														.data
												}
											});
										}
									});




								},
							})

						} else {
							uni.showToast({
								title: '请先安装微信或升级版本',
								icon: "none"
							});
						}
					}
				});



			},


		},

		mounted() {
			this.login();


		},
		onLoad() {},

		onShow() {
			// 跳转
			// uni.navigateTo({
			// 	url: '../tabBar/me/search/search'
			// });
		}





	}
</script>

<style scoped>
	.testuser {
		height: 50px;
		line-height: 50px;
	}

	.item {
		padding: 24rpx 0;
		color: $u-content-color;
		font-size: 28rpx;
	}

	.container .swiper {
		width: 100%;
		height: 350rpx;
		overflow: hidden;
		position: relative;
	}

	.container .swiper .swiper-item {
		height: 300rpx;
		width: 100%;
	}

	.container {
		position: relative;
	}

	.container .dots {
		position: absolute;
		bottom: 38rpx;
		left: 50%;
		// 这里一定要注意兼容不然很可能踩坑          
		transform: translate(-50%, 0);
		-webkit-transform: translate(-50%, 0);
		z-index: 99;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.banner {
		position: relative;
	}

	.container .dots .dot {
		width: 12rpx;
		height: 12rpx;
		border-radius: 100px;
		transition: all .6s;
		background: rgba(0, 0, 0, .3);
		margin-right: 10rpx;
	}

	.container .dots .active {
		width: 24rpx;
		height: 10rpx;
		background: #FF7F00;
		border-radius: 5px;
	}


	.header {
		width: 100%;
		height: 63rpx;
		margin-top: 100rpx;
		/* background-color: #aaff00; */
		position: absolute;
		z-index: 1;
		padding: 0 30rpx;
		display: flex;
		flex-wrap: wrap;
		box-sizing: border-box;
	}

	.header-left {
		width: 65rpx;
		height: 65rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.informcontent {
		font-size: 10px;
	}

	.header-right {
		width: 60%;
		height: 100%;
		background-color: #ffffff;
		margin-left: 3%;
		border-radius: 100px;
		display: flex;
		align-items: center;
	}

	.header-right input {
		width: calc(100% - 70px);
		font-size: 12px;
		margin-top: 2px;
	}


	.footer {
		padding: 0 20px 30rpx;
		width: 100%;
		background-color: #FDFDFD;
		position: absolute;
		z-index: 1;
		border-top-right-radius: 50rpx;
		box-sizing: border-box;
		margin-top: -6px;
	}

	.navigation {
		/* background-color: #007AFF; */
		height: 150px;
		display: flex;
		padding-top: 25px;
		flex-wrap: wrap;
		position: relative;
		z-index: 1;
		justify-content: space-between;

	}

	.navigation-content {
		width: 47.5%;
		position: relative;
		height: 120rpx;
		background-color: #555555;
		border-radius: 10px;
		display: flex;
		margin-bottom: 30rpx;
		justify-content: center;
		flex-direction: column;
	}

	.navigation-content image {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 0;
	}

	.navigation-p {
		color: #ffffff;
		font-size: 28rpx;
		margin: 5rpx 0 5rpx 25rpx;
	}

	.navigation-span {
		font-size: 18rpx;
		color: #ffffff;
		margin: 5rpx 0 5rpx 25rpx;
	}

	.usernavigation {
		height: 90px;
		display: flex;
		justify-content: space-between;
		/* background-color: #4CD964; */
		padding-top: 40rpx;
		margin-top: 40rpx;
	}

	.usernavigation-content {
		width: 20%;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.usernavigation-content image {
		width: 65rpx;
		height: 65rpx;
		margin-bottom: 5px;
	}

	.usernavigation-content .usernavigation-p {
		width: 100%;
		font-size: 30rpx;
		text-align: center;
		color: #686868;
	}

	.newcar {
		margin-top: 40rpx;
	}

	.newcar-header {
		display: flex;
		justify-content: space-between;
		height: 45rpx;
		align-items: center;
		margin-bottom: 50rpx;
	}

	.newcar-header-left {
		color: #271E19;
		font-size: 35rpx;
		font-weight: 600;

	}

	.newcar-header-right {
		color: #909090;
		font-size: 24rpx;
	}
</style>
