<template>
	<div class="content">
		<GoodsNav/>
		<GoodsList/>
	</div>
</template>

<script>
import GoodsNav from "@/views/shop/GoodsNav";
import GoodsList from "@/views/shop/GoodsList";
export default {
	name: "Content",
	components: {
		GoodsList,
		GoodsNav,
	}
}
</script>

<style scoped lang="scss">
	.content{
		display: flex;
		position: absolute;
		top: 1.6rem;
		left: 0;
		bottom: .5rem;
		right: 0;
		overflow: hidden;
	}
</style>