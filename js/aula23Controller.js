var app = angular.module('app', ['ui.unique', 'ui.validate']);

app.controller('Aula23Controller', function ($scope) {
    //ui.unique = Filtro de array ou objeto
    $scope.usuarios = [
        {nome : "Robinho", email: "robinhodemorais@gmail.com"},
        {nome : "Robinho 2", email: "robinhodemorais@gmail.com"},
        {nome : "Robinho", email: "teste@gmail.com"},
        {nome : "Robinho 2", email: "teste@gmail.com"},
        {nome : "Robinho", email: "robinhodemorais@gmail.com"},
        {nome : "Robinho 3", email: "izabelly@gmail.com"},
    ];

    $scope.validar = function(valor){
        return valor === $scope.senha1;
    }

});