<template>
	<view class="content">
		<view class="title">
			设置中心
		</view>
		<view class="nav-list">
			<navigator url="/pages/setting-sort/setting-sort" class="nav-item">
				<text class="iconfont nav-icon icon-sort"></text>城市排序
			</navigator>
			<navigator url="/pages/cityList/cityList"
				open-type="switchTab" class="nav-item">
				<text class="iconfont nav-icon icon-add"></text>添加城市
			</navigator>
			<navigator url="/pages/setting-date/setting-date" class="nav-item">
				<text class="iconfont nav-icon icon-date"></text>天气日历（研发中...）
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onShow() {
			
		},
		onNavigationBarButtonTap(obj){
			uni.switchTab({
				url: '/pages/index/index'
			});
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.content {
	color: $uni-text-color;
	font-size: $uni-font-size-base;
}
.title {
	padding: 25upx 15upx;
	font-weight: 700;
}
.nav-list {
	padding: 0 15upx;
}
.nav-item {
	padding: 0 15upx;
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 100upx;
	border-bottom:  1px solid $uni-border-color;
	&:first-child {
		border-top:  1px solid $uni-border-color;
	}
}
.nav-icon {
	margin-right: 15upx;
	flex: 0 0 50upx;
	width: 50upx;
	height: 50upx;
	color: #fff;
	text-align: center;
	line-height: 50upx;
	border-radius: 50%;
	background-color: rgba(0, 0, 0, 0.5);
}
</style>
