<template>
	<view class="big">
		<hea-der></hea-der>

		<view class="header-img">
			<open-data type="userAvatarUrl"></open-data>
		</view>

		<view class="section-message">
			<u-form-item label="姓名">
				<open-data type="userNickName"></open-data>
			</u-form-item>
			<u-form-item label="手机">
				<u-input @click='prop' :placeholder='from.mobile' v-model="form.mobile" />
			</u-form-item>

			<u-popup :mask-close-able='false' width="600rpx" border-radius="14" close-icon-pos='topRight' mode="center" v-model="mobileshow">
				<view class="prop-content">
					<view class="">
						为保障您正常使用艾拍车小程序，请填写有效且能联系到您的手机号
					</view>
					<view style="color: #ff0000;margin-top: 20rpx;" class="">
						(错误的手机号将影响您正常使用 {{time}} s)
					</view>
				</view>
			</u-popup>

			<u-form-item label="性别">
				<u-radio-group v-model="value">
					<u-radio active-color="#FF7F00" v-for="(item, index) in radioList" :key="index" :name="item.name" :disabled="item.disabled">
						{{ item.name }}
					</u-radio>
				</u-radio-group>
			</u-form-item>
			<u-form-item label-width='auto' label="经营地">
				<u-input :placeholder='from.city' :select-open=show @click="show = true" type="select" />
			</u-form-item>
			<u-picker @confirm='confirm' mode="region" v-model="show"></u-picker>

			<view class="submit">
				<view @click="submit" class="submit-content">
					保存
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
		watch: {
			value() {
				console.log(this.value);
			}
		},
		data() {
			return {
				// 地区
				show: false,

				// 数据
				from: {
					mobile: 17601547424,
					city: '东城区 市辖区 北京市'
				},
				value: '男',

				radioList: [{
						name: '男',
						disabled: false
					},
					{
						name: '女',
						disabled: false
					}
				],
				mobileshow: false,

				pageshow: true,
				timer: '',
				time: 3
			}
		},
		methods: {
			confirm(e) {
				console.log(e.area.label, e.city.label, e.province.label);
				this.from.city = e.area.label +' '+ e.city.label + ' '+ e.province.label
			},
			prop() {
				if(this.pageshow){
					this.mobileshow = true
					this.timer = setInterval(() => {
						this.time = this.time - 1
						console.log(this.time);
						if (this.time < 1) {
							clearTimeout(this.timer);
							this.timer = null;
							this.mobileshow = false
							this.pageshow = false
							setTimeout(()=>{
								this.time = 3
							},1000)
						}
					}, 1000)
				}
			},
			submit(){
				console.log(this.from,this.value);
			}
		}
	}
</script>

<style scoped>
	.big {
		padding: 0 40rpx;
	}

	.header-img {
		width: 200rpx;
		height: 200rpx;
		border-radius: 100rpx;
		overflow: hidden;
		margin: 100rpx auto;
		border: 2px solid #ffffff;
		box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
	}

	.section-message {
		width: 100%;
		padding: 30rpx 40rpx;
		background-color: #ffffff;
		border-radius: 10rpx;
		box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);

	}

	.submit {
		display: flex;
		justify-content: center;
	}

	.submit-content {
		padding: 25rpx 100rpx;
		background-color: #FF7F00;
		font-size: 40rpx;
		border-radius: 50rpx;
		color: #FFFFFF;
		margin: 80rpx 0 40rpx;
	}

	.big>>>.u-form-item--left__content.data-v-006449ec {
		padding-right: 30rpx;
	}

	.prop-content {
		text-align: center;
		padding: 50rpx 50rpx;
	}
</style>
