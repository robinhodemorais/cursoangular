/**
 * Created by Robinho on 28/01/2016.
 */
app.factory('Pessoa', function(){

    console.log("Criou o objeto Pessoa");

    var Pessoa = function(){

        console.log("Instanciou o objeto pessoal");

        this.nome  = "Robinho";
        this.idade = "28";

        this.cumprimentar = function (){
            return "Ola "+this.nome+" !";
        }
    }

    return Pessoa;
});
