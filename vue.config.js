module.exports = {
    lintOnSave: false,
    devServer: {
        open: false,
        // host: 'localhost',
        // ports: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            "/api": {
                target: "http://web.juhe.cn:8080/",
                changeOrigin: true,
                ws: true,
                secure: false,
                pathRewrite: {
                    '^/api': ''
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