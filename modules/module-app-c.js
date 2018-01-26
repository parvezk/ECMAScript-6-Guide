"use strict";

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _modulesMath = require("math-c");

var math = _interopRequireWildcard(_modulesMath);

console.log("2π = " + math.sum(math.pi, math.pi));
