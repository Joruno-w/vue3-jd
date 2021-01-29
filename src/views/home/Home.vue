<template>
	<div class="wrapper">
		<StaticNav/>
		<Nearby/>
	</div>
	<Docker/>
</template>

<script>
import StaticNav from "@/views/home/StaticNav";
import Nearby from "@/views/home/Nearby";
import Docker from "@/views/home/Docker";
export default {
	name: "Home",
	components: {Docker, Nearby, StaticNav}
}
</script>

<style scoped lang="scss">
	.wrapper{
		overflow-y: auto;
		width: 90vw;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		bottom: .5rem;
	}
</style>
