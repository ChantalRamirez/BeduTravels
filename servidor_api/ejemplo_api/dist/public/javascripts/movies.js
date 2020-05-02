'use strict';

function fetchMovies() {
    fetch('http://localhost:3000/api/v1/movies').then(function (response) {
        return response.json();
    }).then(function (json) {
        return renderMovies(json.movies);
    }).catch(function (error) {
        return console.log(error);
    });
}

function renderMovies(movies) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = movies[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var movie = _step.value;

            var textTag = generateTextTag();
            textTag.innerText = movie.title;
            document.body.appendChild(textTag);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

function generateTextTag() {
    var tag = document.createElement('p');
    return tag;
}

function setListeners() {
    var button = document.getElementById('fetch-button');
    button.addEventListener('click', fetchMovies);
}

setListeners();