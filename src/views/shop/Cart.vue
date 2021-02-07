<template>
	<div class="cart">
		<div class="modal" v-if="showCart && total > 0" @click="changeShowCart"/>
		<div class="goods-list" v-if="showCart && total > 0">
			<div class="goods__header">
				<div class="goods__header__all" @click="selectAll(shopId,checked)"><span class="iconfont" v-html="checked ? '&#xe70f;' : '&#xe667;'"></span>全选</div>
				<div class="goods__header__clear" @click="clearCart(shopId)"><span class="iconfont">&#xeca6;</span>清空购物车</div>
			</div>
			<div class="goods" v-for="goods in goodsList" :key="goods._id">
				<div class="goods__checked iconfont" @click="changeItemCheckedToCart(shopId,goods._id)" v-html="goods.checked ? '&#xe70f;' : '&#xe667;'"/>
				<div class="goods__img">
					<img :src="goods.imgUrl" alt="">
				</div>
				<div class="goods__info">
					<h4 class="goods__title">{{goods.name}}</h4>
					<div class="goods__countAndPrice">
						<div class="goods__price">
							<div class="goods__price__current">&yen;{{goods.price}}</div>
							<div class="goods__price__before">&yen;{{goods.oldPrice}}</div>
						</div>
						<div class="goods__count">
							<div class="goods__count__decrease" @click="changeItem(shopId,store.name,goods._id,goods,-1)">-</div>
							<div class="goods__count__total">{{getItemCount(shopId,goods._id)}}</div>
							<div class="goods__count__increase" @click="changeItem(shopId,store.name,goods._id,goods,1)">+</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="check">
			<div class="check__icon">
				<img src="http://www.dell-lee.com/imgs/vue3/basket.png" alt="" class="check__icon__img" @click="changeShowCart">
				<div class="check__icon__tag">{{ total }}</div>
			</div>
			<div class="check__info">
				总计: <span class="check__info__price">&yen; {{ price }}</span>
			</div>
			<router-link :to="`/orderConfirmation/${shopId}?store=${store.name}`" class="check__btn" v-show="total > 0">去结算</router-link>
		</div>
	</div>
</template>

<script>
import {computed, ref} from 'vue';
import {useRoute} from 'vue-router';
import {useStore} from 'vuex';
import {useGoodsEffect} from '../shop/Goods';

export const useCartEffect = () => {
	const route = useRoute();
	const store = useStore();
	const shopId = route.params.id;
	const cartList = store.state.cartList;
	const total = computed(()=>{
		const productList = cartList[shopId]?.productList;
		let total = 0;
		if (productList) {
			for (const prop in productList) {
				const product = productList[prop];
				total += product.count;
			}
		}
		return total;
	});
	const price = computed(()=>{
		const productList = cartList[shopId]?.productList;
		let price = 0;
		if (productList) {
			for (const prop in productList) {
				const product = productList[prop];
				if (product.checked){
					price += product.count * product.price;
				}
			}
		}
		return price.toFixed(2);
	});
	const goodsList = computed(()=>{
		const productList = cartList[shopId]?.productList;
		const goodsList = [];
		if (productList) {
			for (const prop in productList) {
				const product = productList[prop];
				if (product.count !== 0){
					goodsList.push(product);
				}
			}
		}
		return goodsList;
	});
	const changeItemCheckedToCart = (shopId,productId)=>{
		store.commit('changeItemCheckedToCart',{shopId,productId})
	}
	const selectAll = (shopId,checked)=>{
		store.commit('selectAll',{shopId,checked})
	}
	const clearCart = shopId=>{
		store.commit('clearCart',{shopId});
	}
	const changeShopName = (shopId,shopName)=>{
		store.commit('changeShopName',{shopId,shopName})
	}
	const {changeItemToCart} = useGoodsEffect();
	const changeItem = (shopId,shopName,productId,product,num)=>{
		changeShopName(shopId,shopName);
		changeItemToCart(shopId,productId,product,num);
	}
	const checked = computed(()=>goodsList.value.every(it=>it.checked));
	const getItemCount = (shopId,productId)=>{
		return cartList?.[shopId]?.productList?.[productId]?.count || 0;
	}
	return{
		shopId,
		getItemCount,
		total,
		price,
		goodsList,
		changeItemCheckedToCart,
		selectAll,
		clearCart,
		checked,
		changeItem,
		cartList,
	}
}
const useShowCartEffect = goodsList=>{
	const showCart = ref(false);
	const changeShowCart = ()=>{
		if (goodsList.length === 0){
			showCart.value = false;
		}else{
			showCart.value = !showCart.value;
		}
	}
	return{
		showCart,
		changeShowCart
	}
}
export default {
	name: "Cart",
	props: ['store'],
	setup(){
		const {goodsList} = useCartEffect();
		return{
			...useCartEffect(),
			...useShowCartEffect(goodsList)
		}
	}
}
</script>

