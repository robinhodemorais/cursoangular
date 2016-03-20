var app = angular.module('app', ['ui.highlight', 'ui.mask', 'ngSanitize']);

app.controller('Aula22Controller', function ($scope) {
    $scope.texto = "Esse é uma breve descrição. Esse é uma breve descrição. Esse é uma breve descrição. Esse é uma breve descrição. " +
        "Esse é uma breve descrição. Esse é uma breve descrição. Esse é uma breve descrição. Esse é uma breve descrição. Esse é uma breve descrição. " +
        "Esse é uma breve descrição. Esse é uma breve descrição. Esse é uma breve descrição. Esse é uma breve descrição. ";

    $scope.maskCpf = '999.999.999-99';

    $scope.maskFone = '(99) 9999-9999';
    //9 - somente numeros
    //A - somente letras
    //* - qualquer coisa
});
