<template>
	<div class="toast">{{message}}</div>
</template>

<script>
import {reactive, toRefs} from 'vue';
export default {
	name: "Toast",
	props: ['message']
}
export const useToast = ()=>{
	const toastData = reactive({
		msg: '',
		show: false
	});
	const showToast = (msg,duration)=>{
		toastData.msg = msg;
		toastData.show = true;
		setTimeout(()=>{
			toastData.show = false;
			toastData.msg = '';
		},duration);
	}
	return{
		...toRefs(toastData),
		showToast
	}
}
</script>

<style scoped lang="scss">
	.toast{
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		background: rgba(0,0,0,.35);
		padding: .1rem;
		border-radius: .05rem;
		color: #fff;
		font-size: .14rem;
	}
</style>
