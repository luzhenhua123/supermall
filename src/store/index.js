import { createStore } from 'vuex'
import mutations from './mutations';
import actions from './actions';
import getters from "./getters";
import state from './state'




// Create a new store instance.
const store = createStore({
        state,
        mutations,
        actions,
        getters
    })
    /*mutations: {
        addCart(state,payload){
            //1.payload新添加的商品

            // let oldProduct = null;   （1）第一种写法，下面2要改
            // for(let item of state.cartList){
            //     if(item.iid === payload.iid){
            //         oldProduct = item;
            //     }
            // }

            // let index = state.cartList.indexOf(payload) （2）第二种写法

            // let product = state.cartList.find(function (item){   (3)第三种写法，下面是（3）的简化
            //     return item.iid === payload.iid
            // })
            let product = state.cartList.find(item => item.iid === payload.iid) //查找我们之前是否有该商品

            //2.判断oldProduct
              if( product ) {          //if(index === -1 ){
                // let product = state.cartList[index]
                product.count += 1
            }else{
                payload.count = 1
                state.cartList.push(payload)
            }
        }
        }
})*/


//3.挂载Vue实例上
export default store;

