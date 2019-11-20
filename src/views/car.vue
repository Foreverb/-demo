<template>
	<div class="cart-wrap">
		<div class="goods" v-for="(item,index) in cartArr" :key="index">
			{{item.tittle}}
			<div class="cart-right">
				<i class="cubeic-remove" @click="reduceGood(index)"></i>
				<span>{{item.current}}</span>
				<i class="cubeic-add" @click="addGood(index)"></i>
			</div>
		</div>
		<cube-button class="btn">下单</cube-button>
		<cube-button class="btn" @click="clearCart">清空购物车</cube-button>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data(){
			return{
			}
		},
		computed: {
			...mapState({
				cartArr: state => state.cartArray
			})
		},
		methods: {
			//减少商品
			reduceGood(index){
				this.$store.commit('reduceGoodNum',index)
			},
			//增加商品
			addGood(index){
				this.$store.commit('addGoodNum',index)
			},
			//清空购物车
			clearCart(){
				this.$store.commit('clearCart')
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.goods
		padding 10px
		text-align left
		font-size 24px
	.cart-right
		float right
		font-size 30px
		i
			font-size 24px
	.btn
		margin 10px 0px			
</style>