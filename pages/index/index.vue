<template>
	<view class="content">
		<view class="nav-list" v-if="storage_cityList.length > 1">
			<view class="item"
				v-for="(item, index) in storage_cityList" :key="index"
				:class="{on: index === current_index}"
				@click="changeCity(index)">
				{{item.city || item.name}}
			</view>
		</view>
		<view class="info-title">
			今日天气详情：
		</view>
		<view class="list-info">
			<view class="item">
				<view class="">
					今日天气：{{weatherBaseInfo.weather}}
				</view>
			</view>
			<view class="item">
				<view class="">
					实时气温：{{weatherBaseInfo.temperature}}摄氏度
				</view>
			</view>
			<view class="item">
				<view class="">
					风向描述：{{weatherBaseInfo.winddirection}}
				</view>
			</view>
			<view class="item">
				<view class="">
					风力级别：{{weatherBaseInfo.windpower}}级
				</view>
			</view>
			<view class="item">
				<view class="">
					空气湿度：{{weatherBaseInfo.humidity}}
				</view>
			</view>
			<view class="item">
				<view class="">
					更新时间：{{weatherBaseInfo.reporttime}}
				</view>
			</view>
		</view>
		<view class="info-title">
			近几日天气预报
			<text class="info-sub-title">（天气现象、温度、风向、风力以白天/晚上格式显示）</text>：
		</view>
		<view class="list-all-info">
			<scroll-view scroll-x="true" class="scroll-box">
				<view class="scroll-item">
					<view class="item-text">
						日期
					</view>
					<view class="item-text">
						星期
					</view>
					<view class="item-text">
						天气现象
					</view>
					<view class="item-text">
						温度
					</view>
					<view class="item-text">
						风向
					</view>
					<view class="item-text">
						风力
					</view>
				</view>
				<view class="scroll-item" v-for="(item, index) in weatherAllInfo.casts" :key="index">
					<view class="item-text">
						{{item.date.slice(5)}}
					</view>
					<view class="item-text">
						周{{weekList[item.week]}}
					</view>
					<view class="item-text">
						{{item.dayweather}}/{{item.nightweather}}
					</view>
					<view class="item-text">
						{{item.daytemp}}℃/{{item.nighttemp}}℃
					</view>
					<view class="item-text">
						{{item.daywind}}/{{item.nightwind}}
					</view>
					<view class="item-text">
						{{item.daypower}}级/{{item.nightpower}}级
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="all-time">
			更新时间：{{weatherAllInfo.reporttime}}
		</view>
	</view>
</template>

