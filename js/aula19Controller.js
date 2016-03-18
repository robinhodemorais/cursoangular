var app = angular.module('app', ['ngCookies']);

app.controller('Aula19Controller', function ($scope, $cookieStore) {

    //adiciona o cookie
    //$cookieStore.put("nome", "DevMedia.com");
    //remove o cookie
    //$cookieStore.remove("nome");
    $scope.criarCookie = function () {
        $cookieStore.put("meusDados", {"nome " : "Robinho", "idade" : 31 } ) ;
    }

    $scope.getValorCookie = function () {
        console.log($cookieStore.get("meusDados"));
    }

    $scope.removeCookie = function () {
        $cookieStore.remove("meusDados");
    }

})

app.controller('Aula19_2Controller', function ($scope, $cookieStore) {

    $scope.getValorCookieCtrl2 = function () {
        console.log($cookieStore.get("meusDados"));
    }
});