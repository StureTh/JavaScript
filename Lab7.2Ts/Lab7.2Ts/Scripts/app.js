var App = angular.module('App', []);
App.controller("mediaCtrl", function ($scope) {
    var library = new Media();
    var media = [];
    var books = [];
    var getMediaArray = function () {
        media.length = 0;
        for (var _i = 0, _a = library.ReturnBooks(); _i < _a.length; _i++) {
            var book = _a[_i];
            media.push(book.get());
        }
        for (var _b = 0, _c = library.ReturnDvds(); _b < _c.length; _b++) {
            var dvd = _c[_b];
            media.push(dvd.get());
        }
        for (var _d = 0, _e = library.ReturnGames(); _d < _e.length; _d++) {
            var game = _e[_d];
            media.push(game.get());
        }
        return media;
    };
    var AllBooks = function () {
        books.length = 0;
        for (var _i = 0, _a = library.ReturnBooks(); _i < _a.length; _i++) {
            var book = _a[_i];
            books.push(book.get());
        }
        return books;
    };
    $scope.addBook = function () {
        library.AddBooks(new Books($scope._name, $scope._category, $scope._price, $scope._artNumber, $scope._writer, $scope._release));
        $scope._name = null;
        $scope._category = null;
        $scope._price = null;
        $scope._artNumber = null;
        $scope._writer = null,
            $scope._release = null;
        $scope.MediaArray = getMediaArray();
        $scope.BooksArray = AllBooks();
    };
    $scope.MediaArray = getMediaArray();
    $scope.BooksArray = AllBooks();
});
//# sourceMappingURL=app.js.map