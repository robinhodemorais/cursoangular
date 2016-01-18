app.controller('aula06Controller', function($scope){

    /*
    $scope é uma variavel que contem as outras variaveis
     */

    $scope.nome = "Curso Angular Devmedia";

    $scope.olaMundo = function(nome){
        alert("Ola "+ nome + "!");
    }

    console.log("executou o controller");


});