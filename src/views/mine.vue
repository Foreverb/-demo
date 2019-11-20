<template>
	<div>
		<img class="headImg" src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/62719/38/13405/76408/5dae7837E023d08f9/e0a08c6663f757e5.jpg!cr_1125x445_0_171!q70.jpg.dpg"/>
		<ul>
			<li v-for="(item,i) in mineArry" :key="i" class="mineLi" @click="exitToLogin(item)">
				<span class="mineTxt">{{item.label}}</span>
				<i class="cubeic-arrow"></i>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				mineArry: [
					{label: '我的收藏'},
					{label: '我的足迹'},
					{label: '店铺收藏'},
					{label: '我的订单'},
					{label: '退款/退货'},
					{label: '退出',type:'exit'},
				]
			}
		},
		methods: {
			exitToLogin(item){
				if( item.type == 'exit' ){
					this.$store.commit('setToken');
					localStorage.removeItem('token');
					this.$router.push({path: '/login'})
				}
			}
		}
	}
</script>
<style lang="stylus" scoped>
.headImg
    height 150px;
    width 100%;
.mineLi
	border-bottom 1px solid #eee
	height 60px
	line-height 60px
	text-align left
	font-size 18px
	padding-left 5%
	.mineTxt
		width 90%
		display inline-block
</style>