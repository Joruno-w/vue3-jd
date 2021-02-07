<template>
	<div class="goods-nav">
		<ul>
			<li
				v-for="(item,index) in list"
				:key="index"
				class="nav__item"
				:class="{'nav__item--active': currentTab === item.tab}"
				@click="handleClick(item.tab)"
			>
				{{item.name}}
			</li>
		</ul>
	</div>
</template>

<script>
import {useGoodsListEffect} from '../shop/GoodsList';
import {reactive, toRefs} from 'vue';

const useGoodsNavEffect = ()=>{
	const navs = reactive({
		currentTab: '',
		list: [
			{
				name: '全部商品',
				tab: 'all'
			},
			{
				name: '秒杀',
				tab: 'seckill'
			},
			{
				name: '新鲜水果',
				tab: 'fruit'
			},
		]
	});
	const {fetchGoodsList} = useGoodsListEffect();
	let {currentTab,list} = toRefs(navs);
	const handleClick = tab=>{
		currentTab.value = tab;
		fetchGoodsList(tab);
	}
	return{
		currentTab,
		list,
		handleClick,
	}
}
export default {
	name: "ShopNav",
	setup(){
		return{
			...useGoodsNavEffect(),
		}
	}
}
</script>

<style scoped lang="scss">
@import "../../assets/style/variables";
	.goods-nav{
		width: .76rem;
		height: 100%;
		background: #f5f5f5;
		overflow-y: auto;
		ul{
			height: 100%;
			overflow: auto;
			list-style:none;
			margin: 0;
			padding: 0;
		}
		.nav__item{
			width: .76rem;
			height: .4rem;
			text-align: center;
			font-size: .14rem;
			border-radius: .02rem;
			line-height: .4rem;
			color: $text-color;
		}
		.nav__item--active{
			background: #fff;
		}
	}
</style>