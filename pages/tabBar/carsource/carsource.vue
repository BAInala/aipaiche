<template>
	<view class="big">

		<!-- <view v-if="contenshow" class="">
			<template>
				<view class="loading" style="height: 100vh;">
					<u-loading size="70" color="#FF7F00" mode="circle"></u-loading>
				</view>
			</template>
		</view>
 -->
		<view class="big-content">
			<view class="heade-top">
				<view class="header">
					<view class="header-left">
						<image style="width: 15px;height: 15px;" src="../../../static/home/消息通知.png" mode=""></image>
						<view @click="popupshows" class="informcontent">
							车源
						</view>
					</view>
				</view>
				<!-- 用户选择 -->
				<view class="section">
					<view class="navigation">

						<view class="">
							<u-dropdown @open="open" @close="close" active-color='#FF7F00' height='70rpx' ref="uDropdown">
								<u-dropdown-item title="所在地">
									<view v-if="contenshow" class="slot-content" style="background-color: #FFFFFF;  max-height: 950rpx;">
										<scroll-view :style="{maxHeight: 950+'rpx' ,visibility:awaitshow }" scroll-y="true">
											<view class="name">
												热门城市
											</view>
											<view class="name-content">
												<view :class="{'section-name':index == 1||index == 4||index==7,'all-content':true}" v-for="item,index in city.hot">
													<view @click='clickcityname(index)' class="">
														<city-select :cityname='item' ref="cityname" :key="item.id">
															<view slot="cityname">
																{{item}}
															</view>
														</city-select>
													</view>

												</view>
											</view>
											<!-- <view class="name">
												B
											</view>
											<view class="name-content">

												<view :class="{'section-name':index == 1||index == 4||index==7,'all-content':true}" v-for="item,index in 9">
													<view @click='clickcityname(index)' class="">
														<city-select ref="cityname" :key="item.id">
															<view slot="cityname">
																全部{{index}}
															</view>
														</city-select>
													</view>

												</view>
											</view> -->
											<view class="bottom">

											</view>
										</scroll-view>
										<too-lbar v-on:cityexamine='cityexaminechange($event)' v-on:city='citychange($event)' :importnumber='0'></too-lbar>

									</view>
								</u-dropdown-item>
								<u-dropdown-item title="价格">
									<view class="slot-content" style="background-color: #FFFFFF;max-height: 950rpx;">
										<scroll-view style=" max-height: 950rpx;" scroll-y="true">
											<view class="">
												<view class="section-content">
													<view class="section-content-top">
														<view class="section-content-scope">
															已选区间
														</view>
														<view class="section-content-section">
															<view class="min">
																<input v-model="price.min" type="text" value="10" />
																<view class="min-content">
																	万
																</view>
															</view>
															<view class="x">
															</view>
															<view class="min">
																<input v-model="price.max" type="text" value="10" />
																<view class="min-content">
																	万
																</view>
															</view>
														</view>
													</view>




												</view>
												<view class="bottom" />

											</view>
										</scroll-view>
										<too-lbar v-on:cityexamine='cityexaminechange($event)' v-on:city='citychange($event)' :importnumber='1'></too-lbar>
									</view>
								</u-dropdown-item>
								<u-dropdown-item title="品牌">
									<view class="slot-content" style="background-color: #FFFFFF;max-height: 950rpx;">
										<scroll-view :style="{maxHeight: 950+'rpx' ,visibility:awaitshow }" scroll-y="true">
											<view class="brand-hod">
												<view class="name">
													热门品牌
												</view>
												<view class="brand-hod-box">
													<view @click="carpopupshow(item.baseName,item.id)" v-for="item in brand.hot" :key=item.id class="brand-hod-boxs">
														<view class="hrand-all">
															<view class="hrand-img">
																<image :src=item.logo mode='widthFix'></image>
															</view>
															<view class="hrand-p">
																{{item.baseName}}
															</view>
														</view>
													</view>
												</view>

												<template v-for="item in brandletter">
													<view>
														<view class="name">
															{{item}}
														</view>
														<view @click="carpopupshow(items.baseName,items.id)" v-for="items in brand.sort[item]" :key=items.id
														 class="brand-hod-box-x">
															<view class="hrand-img-x">
																<image :src=items.logo mode='widthFix'></image>
															</view>
															<view class="hrand-p hrand-content-x">
																{{items.baseName}}
															</view>
														</view>
													</view>
												</template>

												<!-- 里层弹出框 -->
												<template>
													<view class="car-right">
														<u-popup :duration='100' @close='closes()' :mask=false mode="right" v-model="popupshow">
															<view class="popup">
																<view v-for="item,index in branddatas" :key=item.id :class="brandindex===index? 'popup-right-title':'popup-right-content'"
																 @click="brindclick(index,item.carSeriesName,item.id)">
																	{{item.carSeriesName }}
																</view>
															</view>
														</u-popup>
													</view>
												</template>



												<view class="bottom" />
											</view>
										</scroll-view>

										<too-lbar  v-on:city='citychange($event)' v-on:cityexamine='cityexaminechange($event)' :importnumber='2'></too-lbar>
									</view>
								</u-dropdown-item>
								<u-dropdown-item title="骨架">
									<view class="slot-content" style="background-color: #FFFFFF;">
										<scroll-view style=" max-height: 950rpx;" scroll-y="true">
											<view class="skeleton">
												<view class="skeleton-box">
													1星
												</view>
												<view class="skeleton-box">
													2星
												</view>
												<view class="skeleton-box">
													3星
												</view>
											</view>

											<view class="bottom" />
										</scroll-view>
										<too-lbar :importnumber='3'></too-lbar>
									</view>
								</u-dropdown-item>
								<u-dropdown-item title="更多">
									<view class="slot-content-none" style="background-color: #FFFFFF;max-height: 950rpx;">
										<scroll-view style=" max-height: 950rpx;" scroll-y="true">
											<view class="more">
												<scroll-view scroll-y="true" class="more-left">
													<view v-for="item in 6" :key=item.id class="more-left-box">
														测试
													</view>
													<view class="bottom-box" />
												</scroll-view>
												<view class="more-right">
													<scroll-view scroll-y="true" class="more-right-outer">
														<view v-for="item in 100" :key=item.id class="skeleton-box-all">
															不限
														</view>
													</scroll-view>
												</view>
											</view>

											<view class="bottom" />
										</scroll-view>
										<too-lbar  v-on:city='citychange($event)' v-on:cityexamine='cityexaminechange($event)' :importnumber='4'></too-lbar>

									</view>
								</u-dropdown-item>
							</u-dropdown>
							</u-dropdown>

						</view>
					</view>

					<!-- 用户筛选的信息 -->
					<view class="selectcontent" v-if="alluserdata.citysite.length!==0||alluserdata.branduserclick.branduserclickname!==''">
						<view class="selectcontent-align">
							<view class="selectcontent-align-left">

								<view v-if="alluserdata.citysite.length!==0" class="usercity-select">
									所在地：
								</view>
								<view style="display: flex;" v-for="item,index in alluserdata.citysite" :key="item.id" class="user-content">
									<view style="display: flex;justify-content: space-between;	">
										<view style="float:left;writing-mode: horizontal-tb;">
											{{item}}
										</view>
										<u-icon @click="allcontent(index)" style="font-size: 18rpx;margin-left: 20rpx;" name="close"></u-icon>
									</view>
								</view>
								
								<view v-if="alluserdata.branduserclick.branduserclickname!==''" class="usercity-select">
									品牌：
								</view>
								<view v-if="alluserdata.branduserclick.branduserclickname!==''" style="display: flex;" class="user-content">
									<view style="display: flex;justify-content: space-between;	">
										<view style="float:left;writing-mode: horizontal-tb;">
											{{alluserdata.branduserclick.branduserclickname}}
										</view>
										<u-icon @click="allcontent('品牌')" style="font-size: 18rpx;margin-left: 20rpx;" name="close"></u-icon>
									</view>
								</view>

							</view>
						</view>
						<view @click="clearalldata" class="selectcontent-align-right">
							清空
						</view>
					</view>
				</view>



			</view>


		</view>

		<view ref='btn' :style="{height:alluserdata.citysite.length!==0||alluserdata.branduserclick.branduserclickname!==''?height+ 'px':height+60+ 'px'}" v-if="footershow"
		 :class="alluserdata.citysite.length!==0||alluserdata.branduserclick.branduserclickname!==''?'newcar-content' :'newcar-contents' ">
			<view @click='gocarparticulars(item)' v-for="item in 10" :key="item.id">

				<car-content>
					<template v-slot:header>
						<text>[南通] 本田 思域 2011年产1.8L 自动 无天窗 带巡航</text>
					</template>
					<template v-slot:skeleton>
						<text>骨架3星 2007.02 11.09万公里 苏F</text>
					</template>
					<template v-slot:seckill>
						<text>竞拍价 ¥</text>
					</template>

					<template v-slot:seckillnumber>
						<text>7.35</text>
					</template>

					<template v-slot:seckillnumbertrail>
						<text>万</text>
					</template>
					<template v-slot:collect>
						<text>72人收藏</text>
					</template>
					<u-icon name="photo"></u-icon>


				</car-content>

			</view>
		</view>
	</view>
	<!-- <view v-if="!footershow" class="circle">
			<image style="width: 100rpx;height: 100rpx;" src="../../../static/loading(1).gif" mode=""></image>
		</view> -->
	</view>
