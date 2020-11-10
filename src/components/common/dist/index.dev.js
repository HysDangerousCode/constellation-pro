"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Card = _interopRequireDefault(require("@/components/common/Card"));

var _ConsItem = _interopRequireDefault(require("@/components/common/ConsItem"));

var _Summary = _interopRequireDefault(require("@/components/common/Summary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MyPlugin = {};

MyPlugin.install = function (Vue) {
  Vue.component(_Card["default"].name, _Card["default"]);
  Vue.component(_ConsItem["default"].name, _ConsItem["default"]);
  Vue.component(_Summary["default"].name, _Summary["default"]);
};

var _default = MyPlugin;
exports["default"] = _default;