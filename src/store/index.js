import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        token: "",
        cartArray: JSON.parse(localStorage.getItem('cartArray')) || []
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        addCart(state,tag){
            let result = state.cartArray.find(v=>v.tittle == tag.txt)
            if( result ){
                result.current += 1
            }else{
                state.cartArray.push({tittle: tag.txt,current: 1})
            }
        },
        //增加商品数量
        addGoodNum(state,index){
            state.cartArray[index].current+=1
        },
        //减少商品数量
        reduceGoodNum(state,index){
            if( state.cartArray[index].current > 1 ){
                state.cartArray[index].current-=1
            }else{
                if( window.confirm('是否将该商品从购物车中移除？') ){
                    state.cartArray.splice(index,1)
                }
            }
        },
        //清空购物车
        clearCart(state){
            if( window.confirm('确认清空购物车？') )
                state.cartArray = [];
            localStorage.removeItem('cartArray')
        }
    },
    actions: {},
    modules: {},
    getters: {
        cartAll: state => {
            let num = 0;
            state.cartArray.forEach(item=>{
                num += item.current
            })
            return num
        }
    }
});
store.subscribe((mutations,state)=>{
    localStorage.setItem('cartArray',JSON.stringify(state.cartArray))
})
export default store;