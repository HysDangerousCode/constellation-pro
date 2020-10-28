"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.axiosGet = axiosGet;

var _axios = _interopRequireDefault(require("axios"));

var _key = require("@/configs/key");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function axiosGet(options) {
  (0, _axios["default"])(options.url + "&key=" + _key.JUHE_APPKEY).then(function (res) {
    options.success(res);
  })["catch"](function (err) {
    options.error(err);
  });
}