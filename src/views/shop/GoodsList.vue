<template>
	<div class="goods-list">
		<Goods v-for="item in goodsList" :key="item._id" :goods="item" :shop-name="name"/>
	</div>
</template>

<script>
import Goods from "@/views/shop/Goods";
import {ref} from 'vue';
import {useRoute} from 'vue-router';
import {get} from "@/utils/request";
import {useShopEffect} from '../shop/Shop';

export const useGoodsListEffect = ()=>{
	const route = useRoute();
	const goodsList = ref([]);
	const fetchGoodsList = async (tab)=>{
		goodsList.value = await get(`/api/shop/${route.params.id}/products`,{tab}).then(res=>res.data);
	}
	fetchGoodsList('all');
	return{
		goodsList,
		fetchGoodsList,
	}
}
export default {
	name: "GoodsList",
	components: {Goods},
	setup(){
		const {goodsList} = useGoodsListEffect();
		const {item:{name}} = useShopEffect();
		return{
			name,
			goodsList,
		}
	},
}
</script>

<style scoped lang="scss">
	.goods-list{
		flex: 1;
		margin: 0 .2rem;
		overflow-y: auto;
	}
</style>