</template>

<script>
	import citySelect from '../../../components/cityselect.vue'
	import carContent from '../../../components/carcontent/car.vue'
	import tooLbar from '../../../components/toolbar/toolbar.vue'
	export default {
		components: {
			tooLbar,
			carContent,
			citySelect
		},
		data() {
			return {
				contenshow: false,
				show: false,

				// 车系弹出层
				popupshow: false,
				value: 1,

				sectionshow: true,
				footershow: false,
				height: '',

				awaitshow: 'hidden',
				// 定时器
				timer: '',

				// 城市数据
				city: '',
				// 品牌数据
				brand: '',
				brandletter: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'L', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
					'U', 'V', 'W', 'X', 'Y', 'Z'
				],
				// 车系index 选择背景变黄
				brandindex: -1,
				// 车系存贮
				branddatas: [],
				// 车系点击后暂存数据
				branduserclick: {
					branduserclickname: '',
					branduserclickid: '',
				},



				// 所在地
				citysite: [],


				// 价格区间
				price: {
					min: '',
					max: ''
				},
				// 所有数组数据
				alluserdata: {
					citysite: [],
					price: {
						min: '',
						max: ''
					},
					branduserclick:{
						branduserclickname: '',
						branduserclickid: '',
					}
				}
			}
		},
		watch: {},
		mounted() {
			var that = this
			var footer = uni.createSelectorQuery().select('.newcar-content').height
			// console.log(footer);
			wx.getSystemInfo({
				success: function(res) {
					that.height = (res.windowHeight - 203)
					that.footershow = true
					console.log(that.height);
					console.log("动态获取屏幕高度", res.windowHeight)

				}
			})
			var that = this
			setTimeout(function() {
				that.contenshow = true
			}, 500);
		},
		watch: {
			value() {
				console.log(this.value);
			}
		},
		methods: {
			// 添加所在地
			clickcityname(data) {
				console.log(data);
				// console.log(this.city.hot, this.city.hot[data]);
				var data = this.city.hot[data]
				var number = this.citysite.indexOf(data)
				if (number == -1) {
					this.citysite.push(data)
				} else {
					this.citysite.splice(number, 1)
				}
				console.log(this.citysite);
			},
			// 城市传过来的地区事件重置
			citychange(data) {
				console.log(data);
				if (data == '重置城市') {
					this.citysite = []
					for (var i = 0; i < this.$refs.cityname.length; i++) {
						this.$refs.cityname[i].no()
					}
				}
				if (data == '重置价格') {
					this.price.min = ''
					this.price.max = ''
					console.log(data);
				}
				if (data == '重置品牌') {
					this.alluserdata.branduserclick.branduserclickname = ''
					this.alluserdata.branduserclick.branduserclickid = ''
					this.branduserclick.branduserclickname=''
					this.branduserclick.branduserclickid = ''
					console.log(this.alluserdata);
				}

			},
			// 查看所在地
			cityexaminechange(data) {
				console.log(data);
				if (data == '查看城市') {
					var that = this
					console.log(data);
					this.alluserdata.citysite = this.citysite
					// console.log(this.alluserdata);
					this.$refs.uDropdown.close()
					console.log(this.citysite);
				}
				if (data == '查看价格') {
					this.alluserdata.price = this.price
					console.log(this.alluserdata.price);
					this.$refs.uDropdown.close()
				}
				if (data == '查看品牌') {
					
					this.$refs.uDropdown.close()
					this.alluserdata.branduserclick.branduserclickname = this.branduserclick.branduserclickname
					this.alluserdata.branduserclick.branduserclickid = this.branduserclick.branduserclickid
					console.log(this.alluserdata);
				}
			},
			// 单次点击数据清除
			allcontent(datas) {

				console.log(datas);
				if(datas=='品牌'){
					this.alluserdata.branduserclick.branduserclickname = ''
					this.alluserdata.branduserclick.branduserclickid = ''
					this.branduserclick.branduserclickname=''
					this.branduserclick.branduserclickid = ''
					console.log(this.alluserdata);
				}
				
				// console.log(this.alluserdata);
				var number = this.alluserdata.citysite.indexOf(this.alluserdata.citysite[datas])
				if (number == -1) {
					console.log('所在地无结果');
				} else {
					for (var i = 0; i < this.$refs.cityname.length; i++) {
						console.log(this.$refs.cityname[i].cityname, this.citysite[datas]);
						if (this.$refs.cityname[i].cityname == this.citysite[datas]) {
							this.$refs.cityname[i].no()
							console.log('找到了删除');
						}
					}
					// 删除citysite
					var citynumber = this.citysite.indexOf(this.alluserdata.citysite[datas])
					// 不知为何,只需要删除一次
					this.citysite.splice(number, 1)
					// this.alluserdata.citysite.splice(number, 1)
					console.log(number, citynumber);
					console.log(this.citysite, this.alluserdata.citysite);
					console.log(this.$refs.cityname);

				}

			},
			// 清理所有数据
			clearalldata() {
				// 清空城市位置
				this.alluserdata.citysite = []
				
				this.alluserdata.price.min=''
				this.alluserdata.price.max=''
				
				this.alluserdata.branduserclick.branduserclickname = ''
				this.alluserdata.branduserclick.branduserclickid = ''
				this.branduserclick.branduserclickname=''
				this.branduserclick.branduserclickid = ''
				
				for (var i = 0; i < this.$refs.cityname.length; i++) {
					this.$refs.cityname[i].no()
				}
			},
			// 车系点击
			brindclick(index, name, id) {
				console.log(index, name, id);
				this.brandindex = index
				this.branduserclick.branduserclickname = name
				this.branduserclick.branduserclickid = id
				console.log(this.branduserclick);


			},
			gocarparticulars(index) {
				console.log('跳转车详情', index);
				uni.navigateTo({
					url: '../../otherpage/carparticulars/carparticulars',
				})
			},
			screen() {
				console.log(this.show);
				this.show = true
			},
			closeDropdown() {
				console.log(1);
				this.$refs.uDropdown.close();
			},
			open(index) {
				var that = this
				console.log(index, '打开');
				this.footershow = false
				setTimeout(function() {
					that.awaitshow = 'show'
				}, 0);

				if (index == 0) {
					uni.request({
						url: that.url + '/regionCar/list', //仅为示例，并非真实接口地址。
						header: {
							'Authorization': uni.getStorageSync('userdata').token
						},
						method: 'GET',
						// data: {
						// 	'pageNum': 0,
						// 	'pageSize': 5
						// },
						success: (res) => {
							console.log(res.data.data);
							that.city = res.data.data

						}
					});
				}
				if (index == 2) {
					
					uni.request({
						url: that.url + '/brand/list', //仅为示例，并非真实接口地址。
						header: {
							'Authorization': uni.getStorageSync('userdata').token
						},
						method: 'GET',
						// data: {
						// 	'pageNum': 0,
						// 	'pageSize': 5
						// },
						success: (res) => {
							console.log(res.data.data);
							that.brand = res.data.data
							
							for (var i = 0; i < that.branddatas.length; i++) {
								if (that.branddatas[i].id == that.branduserclick.branduserclickid) {
									that.brandindex = i
								}
							}
						}
					});
					
					
					
				}
				
			},
			close(index) {
				console.log(index, '关闭');
				this.brandindex = -1
				this.footershow = true
				this.awaitshow = 'hidden'
			},
			popupshows() {
				console.log(1);

				this.popupshow = false
			},
			carpopupshow(name, id) {
				// 检测定时器
				if (this.timer) {
					// 如果有定时器,则清除
					this.popupshow = false
					clearTimeout(this.timer)
					this.timer = null
				}

				var that = this
				// 设置定时器和事件
				this.timer = setTimeout(() => {
					this.popupshow = true
					console.log(name, id);

					uni.request({
						url: that.url + '/brand/carSeries/list', //仅为示例，并非真实接口地址。
						header: {
							'Authorization': uni.getStorageSync('userdata').token
						},
						method: 'POST',
						data: {
							'name': name,
						},
						success: (res) => {
							console.log(res.data.data);
							that.branddatas = res.data.data

							for (var i = 0; i < that.branddatas.length; i++) {
								if (that.branddatas[i].id == that.branduserclick.branduserclickid) {
									that.brandindex = i
								}
							}
						},
					});
				}, 300)
			},
			// 车系详情弹窗关闭
			closes() {
				console.log(this.popupshow);
				this.brandindex = -1
			}

		}
	}
