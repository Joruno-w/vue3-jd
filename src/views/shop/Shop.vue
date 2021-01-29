<template>
	<div class="wrapper">
		<ShopInfo :stores="stores"/>
	</div>
</template>

<script>
import ShopInfo from "@/components/ShopInfo";
export default {
	name: "Shop",
	components: {ShopInfo},
	setup(){
		const stores = [
			{
				expressLimit: 0,
				expressPrice: 5,
				imgUrl: "http://www.dell-lee.com/imgs/vue3/near.png",
				name: "沃尔玛",
				sales: 10000,
				slogan: "VIP尊享满89元减4元运费券",
				_id: "1",
			}
		];
		return{
			stores
		}
	}
}
</script>

<style scoped>
	.wrapper{
		padding: 0 .18rem;
	}
</style>
