<template>
	<div class="docker">
		<div class="docker__item"  :class="{'docker__item--active': index === currentIndex }" v-for="(item,index) in items" :key="item.icon">
			<router-link :to="item.to" tag="div">
				<i class="iconfont" v-html="item.icon"></i>
				<div>{{item.text}}</div>
			</router-link>
		</div>
	</div>
</template>

<script>
const useDockerEffect = ()=>{
	const items = [
		{icon: '&#xe606;',text: '首页', to: {name: 'home'}},
		{icon: '&#xe603;',text: '购物车', to: {name: 'home'} },
		{icon: '&#xe63e;',text: '订单', to: {name: 'orderList'}},
		{icon: '&#xe78b;',text: '我的', to: {name: 'home'}},
	];
	// const handleClick = index=>{
	// 	curIndex.value = index;
	// }
	return {
		items,
	}
}
export default {
	name: "Docker",
	props: ['currentIndex'],
	setup(){
		return{
			...useDockerEffect()
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
		padding-top: .05rem;
		text-align: center;
		height: .5rem;
		font-size: .1rem;
		a{
			text-decoration: none;
			color: #000;
		}

		.iconfont {
			font-size: .2rem;
		}

		div {
			margin-top: .02rem;
		}

		&--active {
			a{
				color: #1FA4FC;
			}
		}
	}
}
</style>
