<template>
	<div class="goods">
		<div class="goods__img">
			<img :src="goods.imgUrl" alt="">
		</div>
		<div class="goods__info">
			<h4 class="goods__title">{{goods.name}}</h4>
			<div class="goods__sales">月售{{goods.sales}}件</div>
			<div class="goods__countAndPrice">
				<div class="goods__price">
					<div class="goods__price__current">&yen;{{goods.price}}</div>
					<div class="goods__price__before">&yen;{{goods.oldPrice}}</div>
				</div>
				<div class="goods__count">
					<div class="goods__count__decrease" @click="changeItem(shopId,shopName,goods._id,goods,-1)">-</div>
					<div class="goods__count__total">{{cartList?.[shopId]?.productList?.[goods._id]?.count || 0}}</div>
					<div class="goods__count__increase" @click="changeItem(shopId,shopName,goods._id,goods,1)">+</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {useRoute} from 'vue-router';
import {useStore} from 'vuex';
import {useCartEffect} from '../shop/Cart';
export const useGoodsEffect = ()=>{
	const route = useRoute();
	const store = useStore();
	const cartList = store.state.cartList;
	const shopId = route.params.id;
	const changeItemToCart = (shopId,productId,productInfo,num)=>{
		store.commit('changeItemToCart',{shopId,productId,productInfo,num});
	}
	return{
		shopId,
		cartList,
		changeItemToCart
	}
}
export default {
	name: "Goods",
	props: {
		goods: {
			type: Object,
			default:()=>{}
		},
		shopName: String,
	},
	setup(){
		const {changeItem} = useCartEffect();
		return{
			changeItem,
			...useGoodsEffect()
		}
	}
}
</script>

<style scoped lang="scss">
@import "../../assets/style/variables";
@import "../../assets/style/mixins";
	.goods{
		padding-bottom: .1rem;
		height: .8rem;
		line-height: .8rem;
		border-bottom: .01rem solid $hr-color;
		display: flex;
		align-items: center;
		color: $text-color;
		margin-top: .1rem;
		&__img{
			width: .68rem;
			height: .68rem;
			margin: 0 .16rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
		&__info{
			display: flex;
			flex: 1;
			width: 2rem;
			height: .68rem;
			flex-direction: column;
		}
		&__title{
			margin: 0;
			padding: 0;
			font-size: .14rem;
			line-height: .2rem;
			@include ellipsis;
		}
		&__sales{
			font-size: .12rem;
			line-height: .16rem;
			margin: .06rem 0;
		}
		&__countAndPrice{
			display: flex;
			width: 100%;
			justify-content: space-between;
			align-items: center;
		}
		&__price{
			height: .2rem;
			width: 30%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			&__current{
				color: $price-color;
				font-size: .14rem;
				line-height: .14rem;
				margin-right: .12rem;
			}
			&__before{
				color: #999;
				text-decoration: line-through;
				font-size: .1rem;
				line-height: .2rem;
			}
		}
		&__count{
			display: flex;
			font-size: .14rem;
			line-height: .16rem;
			align-items: center;
			color: $text-color;
			&__decrease{
				width: .2rem;
				height: .2rem;
				border-radius: 50%;
				border:.01rem solid #666;
				text-align: center;
				line-height: .2rem;
				font-size: .2rem;
			}
			&__total{
				margin: 0 .1rem;
			}
			&__increase{
				width: .2rem;
				height: .2rem;
				border-radius: 50%;
				border:.01rem solid $plus-color;
				background: $plus-color;
				text-align: center;
				color: #fff;
				line-height: .2rem;
				font-size: .2rem;
			}
		}
	}
</style>