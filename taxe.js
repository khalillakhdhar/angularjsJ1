var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
  $scope.calculate = function() {
    var totalPrice = $scope.price * $scope.quantity;
    var taxAmount = totalPrice * $scope.taxRate / 100;
    var totalAmount = totalPrice + taxAmount;
    $scope.totalPrice = totalPrice.toFixed(2);
    $scope.taxAmount = taxAmount.toFixed(2);
    $scope.totalAmount = totalAmount.toFixed(2);
    // Affichage conditionnel avec ng-if
    $scope.showTax = taxAmount > 0;
    $scope.showTotal = totalAmount > 0;
  };
});