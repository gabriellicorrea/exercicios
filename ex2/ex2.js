 
function cor(){
    var h1   = document.querySelector("#h1");
    var aux = prompt("Digite um número: ");
       
    if(aux == 0){
        h1.style.color = "blue";
    } else if(aux == 1){
        h1.style.color = "red";
    } else if(aux == 2){
        h1.style.color = "yellow";
    } else{
        h1.textContent ="ERRO!!";
    }
    
}











/* Exercıcio 2 Considere o seguinte trecho:
<h1 id=”h1”>My Header< /h1 >
Faca uma funcao cor que receba uma valor inteiro x e partir deste a funcao
devera deixar o header acima em azul se x for zero, em vermelho se x for um
e em amarelo se x for dois. Se o valor recebido x nao for nenhum destes, o
conteudo string do header devera ser mudado para erro.
*/