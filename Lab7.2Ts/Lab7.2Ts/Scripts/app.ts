declare var angular: any;

var App = angular.module('App', []);

App.controller("mediaCtrl", function ($scope) {

    let library = new Media();

    var media = [];
    var books = [];



    let getMediaArray = function () {

        media.length = 0;

        for (let book of library.ReturnBooks()) {

            media.push(book.get());
        }

        for (let dvd of library.ReturnDvds()) {

            media.push(dvd.get());
        }

        for (let game of library.ReturnGames()) {

            media.push(game.get());
        }

        return media;
    }

    let AllBooks = function () {
        books.length = 0;

        for (let book of library.ReturnBooks()) {

            books.push(book.get());
        }
        return books;
    }

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
    }
    $scope.MediaArray = getMediaArray();

    $scope.BooksArray = AllBooks();
});