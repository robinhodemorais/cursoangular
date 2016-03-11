/**
 * Created by Robinho on 28/01/2016.
 */
app.controller('Aula14Controller', function ($scope, $http) {
    $scope.dados = [];

    $scope.url = "http://api.openweathermap.org/data/2.5/weather?q=";
    $scope.cidade = "Rio de Janeiro";
    $scope.finalUrl = "&appid=44db6a862fba0b067b1930da0d769e98";
    $scope.descricaoTempo = "";

    $scope.icone = "";

    $scope.carregaDados = function(){
        $http
            .get("dados.json")
            .success(function (data) {
                console.log(data)
                $scope.dados = data;
            })
            .error(function () {
                alert("Não foi possivel carregar os dados");
            });
    }

    $scope.carregaPrevisao = function () {
        $http
            .get($scope.url+$scope.cidade+"&units=metric"+$scope.finalUrl)
            .success(function (data) {
                console.log(data)
                $scope.icone = data.weather[0].icon;
                $scope.descricaoTempo = data.weather[0].description;

            })
            .error(function () {
                alert("Não foi possivel carregar os dados");
            });
    }




});
