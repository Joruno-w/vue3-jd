<template>
	<div class="wrapper">
		<div class="order">
			<TopArea/>
			<ProductList/>
			<Order/>
		</div>
	</div>
</template>

<script>
import TopArea from "@/views/orderConfirmation/TopArea";
import ProductList from "@/views/orderConfirmation/ProductList";
import Order from "@/views/orderConfirmation/Order";

export default {
	name: "OrderConfirmation",
	components: {Order, ProductList, TopArea},
}
</script>

<style scoped lang="scss">
@import "../../assets/style/variables";
@import "../../assets/style/mixins";
.wrapper {
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background: $order-bg-color;
	z-index: -2;
	overflow-y: scroll;
}

.order {
	width: 90vw;
	margin: 0 auto;
}
</style>