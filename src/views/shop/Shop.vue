<template>
	<div class="wrapper">
		<div class="search">
			<i class="search__back iconfont" @click="handleBack">&#xe62b;</i>
			<div class="search__input">
				<i class="search__icon iconfont">&#xe62d;</i>
				<input type="text" placeholder="请输入商品名称搜索" />
			</div>
		</div>
		<ShopInfo :store="item" v-show="item.imgUrl"/>
		<Content />
		<Cart :store="item"/>
	</div>
</template>

<script>
import ShopInfo from "@/components/ShopInfo";
import {useRouter,useRoute} from 'vue-router';
import {reactive, toRefs} from 'vue';
import {get} from "@/utils/request";
import Content from "@/views/shop/Content";
import Cart from "@/views/shop/Cart";

export const useShopEffect = ()=>{
	const router = useRouter();
	const route = useRoute();
	const store = reactive({
		item: {}
	});
	(async ()=> store.item = await get(`/api/shop/${route.params.id}`).then(res=>res.data))();
	const handleBack = ()=> router.back();
	return{
		...toRefs(store),
		handleBack
	}
}

export default {
	name: "Shop",
	components: {Cart, Content, ShopInfo},
	setup(){
		return{
			...useShopEffect()
		}
	},
}
</script>

<style scoped lang="scss">
@import "../../assets/style/variables";
	.wrapper{
		padding: 0 .18rem;
		.search{
			height: .32rem;
			margin: .2rem 0 .16rem 0;
			display: flex;
			&__back{
				font-size: .22rem;
				line-height: .32rem;
				height: .32rem;
				margin-right: .16rem;
			}
			&__input{
				width: 3.1rem;
				height: .32rem;
				background: #f5f5f5;
				border-radius: .16rem;
				padding-left: .16rem;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				i{
					font-size: .16rem;
					margin-right: .12rem;
				}
				input{
					width: 75%;
					height: .14rem;
					border: none;
					background: #f5f5f5;
					outline: none;
					font-size: .14rem;
					color: $text-color;
				}
			}
		}
	}
</style>
