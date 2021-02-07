<template>
	<div class="order__bg"></div>
	<div class="order__header">
		<div class="order__header__back iconfont" @click="handleBackClick">&#xe62b;</div>
		<div class="order__header__title">确认订单</div>
	</div>
	<div class="order__info">
		<div class="order__info__title">收货地址</div>
		<div class="order__info__address">北京理工大学国防科技园2号楼10层</div>
		<div class="order__info__receiver">
			<span>瑶妹（先生）</span>
			<span>18911024266</span>
		</div>
		<div class="order__info__back iconfont">&#xe62b;</div>
	</div>
</template>

<script>
import {useRouter} from "vue-router";

export default {
	name: "TopArea",
	setup() {
		const router = useRouter();
		const handleBackClick = ()=>router.back();
		return {
			handleBackClick,
		}
	}
}
</script>

<style scoped lang="scss">
@import "../../assets/style/variables";
.order {
	width: 90vw;
	margin: 0 auto;
	&__bg {
		position: fixed;
		z-index: -1;
		left: 0;
		top: 0;
		right: 0;
		height: 1.6rem;
		background-image: linear-gradient(0deg, rgba(0, 145, 255, 0.00) 4%, #0091FF 50%);
	}

	&__header {
		margin: .4rem 0 .22rem 0;
		color: $white-color;
		display: flex;
		justify-content: flex-start;
		align-items: center;

		&__title {
			font-size: .16rem;
			margin: 0 auto;
		}

		&__back {
			font-size: .22rem;
		}
	}

	&__info {
		position: relative;
		margin-top: .22rem;
		height: 1.11rem;
		background: $white-color;
		padding: .24rem .16rem .16rem .16rem;
		color: $text-color;
		border-radius: .04rem;
		margin-bottom: .16rem;

		&__title {
			font-size: .2rem;
			line-height: .22rem;
			font-weight: 600;
			margin-bottom: .14rem;
		}

		&__address {
			font-size: .16rem;
			line-height: .2rem;
			margin-bottom: .16rem;
		}

		&__receiver {
			font-size: .14rem;
			line-height: .17rem;
			color: $order-text-color;
			margin-right: .06rem;
		}

		&__back {
			position: absolute;
			top: 50%;
			transform: translateY(-50%) rotate(180deg);
			right: .16rem;
			font-size: .16rem;
			color: $order-text-color;
		}
	}
}

</style>