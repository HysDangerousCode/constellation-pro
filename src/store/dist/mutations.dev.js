"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  setConsName: function setConsName(state, consName) {
    state.consName = consName;
  },
  setField: function setField(state, field) {
    state.field = field;
  },
  setErrorCode: function setErrorCode(state, errorCode) {
    state.errorCode = errorCode;
  },
  setData: function setData(state, data) {
    state[state.field] = data;
  }
};
exports["default"] = _default;