var App = angular.module("App", []);


App.factory("MediaFactory", function ($q) {

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

    factory.Login = function (username, password) {

        var q = $q.defer();
        var user = {};

        angular.forEach(users, function (value, key) {

            if (value.username == username && value.password == password) {
                user = value;
            };

        });
        if (angular.equals(user, {})) {

            q.reject("Username or password invalid");
        } else {
            q.resolve(user.name);
        }
        return q.promise;
    };

    factory.GetUser = function () {
        var q = $q.defer();
        var user = {};
        
        angular.forEach(users, function (value, key) {
            if(value.username == localStorage.rememberUser){
                user = value;
            };

        });

        if (angular.equals(user, {})) {
            q.reject();
        } else {
            q.resolve(user);
        };

        return q.promise;
    };

    
    return factory;
});

var controller = {};

controller.MediaCtrl = function ($scope,$q,$location, MediaFactory) {

    $scope.MoviesArray = MediaFactory.GetMovies();
    $scope.LoginUser = function () {

        MediaFactory.Login($scope.inputUserName, $scope.inputPassword).then(
            function (username) {
                sessionStorage.removeItem('user');
                sessionStorage.user = username;

                if ($scope.boxRememberMe) {
                    localStorage.rememberUser = $scope.inputUserName;

                } else {
                    localStorage.removeItem('rememberUser');
                }
                window.location.href = 'index.html';
            },
            function (error) {
                $scope.error = error;
            });
    };
    $scope.SignedIn = function () {
        $scope.user = sessionStorage.user;
    };

    $scope.OldUser = function () {
        MediaFactory.GetUser().then(function (user) {
            $scope.inputUserName = user.username;
            $scope.inputPassword = user.password;
            $scope.boxRememberMe = true;
        });
    };
};


App.controller(controller);