declare var angular: any;

let App = angular.module('App', []);


App.controller('ConverterCtrl', function ($scope) {

    $scope.sekCalc = function () {

        $scope.euroInput = ConvertSekToEuro($scope.sekInput);

    }

    $scope.euroCalc = function () {

        $scope.sekInput = ConvertEuroToSek($scope.euroInput);

    }
})

function ConvertSekToEuro(sek: number): number {

    return sek * 9.50;
}

function ConvertEuroToSek(euro: number): number {

    return euro * 0.1;
}