var appSaudacao = angular.module('appSaudacao', []);
/*
  ao utilizar os [] � para adicionar modulos de terceiros
 */

appSaudacao.filter('ola', function(){
  return function(nome){
    return "Ola " + nome + "!";
  }
});