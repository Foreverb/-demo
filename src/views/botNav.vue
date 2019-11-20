<template>
	<div>
		<transition :name="transitionName">
			<router-view class="router"/>
		</transition>
		<cube-tab-bar
		    v-model="selectedLabelDefault"
		    :data="tabs"
		    @click="clickHandler"
		    @change="changeHandler"
		    class="botNav">
		</cube-tab-bar>
		<span class="countNum">{{cartAll}}</span>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		data(){
			return{
				transitionName: "fade-right",
				selectedLabelDefault: '首页',
			      tabs: [{
			        label: '首页',
			        icon: 'cubeic-home'
			      }, {
			        label: '分类',
			        icon: 'cubeic-tag'
			      }, {
			        label: '搜索',
			        icon: 'cubeic-search'
			      }, {
			        label: '购物车',
			        icon: 'cubeic-mall'
			      }, {
			        label: '我的',
			        icon: 'cubeic-person'
			      }]
			}
		},
		created(){
			switch (this.$route.path){
				case '/botnav/index':
					this.selectedLabelDefault = '首页'
					break;
				case '/botnav/list':
					this.selectedLabelDefault = '分类'
					break;
				case '/botnav/search':
					this.selectedLabelDefault = '搜索'
					break;
				case '/botnav/car':
					this.selectedLabelDefault = '购物车'
					break;
				case '/botnav/mine':
					this.selectedLabelDefault = '我的'
					break;						
			}
		},
		computed: {
			...mapGetters({
				cartAll: 'cartAll'
			})
		},
		methods: {
			clickHandler (label) {
		    },
		    changeHandler (label) {
		      switch (label){
		      	case '首页':
		      		this.$router.push({path: '/botnav/index'})
		      		break
		      	case '搜索':
		      		this.$router.push({path: '/botnav/search'})
		      		break
		      	case '购物车':
		      		this.$router.push({path: '/botnav/car'})
		      		break
		      	case '分类':
		      		this.$router.push({path: '/botnav/list'})
		      		break
		      	case '我的':
		      		this.$router.push({path: '/botnav/mine'})
		      		break						
		      }
		    }
		}
	}
</script>
<style lang="stylus">
	.cube-tab-bar.botNav
		position fixed
		bottom 0
		left 0
		background-color #fff
		z-index 1000
		width 100%
		i
			font-size 20px
		.cube-tab div
			font-size 16px
			padding-top 3px	
	.router
		position absolute
		width 100%
		transition all 0.8s ease		
	.fade-left-enter,.fade-right-leave-active
		opacity 0
		-webkit-transform translate(100%,0)	
		transform translate(100%,0)	
	.fade-right-enter,.fade-left-leave-active
		opacity 0
		-webkit-transform translate(-100%,0)	
		transform translate(-100%,0)
	.countNum
		position fixed
		bottom 40px
		right 23%
		background red
		color #fff
		width 18px
		height 18px
		display inline-block
		border-radius 50%	
		z-index 1001
		font-size 14px
		line-height 18px
		text-align center	
</style>