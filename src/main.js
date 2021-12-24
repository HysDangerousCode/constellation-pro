import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/resets.css';
import '@/assets/css/border.css';
import '@/assets/js/common.js';

import MyPlugin from "@/components/common";

const app = createApp(App);
// 批量引入组件
// const requireComponent = require.context('./components', true, /\.(vue)$/);
// requireComponent.keys().forEach(fileName => {
//     const componentConfig = requireComponent(fileName);
//     const app = createApp({});
//     app.component(componentConfig.default.name, componentConfig.default || componentConfig);
// });
app.use(store).use(MyPlugin).use(router).mount('#app');