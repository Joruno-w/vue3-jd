<template>
	<div class="near">
		<div class="near__title">附近店铺</div>
		<router-link :to="`/shop/${store._id}`" v-for="store in stores" :key="store._id" class="shop">
			<ShopInfo :store="store" :bordered="true"/>
		</router-link>
	</div>
</template>

<script>
import {ref} from 'vue';
import {get} from "@/utils/request";
import ShopInfo from "@/components/ShopInfo";
const useNearbyEffect = ()=>{
	const stores = ref([]);
	(async ()=> stores.value = await get('/api/shop/hot-list').then(res=>res.data))();
	return{
		stores
	}
}
export default {
	name: "Nearby",
	components: {ShopInfo},
	setup(){
		return{
			...useNearbyEffect()
		}
	}
}
</script>

<style scoped lang="scss">
@import '../../assets/style/variables';
.near {
	padding-bottom: .2rem;
	&__title {
		margin: .16rem 0 .14rem 0;
		font-size: .18rem;
		height: .25rem;
		color: $text-color;
		font-weight: 600;
	}
	.shop{
		text-decoration: none;
	}
}
</style>
