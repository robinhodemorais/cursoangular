/**
 * Created by Robinho on 02/02/2016.
 */
/*
Separa a function do instanciamento do controller.
 */

function Aula10Controller($scope, $filter){

    console.log("Iniciou o Controller");

    //console.log(retornaoiFilter("Deise"));

    console.log($filter('retornaoi')('Arthur'));

    $scope.pessoa = {
        nome : "Robinho Morais",
        idade : 28
    }

}

app.controller('Aula10Controller', Aula10Controller);