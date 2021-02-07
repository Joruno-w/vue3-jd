<template>
	<div class="order__modal" v-show="show" @click="handleSubmit(false)">
		<div class="modal" @click.stop>
			<div class="modal__title">确认要离开收银台？</div>
			<div class="modal__desc">请尽快完成支付，否则将被取消</div>
			<div class="modal__btns">
				<div class="modal__btn modal__btn--first" @click="handleOrder(true)">取消订单</div>
				<div class="modal__btn modal__btn--last" @click="handleOrder(false)">确认支付</div>
			</div>
		</div>
	</div>
	<div class="order__submit">
		<div class="order__submit__price">实付金额 <span>&yen;{{ price }}</span></div>
		<div class="order__submit__btn" @click="handleSubmit(true)">提交订单</div>
	</div>
</template>

<script>
import {useCartEffect} from "@/views/shop/Cart";
import {useRouter,useRoute} from 'vue-router';
import {useStore} from 'vuex';
import {ref} from 'vue';
import {post} from "@/utils/request";

const useOrderEffect = (price,products)=>{
	const show = ref(false);
	const router = useRouter();
	const route = useRoute();
	const store = useStore();
	const shopId = route.params.id;
	const shopName = route.query.store;
	const handleSubmit = status => {
		show.value = status;
	}
	const handleOrder = async (isCanceled)=>{
		try {
			const result = await post('/api/order',{
				shopId,
				addressId: 1,
				shopName,
				isCanceled,
				products,
			});
			if (result?.errno === 0){
				store.commit('clearCart', {shopId});
				router.push({name: 'home'});
			}
		}catch (e){
			console.log('出错啦!');
		}
	}
	return {
		show,
		price,
		handleSubmit,
		handleOrder,
	}
}

export default {
	name: "Order",
	setup() {
		const {price,goodsList: {value: products}} = useCartEffect();
		return{
			...useOrderEffect(price,products)
		}
	}
}
</script>

<style scoped lang="scss">
@import "../../assets/style/variables";

.order {
	width: 90vw;
	margin: 0 auto;
	&__modal{
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		background: rgba(0,0,0,.5);
		z-index: 1;
		.modal{
			padding: .24rem 0;
			width: 3rem;
			height: 1.2rem;
			background: $white-color;
			border-radius: .06rem;
			position: fixed;
			left: 50%;
			top: 50%;
			transform: translate(-50%,-50%);
			text-align: center;
			&__title{
				font-size: .18rem;
				line-height: .25rem;
				color: $text-color;
			}
			&__desc{
				color: $order-text-color;
				font-size: .14rem;
				line-height: .2rem;
				margin: .08rem 0 .24rem 0;
			}
			&__btns{
				display: flex;
				justify-content: center;
			}
			&__btn{
				width: .8rem;
				height: .32rem;
				border-radius: .16rem;
				font-size: .14rem;
				line-height: .32rem;
				box-sizing: border-box;
				&--first{
					color: $plus-color;
					border: .01rem solid $order-blue-color;
					margin-right: .24rem;
				}
				&--last{
					background: $order-blue-color;
					color: $white-color;
					margin-left: .24rem;
				}
			}
		}
	}
	&__submit {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		height: .5rem;
		background: $white-color;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: .14rem;

		&__price {
			margin-left: .24rem;
			line-height: .22rem;
			color: $text-color;

			span {
				font-weight: 600;
			}
		}

		&__btn {
			width: 1rem;
			height: .5rem;
			text-align: center;
			line-height: .5rem;
			background: #4FB0F9;
			color: $white-color;
			cursor: pointer;
		}
	}
}

</style>