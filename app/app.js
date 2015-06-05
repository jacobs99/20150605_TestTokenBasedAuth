
var App = angular.module('App', []);


App.controller('Ctrl01', function($scope, $http) {

    $scope.status_message = 'user is not logged in';
    $scope.processForm = function () {

        // var restAPI = 'http://localhost:8080/api/square/';  // local
        var restAPI = 'api/square/';   // remote

        $http.get(restAPI + $scope.user_input)
            .then(function (res) {
                $scope.data = res.data;
            });

    };

});