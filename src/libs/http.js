import axios from "axios";
import { JUHE_APPKEY } from "@/configs/key";

function axiosGet(options) {
    axios(options.url + "&key=" + JUHE_APPKEY)
        .then((res) => {
            options.success(res);
        }).catch((err) => {
            options.error(err);
        })
}

export {
    axiosGet
}