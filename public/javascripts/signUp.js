var moduleLogin = angular.module('moduleLogin',[])

moduleLogin.controller('signUpCtrl',function($scope,$http,$location){
    $scope.signUpData = {};
    $scope.signUpUserData = function(){
        //console.log($scope.signUpData);

        $http.post('/signUp',{
            signUpData:$scope.signUpData
        }).success(function(response){
            console.log(response);

            //response.redirect('\Signin');
        }).error(function(error){
            console.log(error)
        })
    }

})