<script>
	const duration = 2000;
	export default {
		data() {
			return {
				cityInfo: {},
				loading: false,
				weatherBaseInfo: {},
				weatherAllInfo: [],
				current_index: 0,
				storage_cityList: [],
				weekList: ['', '一', '二', '三', '四', '五', '六', '末']
			}
		},
		computed: {
			getTitle(){
				let title = '';
				if(this.cityInfo.city){
					title = `${this.cityInfo.city}-天气预报`;
				}
				if(this.cityInfo.name){
					title = `${this.cityInfo.name}-天气预报`;
				}
				if(!this.cityInfo.city && !this.cityInfo.name){
					title = '天气预报';
				}
				return title;
			}
		},
		onShow() {
			this.current_index = 0;
			uni.setNavigationBarTitle({
				title: '天气预报'
			});
			try {
				const cityList = uni.getStorageSync('weather_storage_cityList');
				if (cityList && cityList.length) {
					this.cityInfo = cityList[0];
					this.storage_cityList = cityList;
					uni.setNavigationBarTitle({
						title: this.getTitle
					});
					this.getWeather('base');
					this.getWeather('all');
				} else {
					this.getLocation();
				}
			} catch (e) {
				this.getLocation();
				console.log(e);
			}
		},
		onPullDownRefresh() {
			console.log('onPullDownRefresh');
			this.getWeather('base', 'closePullDownRefresh');
			this.getWeather('all', 'closePullDownRefresh');
		},
		onNavigationBarButtonTap(obj){
			if(obj.index === 0){
				uni.switchTab({
					url: '/pages/cityList/cityList'
				});
			}else{
				uni.switchTab({
					url: '/pages/setting/setting'
				});
			}
		},
		methods: {
			getLocation() {
				this.loading = true;
				uni.showLoading({
					title: '城市定位中...'
				});
				uni.request({
					url: 'https://restapi.amap.com/v3/ip',
					method: 'GET',
					data: {
						key: '1155d2464abdf5c3a50d534a5591f293'
					},
					success: (res) => {
						if(res.data.status == 1){
							this.cityInfo = res.data;
							this.storage_cityList.push(this.cityInfo);
							uni.setNavigationBarTitle({
								title: this.getTitle
							});
							this.getWeather('base');
							this.getWeather('all');
							try {
								uni.setStorageSync('weather_storage_cityList', [this.cityInfo]);
							} catch (e) {
								console.log(e)
							}
						}else{
							if(res.data.info){
								uni.showModal({
									content: res.data.info,
									showCancel: false
								});
							}
						}
					},
					fail: (err) => {
						console.log('request fail', err);
						uni.showModal({
							content: '定位失败，请手动选择城市',
							showCancel: false
						});
					},
					complete: () => {
						this.loading = false;
						uni.hideLoading();
					}
				});
			},
			getWeather(extensions, close) {
				this.loading = true;
				uni.showLoading({
					title: '获取天气信息...'
				});
				uni.request({
					url: 'https://restapi.amap.com/v3/weather/weatherInfo',
					method: 'GET',
					data: {
						key: '1155d2464abdf5c3a50d534a5591f293',
						city: this.cityInfo.adcode,
						extensions
					},
					success: (res) => {
						if(res.data.status == 1){
							if(extensions === 'base'){
								this.weatherBaseInfo = res.data.lives[0];
							}else if(extensions === 'all'){
								this.weatherAllInfo = res.data.forecasts[0];
							}
						}else{
							if(res.data.info){
								uni.showModal({
									content: res.data.info,
									showCancel: false
								});
							}
						}
					},
					fail: (err) => {
						console.log('request fail', err);
						uni.showModal({
							content: '数据获取失败，请稍后重试',
							showCancel: false
						});
					},
					complete: () => {
						this.loading = false;
						uni.hideLoading();
						if(close === 'closePullDownRefresh'){
							uni.stopPullDownRefresh();
						}
					}
				});
			},
			changeCity(index){
				this.current_index = index;
				this.cityInfo = this.storage_cityList[index];
				uni.setNavigationBarTitle({
					title: this.getTitle
				});
				this.getWeather('base');
				this.getWeather('all');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		color: $uni-text-color;
		font-size: $uni-font-size-base;
		text-align: center;
	}
	.nav-list {
		position: fixed;
		top: 195upx;
		right: 0;
		z-index: 100;
		width: 150upx;
		background-color: #fff;
		border:  1px solid $uni-border-color;
		border-right: 0;
		border-radius: $uni-border-radius-lg 0 0 $uni-border-radius-lg;
		.item {
			border-top:  1px solid $uni-border-color;
			padding: 20upx 0;
			text-align: center;
			cursor: pointer;
			&:nth-child(1) {
				border-top: 0;
			}
			&.on {
				color: $uni-color-primary;
			}
		}
	}
	.info-title {
		margin: 0 15upx;
		padding: 30upx 0;
		font-size: $uni-font-size-lg;
		font-weight: 700;
		text-align: left;
		border-bottom: 1px solid $uni-border-color;
	}
	.info-sub-title {
		font-weight: 700;
		color: $uni-text-color-grey;
		font-size: $uni-font-size-sm;
	}
	.list-info {
		padding: 15upx;
		.item {
			padding: 20upx 0;
			border-bottom: 1px solid $uni-border-color;
		}
	}
	.list-all-info {
		margin: 0 15upx;
	}
	.scroll-box {
		white-space: nowrap;
		.scroll-item {
			display: inline-block;
			width: 200upx;
			.item-text {
				padding: 20upx 0;
				border-left: 1px solid $uni-border-color;
				border-bottom: 1px solid $uni-border-color;
			}
			&:nth-child(1) {
				.item-text {
					border-left: 0;
				}
			}
		}
	}
	.all-time {
		margin: 0 15upx;
		padding: 20upx 0 40upx;
	}
</style>
