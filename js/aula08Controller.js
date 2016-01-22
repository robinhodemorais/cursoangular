app.controller('aula08Controller', function($scope){
    /*
     $setUntouched para limpar completamente o formulario, como se não tivesse manutenção nos campos
     $setPristine limpa o formulario, voltando para a forma iniciar
     */
      $scope.estados = ['RS','SP','RJ','PR','SC'];
      $scope.pessoa = novaPessoa();

    $scope.pessoas = [];

    $scope.salvarPessoa = function(pessoa){
        $scope.pessoas.push(pessoa);
        $scope.pessoa =  novaPessoa();

        $scope.frm.$setUntouched();
        $scope.frm.$setPristine();
    }

    console.log($scope.pessoa)
});

function novaPessoa() {
    return {
        nome: "",
        email: "",
        sexo: "f",
        estado: "RJ"
    }
}