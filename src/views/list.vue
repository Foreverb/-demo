<template>
	<div class="wrap">
		<cube-scroll class="leftpanel">
			<ul class="panelul">
				<li class="panelli" v-for="(list,index) in leftList" :key="index" :class="list.active ? 'active' : ''" @click="changePanel(index)">
					{{list.label}}
				</li>
			</ul>
		</cube-scroll>
		<cube-scroll class="rightpanel">
			<ul class="tagUl">
				<li v-for="(tag,index) in tags" :key="index" class="tagLi">
					<img :src="tag.image">
					<p>{{tag.txt}}<i class="cubeic-add" @click="addToCart($event,tag)"></i></p>
				</li>
			</ul>
		</cube-scroll>
		<div class="ball-wrap">
			<transition
				@before-enter="beforeEnter"
				@enter="enter"
				@afterEnter="afterEnter"
			>
				<div class="ball" v-if="ball.show">
					<div class="inner">
						<i class="cubeic-add"></i>
					</div>
				</div>	
			</transition>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				ball: {
					show: false,
					el: ''
				},
				tags: [],
				leftList: [
					{
						label: '热门推荐',
						active: true
					},
					{
						label: '手机数码',
						active: false
					},
					{
						label: '家用电器',
						active: false
					},
					{
						label: '电脑办公',
						active: false
					},
					{
						label: '计生情趣',
						active: false
					},
					{
						label: '美妆护肤',
						active: false
					},
					{
						label: '个人清洁',
						active: false
					},
					{
						label: '汽车生活',
						active: false
					},
					{
						label: '京东超市',
						active: false
					},
					{
						label: '男装',
						active: false
					},
					{
						label: '女装',
						active: false
					},
					{
						label: '运动户外',
						active: false
					},
					{
						label: '钟表珠宝',
						active: false
					},
					{
						label: '医药保健',
						active: false
					},{
						label: '酒水饮料',
						active: false
					},
					{
						label: '家具家装',
						active: false
					},
					{
						label: '玩具乐器',
						active: false
					},
					{
						label: '宠物生活',
						active: false
					},
				]
			}
		},
		methods: {

			beforeEnter(el){//让小球移动到点击的位置
				// 获取点击位置
				const dom = this.ball.el;
				console.log('点击的元素（列表中的一项）',dom)
				const rect = dom.getBoundingClientRect()//获取点击的dom的位置
				console.log('点击的dom位置数据（列表中的一项）',rect);
				const x = rect.left - window.innerWidth*0.7;
				const y = rect.top-window.innerHeight+50			
				console.log('小球需要移动的x和y轴距离',x,y)
				el.style.display = 'block';
				el.style.transform = `translate3d(0,${y}px,0)`;
				const inner = el.querySelector('.inner');
				inner.style.transform = `translate3d(${x}px,0,0)`;

			},
			enter(el,done){
				//触发重绘
				document.body.offsetHeight

				//小球移回原点，就是购物车的位置
				el.style.transform = `translate3d(0,0,0)`;
				const inner = el.querySelector('.inner');
				inner.style.transform = `translate3d(0,0,0)`;
				//过渡完成后执行的事件
				el.addEventListener('transitionend',done)
			},
			afterEnter(el){
				this.ball.show = false;
				el.style.display = 'none';
			},


			addToCart(e,tag){
				this.$store.commit('addCart',tag);
				//让小球显示
				this.ball.show = true;
				//获取点击的元素
				this.ball.el = e.target;
			},
			changePanel(i){
				this.leftList.forEach((item,index)=>{
					if( i == index ){
						item.active = true;
					}else{
						item.active = false
					}
				})
				this.getTagsData(i)
			},
			async getTagsData(item){
				const result = await this.$http.get('/api/pannelData',{params: {type:item}})
				this.tags = result.data
			},
		},
		created(){
			this.getTagsData(0)
		},
		mounted(){
			const leftpanel = document.querySelector('.leftpanel');
			const rightpanel = document.querySelector('.rightpanel');
			const scrollHeight = document.documentElement.clientHeight;
			leftpanel.style.height = scrollHeight - 70 + 'px';
			rightpanel.style.height = scrollHeight - 70 + 'px';
		}
	}
</script>

<style lang="stylus">

	.ball-wrap
		.ball
			position fixed
			left 67%
			bottom 40px
			z-index 1003
			font-size 24px
			color red
			transition all 1s cubic-bezier(0.49,-0.29,0.75,0.41)
			.inner
				width 16px
				height 16px
				transition all 1s linear

	.wrap
		display flex
		flex-wrap wrap
		.leftpanel
			justify-content center
			width 30%
			background-color #f8f8f8
			font-size 16px
			.panelul
				margin 0px
				padding 0px
				list-style none
				.panelli
					padding 20px 20px
					border-bottom: 1px solid #fff
				.active 
					background-color #fff	
					color #e93b3d
		.rightpanel
			width 70%
			justify-content center
			.tagUl
				margin 0px
				padding 0px
				list-style none
				display flex
				flex-wrap wrap
				.tagLi
					justify-content center
					width 50%

					img
						height 70px
					p
						font-size 16px
					.cubeic-add
						font-size 20px		
</style>