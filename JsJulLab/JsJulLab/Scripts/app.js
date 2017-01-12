var App = angular.module("App", []);


App.factory("MediaFactory", function () {

    var users = [

        {
            username: "User1",
            name: "sture",
            password: "dog"
        },
        {
            username: "User2",
            name: "Robin",
            password: "dog"
        }, {
            username: "User3",
            name: "Daniel",
            password: "dog"
        }, {
            username: "User4",
            name: "Jacc",
            password: "dog"
        }, {
            username: "User5",
            name: "Issa",
            password: "dog"
        }
    ]

    var MoviesArray = [

        {
            title: "movie1",
            year: "1999"
        },
        {
            title: "movie2",
            year: "1999"
        },
        {
            title: "movie3",
            year: "1999"
        },
        {
            title: "movie4",
            year: "1999"
        },
        {
            title: "movie5",
            year: "1999"
        },
        {
            title: "movie6",
            year: "1999"
        },
        {
            title: "movie7",
            year: "1999"
        },
        {
            title: "movie8",
            year: "1999"
        },
        {
            title: "movie9",
            year: "1999"
        },
        {
            title: "movie10",
            year: "1999"
        }

    ]

    var factory = {};

    factory.GetMovies = function(){
        return MoviesArray;
    };

    
    return factory;
});

var controller = {};

controller.MediaCtrl = function ($scope, MediaFactory) {

    $scope.MoviesArray = MediaFactory.GetMovies();
};


App.controller(controller);