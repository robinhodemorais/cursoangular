/**
 * Created by Robinho on 28/01/2016.
 */
app.controller('Aula13Controller', function ($scope) {

});

app.directive('ngOla', function(){
    return {
        /*
         restrict : A = UTILIZA A DIRETIVA SOMENTE EM ELEMENTOS HTML
         restrict : E = Não renderiza ao carregar utilizando <ng-ola>
         restrict : C = renderiza por classe
         */
        restrict : 'AEC',
        scope : {
            ngNome : '@'
        },
        template : '<h1>Olá {{ngNome}}</h1>',

        /*]
          Para trabalhar com o AngularJS
          Controller para diretiva para permitir utilizar os recursos do AngularJS para a nossa diretiva
          mas ele não consegue manipular a pagina
         */
        controller : ['$scope', function ($scope) {
            $scope.digaOla = function (nome){
                alert('Ola '+ nome + '!');
            }
        }],

        /*
        PARA TRABALHAR COM ELEMENTO DO HTML
         */
        link: function(scope, iElement, iAttrs){
            console.log(iElement);
            console.log(iAttrs);
            scope.digaOla(iAttrs.ngNome);

        }

    }
});
