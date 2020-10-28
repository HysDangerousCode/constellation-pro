"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getData = getData;

var _http = require("@/libs/http");

function getData(consName, type) {
  return new Promise(function (resolve, reject) {
    (0, _http.axiosGet)({
      url: "/api/constellation/getAll?consName=".concat(consName, "&type=").concat(type),
      success: function success(data) {
        resolve(data);
      },
      error: function error(err) {
        reject(err);
      }
    });
  });
}