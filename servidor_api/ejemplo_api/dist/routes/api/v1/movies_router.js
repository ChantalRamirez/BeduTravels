'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _movies_controller = require('../../../controllers/api/v1/movies_controller');

var _movies_controller2 = _interopRequireDefault(_movies_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/* GET home page. */
router.get('/', _movies_controller2.default.index);

exports.default = router;