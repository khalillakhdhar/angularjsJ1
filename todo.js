var app=angular.module("myApp",[]);
app.controller("todoCtrl",function($scope){
    $scope.tasks=[]; // initialisation de la liste des taches sinon erreur undefined
    $scope.addTodo=function(){
        $scope.tasks.push($scope.newTask);
        $scope.newTask="";
    }
});