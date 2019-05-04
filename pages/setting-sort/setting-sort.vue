<template>
	<view class="content">
		<view class="title">
			对城市的优先级进行排序，当前城市页面默认显示第一个城市的天气预报。
		</view>
		<form @submit="formSubmit" class="form">
			<view class="form-item"
				v-for="(item, index) in storage_cityList" :key="index">
				<label class="form-label">
					<view class="item-title">{{item.city||item.name}}</view>
					<view class="item-body move-btn-box" v-if="storage_cityList.length > 1">
						<button class="move-btn" type="primary" size="mini" @click="toUpper(item, index)">向上</button>
						<button class="move-btn" type="primary" size="mini" @click="toDown(item, index)">向下</button>
						<button class="move-btn" type="primary" size="mini" @click="delect(item, index)">删除</button>
					</view>
				</label>
			</view>
			<view class="form-item" style="margin: 20upx 15upx 0;border: 0;">
				<button  type="primary" formType="submit">保存设置</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				storage_cityList: [],
			}
		},
		onShow() {
			try {
				const cityList = uni.getStorageSync('weather_storage_cityList');
				if (cityList && cityList.length) {
					this.storage_cityList = cityList;
				}
			} catch (e) {
				console.log(e);
			}
		},
		onNavigationBarButtonTap(obj){
			uni.switchTab({
				url: '/pages/index/index'
			});
		},
		methods: {
			formSubmit(){
				try {
					uni.setStorageSync('weather_storage_cityList', this.storage_cityList);
					uni.showModal({
						title: '提示',
						content: '设置成功',
						showCancel: false
					});
				} catch (e) {
					uni.showModal({
						title: '提示',
						content: '设置失败，请重试',
						showCancel: false
					});
					console.log(e)
				}
			},
			toUpper(item, index){
				if(index > 0){
					const upperItem =  this.storage_cityList[index - 1];
					this.storage_cityList.splice(index, 1);
					this.storage_cityList.splice(index - 1, 1);
					this.storage_cityList.splice(index - 1, 0, item);
					this.storage_cityList.splice(index, 0, upperItem);
				}
			},
			toDown(item, index){
				if(index < this.storage_cityList.length - 1){
					const downItem =  this.storage_cityList[index + 1];
					this.storage_cityList.splice(index + 1, 1);
					this.storage_cityList.splice(index, 1);
					this.storage_cityList.splice(index, 0, downItem);
					this.storage_cityList.splice(index + 1, 0, item);
				}
			},
			delect(item, index){
				this.storage_cityList.splice(index, 1);
			}
		}
	}
</script>

<style lang="scss" scoped>
.content {
	color: $uni-text-color;
	font-size: $uni-font-size-base;
}
.title {
	padding: 25upx 15upx 0;
}
.form {
	padding: 15upx;
}
.form-item {
	margin: 0 15upx;
	border-top:  1px solid $uni-border-color;
	&:nth-child(1) {
		border-top: 0; 
	}
}
.form-item,
.form-label {
	min-height: 100upx;
	.item-title {
		display: inline-block;
		vertical-align: top;
		width: 45%;
		line-height: 100upx;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.item-body {
		display: inline-block;
		width: 55%;
		min-height: 100upx;
	}
	.move-btn-box {
		box-sizing: border-box;
		padding: 20upx 0;
	}
	.move-btn {
		display: inline-block;
		margin-left: 15upx;
	}
}
</style>
