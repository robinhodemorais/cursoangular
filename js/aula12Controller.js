var app = angular.module('app',['ngSanitize']);

//ngSanitize para injetar codigos html via angular

function Aula12Controller($scope, $filter){

    $scope.mostrar = true;

    $scope.variavelHTML = "<h1>Seja bem vindo ano nosso site!</h1>";

    $scope.minhaClass = "";

    $scope.variavelCloak = "texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto " +
        "texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto ";

    $scope.minhaFoto = "foto1.jpg";
}

app.controller('Aula12Controller', Aula12Controller);