"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _Today = _interopRequireDefault(require("@/views/Today"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  path: "/",
  name: "today",
  component: _Today["default"]
}, {
  path: "/tomorrow",
  name: "TomorrowPage",
  component: function component() {
    '../views/Tomorrow';
  }
}, {
  path: "/week",
  name: "WeekPage",
  component: function component() {
    '../views/Week';
  }
}, {
  path: "/month",
  name: "MonthPage",
  component: function component() {
    '../views/Month';
  }
}, {
  path: "/year",
  name: "YearPage",
  component: function component() {
    '../views/Year';
  }
}];
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)(process.env.BASE_URL),
  routes: routes
});
var _default = router;
exports["default"] = _default;