<template>
	<div class="login">
		<div class="login__avatar">
			<img src="http://www.dell-lee.com/imgs/vue3/user.png" alt="" class="login__avatar__img">
		</div>
		<div class="login__input">
			<div>
				<input type="text" placeholder="请输入用户名" class="login__input__num" v-model="username" autocomplete="new-password">
			</div>
			<div>
				<input type="password" placeholder="请输入密码"  class="login__input__pwd" v-model="password" autocomplete="new-password">
			</div>
		</div>
		<button class="login__btn" @click="handleLoginClick">登陆</button>
		<div class="login__link">
			<router-link :to="{name: 'register'}">立即注册</router-link>
			<span>｜</span>
			<a href="#">忘记密码</a>
		</div>
		<Toast :message="msg" v-if="show"/>
	</div>
</template>

<script>
import {useRouter} from 'vue-router';
import {reactive,toRefs} from 'vue';
import {post} from "@/utils/request";
import Toast,{useToast} from "@/components/Toast";
const useLoginEffect = showToast=>{
	const router = useRouter();
	const loginData = reactive({ username: '', password: ''});
	const handleLoginClick = async () => {
		try {
			const result = await post('/api/user/login',loginData);
			if (result?.errno === 0) {
				localStorage.isLogin = true;
				router.push({name: 'home'});
			} else {
				showToast('登陆失败!',2000);
			}
		} catch (e) {
			showToast('请求失败!',2000);
		}
	}
	return{
		...toRefs(loginData),
		handleLoginClick
	}
}

export default {
	name: "Login",
	components: {Toast},
	setup() {
		const {showToast,...rest} = useToast();
		return{
			...rest,
			...useLoginEffect(showToast)
		};
	}
}
</script>

<style scoped lang="scss">
@import "../../assets/style/variables";

.login {
	position: fixed;
	left: 50%;
	top: 50%;
	font-size: .1rem;
	transform: translate(-50%, -50%);
	height: 5rem;

	&__avatar {
		border-radius: 50%;
		width: .66rem;
		height: .66rem;
		margin: 0 auto .4rem;

		&__img {
			width: 100%;
			height: 100%;
		}
	}

	&__input {
		width: 2.95rem;
		height: 1.12rem;
		margin-bottom: .32rem;

		input {
			width: 2.95rem;
			height: .48rem;
			box-sizing: border-box;
			padding: .12rem 0 .12rem .16rem;
			font-size: .16rem;
			border-radius: .06rem;
			background: $input-bg;
			border: .01rem solid rgba(0, 0, 0, .1);
		}

		&__pwd {
			margin-top: .16rem;
		}
	}

	&__btn {
		width: 2.95rem;
		height: .48rem;
		background: #0091FF;
		outline: none;
		border: none;
		font-size: .16rem;
		color: #fff;
		margin-bottom: .16rem;
		box-shadow: 0 .04rem .08rem 0 rgba(0, 145, 255, 0.32);
		border-radius: .04rem;
	}

	&__link {
		text-align: center;

		a {
			color: $login-text-color;
			text-decoration: none;
			font-size: .14rem;
		}

		span {
			margin: 0 .12rem;
		}
	}
}
</style>
