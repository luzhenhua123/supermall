import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import mitt from "mitt"
// app.config.productionTip = false
//
// app.probeType.$bus = new Vue()

const app = createApp(App);
app.use(router)
app.mount('#app')

app.config.globalProperties.$bus = new mitt()    //挂载事务总线为全局属性

app.config.productionTip = false

    //app 是自定义Vue实例名 , bus 是自定义总线属性名

require('./assets/css/base.css')