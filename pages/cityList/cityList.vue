<template>
	<view class="content">
		<view class="select-result select-title" v-if="cityList.length">
			当前选择的是：{{selectResult}}
		</view>
		<view class="select-result">
			<button class="select-btn" type="primary" size="mini" @click="addCity">添加城市</button>
			<text class="sub-select-title">添加的城市可以在当前城市页面快速切换</text>
		</view>
		<picker-view v-if="cityList.length" :value="value" :indicator-style="indicatorStyle" @change="bindChange">
            <picker-view-column>
                <view class="item" v-for="(item,index) in cityList" :key="index">{{item.name}}</view>
            </picker-view-column>
			<picker-view-column v-if="cityList[value[0]].districts.length">
			    <view class="item" v-for="(item,index) in cityList[value[0]].districts" :key="index">{{item.name}}</view>
			</picker-view-column>
			<picker-view-column v-if="cityList[value[0]].districts.length && cityList[value[0]].districts[value[1]].districts.length">
			    <view class="item" v-for="(item,index) in cityList[value[0]].districts[value[1]].districts" :key="index">{{item.name}}</view>
			</picker-view-column>
        </picker-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cityList: [],
				loading: false,
				value: [0, 0, 0],
				storage_cityList: [],
				indicatorStyle: `height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/100))}px;`
			}
		},
		computed: {
			selectResult(){
				let res = '';
				if(this.cityList.length){
					res += this.cityList[this.value[0]].name + '-';
					if(this.cityList[this.value[0]].districts.length){
						res += this.cityList[this.value[0]].districts[this.value[1]].name + '-';
						if(this.cityList[this.value[0]].districts[this.value[1]].districts.length){
							res += this.cityList[this.value[0]].districts[this.value[1]].districts[this.value[2]].name;
						}
					}
				}
				return res;
			},
			selectAdcode(){
				let res = '';
				if(this.cityList[this.value[0]].districts.length){
					if(this.cityList[this.value[0]].districts[this.value[1]].districts.length){
						res = this.cityList[this.value[0]].districts[this.value[1]].districts[this.value[2]].adcode;
					}
				}else{
					res = this.cityList[this.value[0]].adcode;
				}
				return res;
			},
			selectCityInfo(){
				let res = '';
				if(this.cityList[this.value[0]].districts.length){
					if(this.cityList[this.value[0]].districts[this.value[1]].districts.length){
						res = this.cityList[this.value[0]].districts[this.value[1]].districts[this.value[2]];
					}else{
						res = this.cityList[this.value[0]].districts[this.value[1]];
					}
				}else{
					res = this.cityList[this.value[0]];
				}
				return res;
			}
		},
		onLoad() {
			this.getCityList();
			try {
				const cityList = uni.getStorageSync('weather_storage_cityList');
				if (cityList && cityList.length) {
					this.storage_cityList = cityList;
				}
			} catch (e) {
				console.log(e);
			}
		},
		methods: {
			getCityList() {
				this.loading = true;
				uni.showLoading({
					title: '获取城市数据中...'
				});
				uni.request({
					url: 'https://restapi.amap.com/v3/config/district',
					method: 'GET',
					data: {
						key: '1155d2464abdf5c3a50d534a5591f293',
						keywords: '中国',
						subdistrict: 3
					},
					success: (res) => {
						if(res.data.status == 1){
							this.cityList = res.data.districts[0].districts;
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
							content: '获取城市数据失败，请稍后重试',
							showCancel: false
						});
					},
					complete: () => {
						this.loading = false;
						uni.hideLoading();
					}
				});
			},
			bindChange (e) {
			    const val = e.detail.value;
				if(val[0] === this.value[0]){
					if(val[1] === this.value[1]){
						this.value = val;
					}else{
						this.value = [val[0], val[1], 0];
					}
				}else{
					this.value = [val[0], 0, 0];
				}
				console.log(this.value)
			},
			addCity(){
				let selectAdcode = this.selectAdcode;
				for(let i = 0,len = this.storage_cityList.length; i < len; i++){
					if(this.storage_cityList[i].adcode === selectAdcode){
						this.storage_cityList.splice(i, 1);
						break;
					}
				}
				this.storage_cityList.push(this.selectCityInfo);
				try {
					uni.setStorageSync('weather_storage_cityList', this.storage_cityList);
					uni.showModal({
						title: '提示',
						content: '添加城市成功',
						showCancel: false
					});
				} catch (e) {
					uni.showModal({
						title: '提示',
						content: '添加城市失败，请重试',
						showCancel: false
					});
					console.log(e)
				}
			}
		}
	}
</script>

<style lang="scss">
.content {
	color: $uni-text-color;
	font-size: $uni-font-size-base;
}
.select-result {
	padding: 15upx;
	color: $uni-text-color;
	font-size: $uni-font-size-base;
	&.select-title {
		font-weight: 700;
		padding: 20upx 15upx;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.sub-select-title {
		font-weight: 700;
		margin-left: 15upx;
		color: $uni-text-color-grey;
		font-size: $uni-font-size-sm;
	}
	.select-btn {
		vertical-align: middle;
	}
}
picker-view {
	width: 100%;
	height: 1000upx;
	margin-top: 20upx;
	color: $uni-text-color;
	font-size: $uni-font-size-base;
}
.item {
	line-height: 100upx;
	text-align: center;
}
</style>