<style scoped lang="scss">
@import "../../assets/style/variables";
@import "../../assets/style/mixins";
.modal{
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background: rgba(0,0,0,.5);
	z-index: -1;
}
.cart {
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	min-height: .5rem;
	box-shadow: 0 -.01rem -.01rem 0 $hr-color;
	z-index: 2;
	.goods-list{
		width: 100%;
		background: $white-color;
		.goods{
			padding-bottom: .3rem;
			height: .46rem;
			line-height: .46rem;
			display: flex;
			color: $text-color;
			&__header{
				padding: 0 .18rem;
				border-bottom: .01rem solid $hr-color;
				height: .52rem;
				line-height: .52rem;
				display: flex;
				justify-content:space-between;
				align-items: center;
				div{
					font-size: .14rem;
					line-height: .16rem;
					span{
						position: relative;
						top:.02rem;
						font-size: .2rem;
						width: .2rem;
						margin-right: .05rem;
						color: $plus-color;
					}
				}
			}
			&__checked{
				width: .2rem;
				font-size: .2rem;
				color: $plus-color;
				margin-left: .18rem;
				position: relative;
				top: .12rem;
			}
			&__img{
				width: .46rem;
				height: .46rem;
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
				margin-top: .1rem;
			}
			&__title{
				margin: 0;
				padding: 0;
				font-size: .14rem;
				line-height: .2rem;
				@include ellipsis;
			}
			&__countAndPrice{
				display: flex;
				margin-top: .1rem;
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
				position: relative;
				top: -.15rem;
				right: .2rem;
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
					border: .01rem solid $plus-color;
					background: $plus-color;
					text-align: center;
					color: $white-color;
					line-height: .2rem;
					font-size: .2rem;
				}
			}
		}
	}
	.check {
		display: flex;
		height: .5rem;
		line-height: .5rem;
		background: $white-color;
		&__icon {
			position: relative;
			width: .28rem;
			height: .26rem;
			margin: .11rem 0 .12rem .24rem;

			&__img {
				display: block;
				width: 100%;
				height: 100%;
			}

			&__tag {
				position: absolute;
				top: -.07rem;
				right: -.07rem;
				min-width: .13rem;
				height: .13rem;
				font-size: .08rem;
				line-height: .13rem;
				text-align: center;
				background: red;
				color: $white-color;
				border-radius: 50%;
				padding: .01rem;
			}
		}

		&__info {
			margin-left: .32rem;
			font-size: .12rem;
			color: $text-color;

			&__price {
				position: relative;
				top: .01rem;
				font-size: .18rem;
				line-height: .25rem;
				color: #e93b3b;
				font-weight: 500;
			}
		}

		&__btn {
			position: absolute;
			right: 0;
			width: 1rem;
			font-size: .14rem;
			color: $white-color;
			background: #4fb0f9;
			text-align: center;
			height: .5rem;
			line-height: .5rem;
			cursor: pointer;
			text-decoration: none;
		}
	}
}
</style>