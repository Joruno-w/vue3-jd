<template>
	<div class="docker">
		<div class="docker__item" :class="{'docker__item--active': index === 0}" v-for="(item,index) in items" :key="item.icon">
			<i class="iconfont" v-html="item.icon"></i>
			<div>{{item.text}}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Docker",
	setup(){
		const items = [
			{icon: '&#xe606;',text: '首页'},
			{icon: '&#xe603;',text: '购物车'},
			{icon: '&#xe63e;',text: '订单'},
			{icon: '&#xe78b;',text: '我的'},
		];
		return {
			items
		}
	}
}
</script>

<style scoped lang="scss">
.docker {
	position: absolute;
	left: 0;
	bottom: 0;
	right: 0;
	height: .5rem;
	display: flex;

	&__item {
		flex: 1;
		padding-top: 5px;
		text-align: center;
		height: .5rem;
		font-size: .1rem;

		.iconfont {
			font-size: .2rem;
		}

		div {
			margin-top: 2px;
		}

		&--active {
			color: #1FA4FC;
		}
	}
}
</style>
