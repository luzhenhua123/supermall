module.exports={
    configureWebpack:{
        resolve:{

            alias:{
                'assets':'@/assets',        //vue3内部已配置了  'src' = '@' 别名
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views',



            }
        }
    }
}