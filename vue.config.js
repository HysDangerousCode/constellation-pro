module.exports = {
    lintOnSave: false,
    devServer: {
        open: false,
        // host: 'localhost',
        // ports: 8080,
        https: true,
        hotOnly: false,
        proxy: {
            "/api": {
                target: "https://web.juhe.cn:8080/",
                changeOrigin: true,
                ws: true,
                secure: false,
                pathRewrite: {
                    '^/api':'https://web.juhe.cn:8080/'
                }
            }
        },
        overlay: {
            warnings: false,
            errors: false
        },
        before: app => {}
    },
    // 第三方插件配置
    pluginOptions: {}
}