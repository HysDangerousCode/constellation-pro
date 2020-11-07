"use strict";

var _vue = require("vue");

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

require("@/assets/css/resets.css");

require("@/assets/css/border.css");

require("@/assets/js/common.js");

var _common2 = _interopRequireDefault(require("@/components/common"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 批量引入组件
// const requireComponent = require.context('./components', true, /\.(vue)$/);
// requireComponent.keys().forEach(fileName => {
//     const componentConfig = requireComponent(fileName);
//     const app = createApp({});
//     app.component(componentConfig.default.name, componentConfig.default || componentConfig);
// });
(0, _vue.createApp)(_App["default"]).use(_store["default"]).use(_common2["default"]).use(_router["default"]).mount('#app');