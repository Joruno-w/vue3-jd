<template>
	<div class="position">
		<i class="iconfont">&#xe66a;</i>
		<span>北京理工大学国防科技园2号楼10层</span>
		<i class="iconfont">&#xe6bb;</i>
	</div>
	<div class="search">
		<i class="iconfont">&#xe62d;</i>
		<div class="search__text">山姆会员商店优惠商品</div>
	</div>
	<div class="banner">
		<img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt=""/>
	</div>
	<div class="icons">
		<div class="icons__item">
			<img src="http://www.dell-lee.com/imgs/vue3/超市.png" alt="" class="icons__item__img">
			<p class="icons__item__desc">超市便利</p>
		</div>
		<div class="icons__item">
			<img src="http://www.dell-lee.com/imgs/vue3/菜市场.png" alt="" class="icons__item__img">
			<p class="icons__item__desc">菜市场</p>
		</div>
		<div class="icons__item">
			<img src="http://www.dell-lee.com/imgs/vue3/水果店.png" alt="" class="icons__item__img">
			<p class="icons__item__desc">水果店</p>
		</div>
		<div class="icons__item">
			<img src="http://www.dell-lee.com/imgs/vue3/鲜花.png" alt="" class="icons__item__img">
			<p class="icons__item__desc">鲜花绿植</p>
		</div>
		<div class="icons__item">
			<img src="http://www.dell-lee.com/imgs/vue3/医药健康.png" alt="" class="icons__item__img">
			<p class="icons__item__desc">医药健康</p>
		</div>
		<div class="icons__item">
			<img src="http://www.dell-lee.com/imgs/vue3/家居.png" alt="" class="icons__item__img">
			<p class="icons__item__desc">家居时尚</p>
		</div>
		<div class="icons__item">
			<img src="http://www.dell-lee.com/imgs/vue3/蛋糕.png" alt="" class="icons__item__img">
			<p class="icons__item__desc">烘培蛋糕</p>
		</div>
		<div class="icons__item">
			<img src="http://www.dell-lee.com/imgs/vue3/签到.png" alt="" class="icons__item__img">
			<p class="icons__item__desc">签到</p>
		</div>
		<div class="icons__item">
			<img src="http://www.dell-lee.com/imgs/vue3/大牌免运.png" alt="" class="icons__item__img">
			<p class="icons__item__desc">大牌免运</p>
		</div>
		<div class="icons__item">
			<img src="http://www.dell-lee.com/imgs/vue3/红包.png" alt="" class="icons__item__img">
			<p class="icons__item__desc">红包套餐</p>
		</div>
	</div>
	<div class="gap"></div>
</template>

<script>
export default {
	name: "StaticNav"
}
</script>

<style scoped lang="scss">
@import "../../assets/style/variables";
.position {
	margin-top: .2rem;
	font-size: .2rem;
	& > span {
		margin-right: .2rem;
		vertical-align: top;
	}
}

.search {
	height: .32rem;
	line-height: .32rem;
	background: #f5f5f5;
	border-radius: .16rem;
	font-size: .14rem;
	color: $content-color;
	margin-top: .1rem;
	padding-left: .2rem;

	&__text {
		color: $content-color;
		position: relative;
		top: -.02rem;
		line-height: .16rem;
		margin-left: .1rem;
		display: inline-block;
		font-size: .14rem;
	}
}

.banner {
	margin-top: .12rem;
	height: 0;
	overflow: hidden;
	padding-bottom: 25.4%;

	&__img {
		width: 100%;
		height: .86rem;
	}
}

.icons {
	display: flex;
	flex-wrap: wrap;
	font-size: .12rem;
	margin: .16rem 0;

	&__item {
		width: 20%;

		&__img {
			width: .4rem;
			height: .4rem;
			display: block;
			margin: 0 auto;
		}

		&__desc {
			margin: .06rem 0 .16rem 0;
			text-align: center;
			color: $text-color;
		}
	}
}

.gap {
	height: .1rem;
	background: $hr-color;
	margin: 0 -.005rem;
}
</style>
