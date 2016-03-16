app.controller('Aula18Controller', function ($scope, $location) {

    $scope.$location = $location;

    $scope.setaId = function (p_id) {
        $location.search({id : p_id});
    }

    $scope.$watch('$location.search().id', function(id){
        console.log("Mudou o valor do ID para "+id);
    });

}).config(function ($locationProvider) {
    $locationProvider.html5Mode({
        /*HABILITA O HTML 5*/
        enabled : true,
        /*Desabilita o metabase*/
        requireBase : false

        /*hashPrefix Elemento que é utilizado como ancora*/
    }).hashPrefix('#');

});