/**
 * Created by Robinho on 28/01/2016.
 */
app.controller('aula09Ctrl1Controller', ['$scope','operacoes', 'Pessoa',
                function($scope, operacoes, Pessoa){

                    $scope.pessoa = new Pessoa();

                    console.log("Entrou no controller aula 9 1");
                    console.log(operacoes.somar(10,10));

}]);

app.controller('aula09Ctrl2Controller', ['$scope','operacoes', 'Pessoa', function($scope, operacoes, Pessoa){

    $scope.outrapessoa = new Pessoa();

    $scope.outrapessoa.nome = "DevMedia";

    console.log("Entrou no controller aula 9 2");

    console.log(operacoes.subtrair(10,3));
    //console.log("teste");
}]);