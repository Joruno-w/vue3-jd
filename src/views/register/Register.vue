<template>
	<div class="login">
		<div class="login__avatar">
			<img src="http://www.dell-lee.com/imgs/vue3/user.png" alt="" class="login__avatar__img">
		</div>
		<div class="login__input">
			<div>
				<input type="text" placeholder="请输入用户名" class="login__input__num" v-model="username">
			</div>
			<div>
				<input type="password" placeholder="请输入密码" class="login__input__pwd" v-model="password" autocomplete="new-password">
			</div>
			<div>
				<input type="password" placeholder="请输入密码" class="login__input__pwd" v-model="ensurement" autocomplete="new-password">
			</div>
		</div>
		<button class="login__btn" @click="handleRegisterClick">注册</button>
		<div class="login__link">
			<router-link :to="{name: 'login'}">已有账号去登陆</router-link>
		</div>
		<Toast :message="msg" v-show="show"/>
	</div>
</template>

<script>
import {useRouter} from 'vue-router';
import {post} from "@/utils/request";
import Toast,{useToast} from "@/components/Toast";
import {reactive, toRefs} from 'vue';

const useRegisterEffect = showToast=> {
	const router = useRouter();
	const registerData = reactive({
		username: '',
		password: '',
		ensurement: ''
	});
	const handleRegisterClick = async () => {
		try {
			const result = await post('/api/user/register',registerData);
			if (result?.errno === 0) {
				router.push({name: 'login'});
			} else {
				showToast('注册失败!',2000);
			}
		} catch (e) {
			showToast('请求失败!',2000);
		}
	}
	return {
		...toRefs(registerData),
		handleRegisterClick
	}
}
export default {
	name: "Register",
	components: {Toast},
	setup(){
		const {showToast,...rest} = useToast();
		return{
			...rest,
			...useRegisterEffect(showToast)
		}
	}
}
</script>

<style scoped lang="scss">
@import "../../assets/style/variables";

.login {
	position: fixed;
	left: 50%;
	top: 50%;
	font-size: 10px;
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
		height: 1.68rem;
		margin-bottom: .32rem;

		input {
			width: 2.95rem;
			height: .48rem;
			box-sizing: border-box;
			padding: .12rem 0 .12rem .16rem;
			font-size: .16rem;
			border-radius: .06rem;
			background: $input-bg;
			border: 1px solid rgba(0, 0, 0, .1);
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
		box-shadow: 0 4px 8px 0 rgba(0, 145, 255, 0.32);
		border-radius: 4px;
	}

	&__link {
		text-align: center;

		a {
			color: $login-text-color;
			text-decoration: none;
			font-size: .14rem;
		}
	}
}
</style>
