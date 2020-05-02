'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var controller = {
    index: function index(req, res, next) {
        res.json({
            movies: [{ title: 'Forest Gump' }, { title: 'Titanic' }, { title: 'The notebook' }, { title: 'Avengers End Game' }, { title: 'The origin' }]
        });
    }
};

exports.default = controller;