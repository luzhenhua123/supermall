export function  debounce(func,delay){      //上拉图片防抖节流处理
    let timer = null
    return function (...args){
        if(timer) clearTimeout(timer)
        timer = setTimeout(() =>{
            func.apply(this,args)
        },delay)
    }
}
