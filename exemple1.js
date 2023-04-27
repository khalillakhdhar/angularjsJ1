// récupération des valeur firstname et lastname de la page exemple1.html
// initialisation dans le scope de la fonction
var app=angular.module('myApp',[]); // création du module myApp et une liste vide d'arguments
// création d'un controller
app.controller('myCtrl',function($scope){ // création d'un controller myCtrl et une liste vide d'arguments
// $scope est un objet qui permet de partager des données entre le controller et la vue
    $scope.firstname="Sonia"; // => ng-model="firstname" dans la vue
    $scope.lastname="Mohamed";
});