var app = angular.module('app', ['pascalprecht.translate']);

app.config(function ($translateProvider) {
    $translateProvider.translations('pt-br', {
        TITULO : 'Seja bem vindo',
        PARAGRAFO1 : "Essa é uma pagina de inicio !",
        BTN_OK: "Confirmar",
        BTN_CANCEL : "Cancelar",
        EN_BTN : "English",
        PTBR_BTN : "PORTUGUESE"
    });

    $translateProvider.translations('en',{
        TITULO : 'Welcome',
        PARAGRAFO1 : "This is a Hello World",
        BTN_OK : "Confirm",
        BTN_CANCEL : "Cancel",
        EN_BTN : "Ingles",
        PTBR_BTN : "Portugues"
    });
    $translateProvider.preferredLanguage('pt-br');

});
app.controller('Aula20Controller', function ($scope, $translate) {
    $scope.setaIdioma = function (sigla){
        $translate.use(sigla);
    }
});
