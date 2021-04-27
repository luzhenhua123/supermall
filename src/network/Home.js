import  {request} from "./request";

export  function getHomeMultidata(){        //获取四大活动数据
    return request({
        url:'/home/multidata'
    })
}


export function  getHomeGoods(type,page){       //获取首页数据
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}

//小拓展           //动态获取数组
// let totalNums = []
// const  nums1 = [20,11,222]
// const  nums2 = [111,22,333]

//一，for循环方法
// for(let n of nums1){     //for循环遍历动态获取数组 totaNums=[20,11,222]
//  totalNums.push(n)
// }

//二，新方法 语法糖
// totalNums.push(...nums1)


