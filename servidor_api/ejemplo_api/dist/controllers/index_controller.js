'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var controller = {
    index: function index(req, res, next) {
        res.render('index', { title: 'Express' });
    }
};

exports.default = controller;