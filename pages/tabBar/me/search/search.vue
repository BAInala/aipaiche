<template>
	<view class="big">
		<hea-der>

		</hea-der>
		<view class="search-header">
			<view class="search-header-left">
				<u-icon color="rgba(144, 144, 144, 1)" class="search-icon" name="search"></u-icon>
				<input placeholder="输入你想要的车" class="input" type="text" value="" />
			</view>
			<view class="search-header-right">
				取消
			</view>
		</view>

		<!-- 历史搜索与猜你喜欢 -->
		<view style="display: none;" class="footer">
			<view class="section">
				<view class="section-header">
					<view class="section-header-content">
						历史搜索
					</view>


					<view class="section-header-right">
						<u-icon size="35" name="trash-fill" color="#000000"></u-icon>
						<view class="clear">
							清空
						</view>
					</view>
				</view>


				<view class="section-footer">
					<view class="searchname">
						比亚迪
					</view>
				</view>
			</view>

			<view class="section">
				<view class="section-header">
					<view class="section-header-content">
						猜你喜欢
					</view>


					<view class="section-header-right">
						<u-icon size="35" name="reload" color="#000000"></u-icon>
						<view class="clear">
							换一换
						</view>
					</view>
				</view>


				<view class="section-footer">
					<view class="searchname">
						比亚迪
					</view>
				</view>
			</view>
		</view>
		
		<!-- 暂无搜索 -->
		<view style="display: none;" class="footer">
			<view class="footer-img">
				<image src="../../../../static/nomorecar.png" mode=""></image>
			</view>
			<view class="nomorecar">
			暂无此车源
	
			</view>
		</view>
		
		<!-- 搜索后展示的内容 -->
		<view class="footer">
			<view class="search-content">
				大众
			</view>
			<view class="search-content">
				大众
			</view>
		</view>
	</view>
</template>

<script>
	import heaDer from '../../../../components/header.vue'
	export default {
		data() {
			return {

			}
		},
		components: {
			heaDer
		},
		methods: {

		}
	}
</script>

<style scoped>
	.big {
		padding: 0 35rpx;
	}

	.search-header {
		width: 100%;
		margin-top: 40rpx;
		display: flex;
		align-items: center;
	}

	.search-header-left {
		width: 80%;
		display: flex;
		padding: 10rpx 35rpx;
		background-color: #007AFF;
		border-radius: 50rpx;
		justify-content: space-between;
		background-color: rgba(244, 241, 239, 1);
	}

	.search-header-right {
		width: 20%;
		text-align: right;
		color: rgba(144, 144, 144, 1);
	}

	.search-icon {}

	input {
		width: 80%;
		font-size: 25rpx;
	}

	.section-header {
		display: flex;
		padding-bottom: 60rpx;
		justify-content: space-between;
	}

	.section-header-content {
		font-size: 35rpx;
		color: #000000;
		font-weight: 800;
	}

	.section {
		width: 100%;
		/* background-color: #18B566; */
		margin-top: 80rpx;
	}

	.section-header-right {
		display: flex;
		align-items: center;
	}

	.clear {
		margin-left: 20rpx;
		font-size: 22rpx;
	}

	.section-footer {
		width: 100%;
		display: flex;
		/* background-color: #2B85E4; */

	}

	.searchname {
		color: rgba(144, 144, 144, 1);
		background: #F4F1EF;
		border-radius: 8rpx;
		padding: 10rpx 30rpx;
	}
	.footer image{
		width: 400rpx;
		height: 200rpx;
	}
	.footer-img{
		display: flex;
		justify-content: center;
		margin-top: 250rpx;
	}
	.nomorecar{
		text-align: center;
		margin-top: 100rpx;
	}
	.search-content{
		padding: 50rpx 0 0 0 ;
		margin-left: 5rpx;
	}
</style>
