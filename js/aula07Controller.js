app.controller('aula07Controller', function($scope){
    /*
    Variavel do proprio Angular, que é um acomplador das outras varias
    assim fica disponivel para a camada de visualização
     */

    $scope.nomes = [ 'Robinho', 'Arthur', 'Deise', 'Izabelly', 'Debora', 'Adilson', 'Anderson'];

    $scope.pessoas = [];

    $scope.pessoas.push(
        {nome: "Robinho de Morais", idade: 28, status: false }
    );

    $scope.pessoas.push(
        {nome: "Deise de Morais", idade: 32, status: false }
    );

    $scope.pessoas.push(
        {nome: "Arthur de Morais", idade: 2, status: false }
    );

    $scope.pessoas.push(
        {nome: "Izabelly de Morais", idade: 9, status: false }
    );


    console.log($scope.pessoas);

    $scope.adicionaPessoa = function (){
        var nome = document.getElementById("nomepessoa");
        var idade = document.getElementById("idadepessoa");


        $scope.pessoas.push(
            {nome: nome.value, idade: idade.value }
        );

        nome.value  = "";
        idade.value = "";

    }

});