let env = "prod";
let baseUrl = "http://web.juhe.cn:8080";
if (location.hostname === "https://hys628021.web.cloudendpoint.cn") {
    env = "prod";
    baseUrl = "http://web.juhe.cn:8080";
} else if (location.hostname === "https://localhost:8080") {
    env = "dev";
    baseUrl = "http://web.juhe.cn:8080";
}

export default {
    baseUrl,
    env
}