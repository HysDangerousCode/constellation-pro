"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _request = require("./request");

var _callee = function _callee(store) {
  var consName, field, data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          consName = store.state.consName;
          field = store.state.field;
          _context.next = 4;
          return regeneratorRuntime.awrap((0, _request.getData)(consName, field));

        case 4:
          data = _context.sent;
          // return data;
          console.log(data);

          if (!data.error_code) {
            _context.next = 9;
            break;
          }

          store.commit("setErrorCode", data.error_code);
          return _context.abrupt("return");

        case 9:
          store.commit("setData", data); // console.log(store.state);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports["default"] = _callee;