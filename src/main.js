import { createApp } from 'vue'     //创建vue实例
import App from './App.vue'

import router from "./router"       //路由
import mitt from "mitt"         //事务总线
import store from './store'
import FastClick from 'fastclick'
import VueLazyloadNext from 'vue-lazyload-next'

import toast from './components/common/toast'

// app.config.productionTip = false
// app.probeType.$bus = new Vue()
const loadimage = require('./assets/img/common/placeholder3.gif')

const app = createApp(App);
app.use(router)
app.use(store)
app.use(toast)
app.use(VueLazyloadNext, {
        preLoad: 1.3,
        loading: loadimage,
        attempt: 1
    }
)

app.mount('#app')

app.config.globalProperties.$bus = new mitt()    //挂载事务总线为全局属性

app.config.productionTip = false

FastClick.attach(document.body)  //解决移动端的300ms延迟

    //app 是自定义Vue实例名 , bus 是自定义总线属性名

require('./assets/css/base.css')

