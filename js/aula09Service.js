/**
 * Created by Robinho on 28/01/2016.
 */
app.service('operacoes', function(){

    console.log("Criou o service de operações");

    this.somar = function(valor1,valor2){
        return valor1 + valor2;
    };

    this.subtrair = function(valor1,valor2){
        return valor1 - valor2;
    };

});
