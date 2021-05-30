module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'view':'@/view',
            }
        }
    },

}

//vue3内部已配置了  'src' = '@' 别名