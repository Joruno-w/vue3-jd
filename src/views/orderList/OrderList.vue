<template>
	<div class="orderList">
		<div class="orderList__title">我的订单</div>
		<div class="orderList__list">
			<div class="orderList__item" v-for="(item,index) in list" :key="index">
				<h5 class="orderList__item__title">
					<span class="orderList__item__shopName">{{item.shopName}}</span>
					<span class="orderList__item__status">{{item.isCanceled ? '已取消' : '已下单'}}</span>
				</h5>
				<div class="orderList__item__content">
					<div class="orderList__item__imgs">
						<img :src="pro.product.img" alt="" v-for="pro in item.products" :key="pro.name">
					</div>
					<div class="orderList__item__info">
						<div class="orderList__item__price">&yen;{{item.price}}</div>
						<div class="orderList__item__count">共{{item.total}}件</div>
					</div>
				</div>
			</div>
		</div>
		<Docker :current-index="2"/>
	</div>
</template>

<script>
import {ref} from 'vue';
import Docker from "@/views/home/Docker";
import {get} from "@/utils/request";

export default {
	name: "OrderList",
	components: {Docker},
	setup() {
		const list = ref([]);
		(async () => {
			const result = await get('/api/order');
			if (result?.errno === 0 && result?.data?.length > 0) {
				const tempData = result?.data;
				tempData.forEach((shop)=>{
					const productList = shop?.products || [];
					let total = 0,price = 0;
					productList.forEach((productItem)=>{
						total += (productItem?.orderSales || 0);
						price += ((productItem.orderSales * productItem?.product?.price) || 0);
					});
					shop.total = total;
					shop.price = price;
				});
				list.value = tempData;
			}
		})();
		console.log(list);
		return {
			list,
		}
	}
}
</script>

<style scoped lang="scss">
@import "../../assets/style/variables";

.orderList {
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background: $order-bg-color;
	z-index: -1;

	&__title {
		background: $white-color;
		font-size: .16rem;
		height: .64rem;
		color: $text-color;
		line-height: .22rem;
		text-align: center;
		padding: .3rem 0 .1rem 0;
		box-sizing: border-box;
	}

	&__list {
		width: 100vw;
	}

	&__item {
		width: 80vw;
		height: 1rem;
		background: $white-color;
		margin: .16rem auto 0;
		padding: .16rem;

		&__title {
			display: flex;
			justify-content: space-between;
			margin-top: .1rem;
		}

		&__shopName {
			font-size: .2rem;
		}

		&__status {
			font-size: .16rem;
			color: #999;
		}

		&__content {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: .16rem;
		}

		&__imgs {
			display: flex;

			img {
				display: block;
				width: .4rem;
				height: .4rem;
				margin-right: .12rem;
			}
		}

		&__info {

		}

		&__price {
			color: $price-color;
			font-size: .14rem;
			line-height: .2rem;
		}

		&__count {
			margin-top: .04rem;
			font-size: .12rem;
			color: $text-color;
		}
	}
}
</style>