</script>

<style scoped>
	.big {
		position: relative;
	}

	.header {
		width: 100%;
		height: 33px;
		margin: 40px 0 35px;
		/* background-color: #aaff00; */
		z-index: 1;
		padding: 0 30rpx;
		display: flex;
		flex-wrap: wrap;
		box-sizing: border-box;
	}

	.header-left {
		height: 65rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.informcontent {
		font-size: 40rpx;
		font-weight: 600;
	}

	.navigation {
		height: 35px;
		box-shadow: 0 3px 4px #f7f7f7;
	}

	.section {
		/* height: 400px; */
		/* background-color: #b5b5b5; */
	}

	.data-v-51061e92 {
		position: relative;
	}

	.slot-content {
		padding: 0 30rpx;
		color: #999999;
		border-bottom-left-radius: 50rpx;
		border-bottom-right-radius: 50rpx;
		position: relative;
		z-index: 8;
	}

	.slot-content-none {
		color: #999999;
		border-bottom-left-radius: 50rpx;
		border-bottom-right-radius: 50rpx;
	}

	.name {
		font-size: 25rpx;
		margin: 30rpx 5rpx;
	}

	.all-content {
		/* text-align: center;
		color: #271E19;
		width: 28%;
		padding: 10rpx 0 10rpx 0;
		border: 1px solid #DCD8D6;
		border-radius: 7rpx;
		font-size: 30rpx;
		margin: 0rpx -2% 20rpx 5%;
		display: inline-block;
		position: relative; */

		/* font-size: 30rpx;
		width: 28vw;
		border-radius: 7rpx;
		text-align: center; */
	}

	.name-content {
		display: flex;
		flex-wrap: wrap;
		color: #000000;
	}

	.border-all {
		border: 1rpx solid #18B566;
		padding: 10rpx 0 10rpx 0;
	}

	.section-name {
		padding: 0 4vw;
	}




	.selectcontent {
		width: 100%;
		height: 60px;
		display: flex;
		background-color: #ffffff;
		align-items: center;
		box-shadow: 0 3px 4px #f7f7f7;
	}

	.selectcontent-align {
		width: 80%;
		padding: 0 30rpx;
		display: flex;
		overflow-y: auto;
	}

	.selectcontent-align-left {
		display: -webkit-box;
		border: 1px solid #ffffff;
		/* background-color: #2C405A; */
	}

	.selectcontent-align-right {
		width: 20%;
		height: 20px;
		text-align: center;
		color: #FF7F00;
		font-size: 25rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		border-left: 1px solid #DCD8D6;
	}

	.user-content {
		background-color: #F4F1EF;
		font-size: 23rpx;
		/* min-width: 60px; */
		/* height: 30px; */
		border-radius: 10rpx;
		display: flex;
		box-sizing: border-box;
		align-items: center;
		color: #909090;
		padding: 10rpx 20rpx;
		margin: 0 20rpx 0 0;
		box-sizing: content-box;
	}

	.user-city {
		min-width: 50rpx;
	}

	::-webkit-scrollbar {
		width: 0;
		height: 0;
		background-color: transparent;
	}

	.u-dropdown__menu {
		padding: 0 20rpx;
	}

	.bottom {
		margin-bottom: 100rpx;
	}

	.section-content {
		padding: 40rpx 20rpx;
	}

	.section-content-scope {
		font-size: 30rpx;
		color: #000000;
	}

	.section-content-section {
		width: 50%;
		margin-left: 20rpx;
		display: flex;
		align-items: center;
		/* background-color: #18B566; */
	}

	.section-content-top {
		display: flex;
		align-items: center;
	}

	.min {
		/* background-color: #007AFF; */
		display: flex;
		height: 45rpx;
		align-items: center;
		width: 125rpx;
		padding: 10rpx 20rpx;
		font-size: 27rpx;
		border-radius: 10rpx;
		border: 1px solid #DCD8D6;

	}

	.min input {
		color: #FF7F00;
		margin-top: 3px;
	}

	.min-content {
		font-size: 20rpx;
		margin-left: 20rpx;
	}

	.x {
		width: 8px;
		height: 1px;
		margin: 0 10rpx;
		background-color: #000000;
	}

	.wrap {
		padding: 30rpx;
	}


	.brand-hod {}

	.brand-hod-content {
		color: #909090;
		margin-top: 50rpx;
	}

	.brand-hod-box {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}

	.brand-hod-boxs {
		width: 25%;
		display: flex;
		justify-content: center;
		margin-bottom: 40rpx;
	}

	.hrand-all {
		height: 120rpx;
	}

	.hrand-img {
		width: 70rpx;
		height: 70rpx;
		margin: 0 auto;
		background-color: #f0f0f0;
	}

	.hrand-p {
		font-size: 30rpx;
		color: #000000;
		margin-top: 10rpx;
		text-align: center;
	}

	.brand-hod-box-x {
		width: 100%;
		display: flex;
		align-items: center;
		height: 90rpx;
		border-bottom: 0.5px solid #f5f5f5;
	}

	.hrand-img-x {
		margin-left: 40rpx;
		width: 50rpx;
		height: 50rpx;
	}

	.hrand-img-x image {
		width: 100%;
	}

	.hrand-content-x {
		margin-top: 0;
		margin-left: 120rpx;
	}

	.popup {
		width: 380rpx;
		height: 100%;
		padding-top: 20rpx;
		background-color: #ffffff;
		box-shadow: 0 -5rpx 5rpx #000000;
	}

	.big>>>.u-drawer-right {
		overflow: hidden;
		box-shadow: 0 -5px 5px #d3d3d3;
		border-bottom-right-radius: 45rpx;
	}

	.popup-right-content {
		font-size: 30rpx;
		padding: 20rpx 30rpx;
		border-bottom: 1px solid #f5f5f5;
	}

	.popup-right-title {
		font-size: 30rpx;
		color: rgba(255, 127, 0, 1);
		padding: 20rpx 30rpx;
		border-bottom: 1px solid #ffffff;
		background-color: rgba(255, 230, 205, 1);
	}

	.skeleton {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		/* background-color: #18B566; */
	}

	.skeleton-box {
		width: 47%;
		text-align: center;
		padding: 15rpx 0;
		background-color: #FFFFFF;
		border: 1px solid #DCD8D6;
		border-radius: 10rpx;
		margin: 10rpx 0;
	}

	.more {
		width: 100%;
		height: 800rpx;
		margin-top: 50rpx;

		/* background-color: #19BE6B; */
		display: flex;
	}

	.more-left {
		height: 800rpx;
		width: 160rpx;
		box-sizing: border-box;
		border-radius: 20rpx;
		/* border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx; */
	}

	.more-left-box {
		width: 160rpx;
		height: 160rpx;
		text-align: center;
		line-height: 160rpx;
		background-color: #F4F1EF;
	}

	.more-right {
		width: calc(100% - 160rpx);
		height: 800rpx;
		/* background-color: #007AFF; */
		padding: 0 30rpx;
	}

	.more-right-outer {
		width: 100%;
		height: 800rpx;
		justify-content: space-between;
		/* background-color: #ffdc2b; */
	}

	.skeleton-box-all {
		width: 47%;
		text-align: center;
		padding: 15rpx 0;
		background-color: #FFFFFF;
		border: 1px solid #DCD8D6;
		border-radius: 10rpx;
		margin: 0 1.5% 25rpx;
		display: inline-block;
	}

	.bottom-box {
		width: 100%;
		height: 40rpx;
		background-color: #F4F1EF;
	}

	.newcar-content {
		margin-top: 203px;
		padding: 0 40rpx 0;
		position: relative;
		overflow: scroll;
		z-index: 6;
		padding: 40rpx 0;
	}

	.newcar-contents {
		margin-top: 143px;
		padding: 0 40rpx 0;
		position: relative;
		overflow: scroll;
		padding: 30rpx 0 0;
		z-index: 6;
	}

	.heade-top {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 5;
		background-color: #ffffff;
	}

	.circle {
		width: 100%;
		margin-top: 420rpx;
		height: 500rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.loading {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.car-right {
		position: relative;
		z-index: 3;
	}

	.hrand-img>image {
		width: 70rpx;
	}

	.usercity-select {
		font-size: 23rpx;
		display: flex;
		margin-right: 5rpx;
		align-items: center;
	}
</style>
