"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  mounted: function mounted(el, binding) {
    var _binding$value = binding.value,
        className = _binding$value.className,
        activeClass = _binding$value.activeClass,
        curIdx = _binding$value.curIdx,
        oNavItems = el.getElementsByClassName(className);
    oNavItems[curIdx].className += " ".concat(activeClass);
  },
  updated: function updated(el, binding) {
    var _binding$value2 = binding.value,
        className = _binding$value2.className,
        activeClass = _binding$value2.activeClass,
        curIdx = _binding$value2.curIdx,
        oOptions = binding.oldValue,
        oNavItems = el.getElementsByClassName(className);
    oNavItems[curIdx].className += " ".concat(activeClass);
    oNavItems[oOptions.curIdx].className = className;
  }
};
exports["default"] = _default;