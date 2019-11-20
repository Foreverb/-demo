<template>
	<div class="search-wrap">
		<cube-input v-model="value" placeholder="请输入需要搜索的商品" class="search-ipt" :clearable="clearable"></cube-input>
		<cube-button icon="cubeic-search" :primary="true" class="search-btn">搜索</cube-button>
		<div class="search-list">
			<p>热门搜索</p>
			<ul>
				<li v-for='(item,index) in list' :key="index">
					<span>{{item}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				value: "",
				clearable: {
			        visible: true,
			        blurHidden: true
			    },
			    list: [
			    	'男鞋','女鞋','衬衫','短袖','长袖','秋冬毛衣',
			    	'汽车','美妆','儿童玩具'
			    ]
			}
		}
	}
</script>
<style lang="stylus">
	
.search-wrap
	.search-ipt
		padding 0px
		background-color #f8f8f8
		width 70%
		float left
	.search-btn
		width 30%
		height 40px
		line-height 40px
		padding 0px
		float left	
	.search-list	
		margin-top 80px
		p
			font-size: 18px
			text-align left
		ul
			display flex
			flex-wrap wrap
			margin-top 10px
			li
				background orange
				padding 5px
				height 30px
				line-height 30px
				text-align center
				flex 25%
				margin 5px
				font-size 14px	
</style>