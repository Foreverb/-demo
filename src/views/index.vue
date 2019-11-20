<template>

    <div class="index">
        <!-- 轮播图 -->
        <cube-slide ref="slide" :data="items" @change="changePage">
            <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
                <a :href="item.url" class="banner">
                    <img :src="item.image">
                </a>
            </cube-slide-item>
        </cube-slide>
        <!-- 滚动分类 -->
        <cube-slide ref="slide" :auto-play="false" :data="list" @change="changePage">
            <cube-slide-item v-for="(item, index) in list" :key="index">
                <ul class="listul">
                    <li v-for="(li,i) in item" :key="i" class="listli">
                        <a :href="li.url">
                            <img :src="li.image">
                            <p>{{li.text}}</p>
                        </a>
                    </li>
                </ul>
            </cube-slide-item>
        </cube-slide>
    </div>
    
</template>
<script>
export default {
    data(){
        return {
            items: [],
            list: []
        }
    },
    methods: {
        changePage(current) {
            // console.log('当前轮播图序号为:' + current)
        },
        clickHandler(item, index) {
            console.log(item, index)
        }
    },
    async created(){
        try{
            //获取轮播数据
            const req = await this.$http.get('/api/banner');
            this.items = req.data;
            //获取滚动分类数据
            const list = await this.$http.get('/api/scrollData');
            this.list = list.data;
        }catch(err){
            console.log(err)
        }
    }
}
</script>
<style lang="stylus">
    .banner
        width 100%
        img 
            width 100%
            height 175px
    .listul
        list-style none
        display flex
        flex-wrap wrap
    .listli  

        width 20%
        justify-content center

        img
            width 35px
            height 35px
            border-radius 50%
            padding 5px 0
        p
            margin 0px
            padding-bottom 10px
            font-size 14px          

</style>