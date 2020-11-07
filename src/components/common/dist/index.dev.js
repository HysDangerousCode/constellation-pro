"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Card = _interopRequireDefault(require("@/components/common/Card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MyPlugin = {};

MyPlugin.install = function (Vue) {
  Vue.component(_Card["default"].name, _Card["default"]);
};

var _default = MyPlugin;
exports["default"] = _default;