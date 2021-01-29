<template>
	<div class="shop">
		<div class="shop__item" v-for="store in stores" :key="store._id">
			<img class="shop__avatar" :src="store.imgUrl"/>
			<div class="shop__content">
				<div class="shop__content__title">{{store.name}}</div>
				<div class="shop__content__tags">
					<div class="shop__content__tag">月售: {{store.sales}}</div>
					<div class="shop__content__tag">起送: {{store.expressLimit}}</div>
					<div class="shop__content__tag">基础运费: {{store.expressPrice}}</div>
				</div>
				<div class="shop__content__alert">{{store.slogan}}</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ShopInfo",
	props: ['stores'],
}
</script>

<style scoped lang="scss">
@import '../assets/style/variables';
.shop {
	padding-bottom: .2rem;
	&__title {
		margin: .16rem 0 .14rem 0;
		font-size: .18rem;
		height: .25rem;
		color: $text-color;
		font-weight: 600;
	}

	&__item {
		margin: .12rem 0;
		padding-left: .1rem;
		display: flex;
	}

	&__avatar {
		width: .56rem;
		height: .56rem;
		margin-right: .16rem;
	}

	&__content {
		border-bottom: 1px solid $hr-color;
		&__title {
			color: $text-color;
			font-size: .16rem;
		}

		&__tags {
			display: flex;
			margin: .08rem 0;
		}

		&__tag {
			color: $text-color;
			font-size: .13rem;
			margin-right: .16rem;
			height: .18rem;
		}
		&__alert {
			font-size: .13rem;
			height: .18rem;
			margin-bottom: .12rem;
			color: #E93B3B;
		}
	}
}
</style>
