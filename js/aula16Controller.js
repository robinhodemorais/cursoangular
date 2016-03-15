/*
Utilizamos a diretiva e o elemento DOM (JQUERY) para manipular a pagina
 */
app.directive('tooltip', function() {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {

            console.log(element.html());

            //console.log(element.hide('slow'));


            element.tooltipsy({
                offset  : [0, 10],
                content : scope.textoTooltip
            });
        }

    }
});

app.controller('Aula16Controller', function ($scope) {
    $scope.textoTooltip = "esse é o texto da minha tooltip";

});

/*
 JQUERY
 *//*
$(function () {
    $(".tooltip").tooltipsy({
        offset: [0, 10]
    });
}
    */