<template>
	<div class="order__productList">
		<div class="order__productList__title">{{name}}</div>
		<div class="goods" v-for="goods in goodsList" :key="goods._id">
			<div class="goods__img">
				<img :src="goods.imgUrl" alt="">
			</div>
			<div class="goods__info">
				<h4 class="goods__title">{{ goods.name }}</h4>
				<div class="goods__price">
					<div class="goods__price__current">&yen;{{ goods.price }} &times; {{ goods.count }}</div>
					<div class="goods__price__total">&yen;{{ priceToFixed(goods, 2) }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {useRoute} from "vue-router";
import {useCartEffect} from "@/views/shop/Cart";

export default {
	name: "ProductList",
	setup() {
		const name = useRoute().query.store;
		const priceToFixed = ({price, count}, num) => (price * count).toFixed(num);
		const {goodsList} = useCartEffect();
		return {
			name,
			goodsList,
			priceToFixed,
		}
	}
}
</script>

<style scoped lang="scss">
@import "../../assets/style/variables";
@import "../../assets/style/mixins";
.order{
	width: 90vw;
	margin: 0 auto;
	&__productList {
		width: 100%;
		background: $white-color;
		padding: .16rem;
		box-sizing: border-box;
		margin-bottom: .7rem;
		&__title{
			font-size: .2rem;
			font-weight: 500;
		}
		.goods {
			margin-top: .1rem;
			padding-bottom: .2rem;
			height: .46rem;
			line-height: .46rem;
			display: flex;
			justify-content: center;
			align-items: center;
			color: $text-color;
			&__img {
				width: .46rem;
				height: .46rem;
				margin: 0 .16rem;

				img {
					width: 100%;
					height: 100%;
				}
			}

			&__info {
				display: flex;
				flex: 1;
				width: 2rem;
				height: .68rem;
				flex-direction: column;
				margin-top: .15rem;
				color: $text-color;
			}

			&__title {
				margin: 0;
				padding: 0;
				font-size: .14rem;
				line-height: .2rem;
				@include ellipsis;
			}
			&__price {
				display: flex;
				margin-top: .18rem;
				width: 100%;
				height: .1rem;
				justify-content: space-between;
				align-items: center;
				&__current {
					color: $price-color;
					font-size: .14rem;
					line-height: .2rem;
					margin-right: .12rem;
				}
				&__total {
					color: #000;
					font-size: .14rem;
					line-height: .2rem;
				}
			}
		}
	}
}

</style>