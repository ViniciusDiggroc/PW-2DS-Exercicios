$("#calcular").click(function() {
    // recebendo dados da interface
    let n1 = parseInt($("#n1").val());
    let n2 = parseInt($("#n2").val());
    let operacao = $("input[name='operacao']:checked").val();

    // chamando a função calcular
    let resultado = calcular(n1, n2, operacao);

    // mostrando na interface
        $("#resultado").html("Resultado: "  + resultado);
});

function limpar() {
    $("#n1").val("");
    $("#n2").val("");
    $("#n1").focus();
    $("input[name='operacao']").prop("checked", false);
    $("#resultado").html("Resultado: ");
}

function calcular(n1, n2, operacao) {
    let texto = "";
    
    if(n1 >= 0){
        texto += "n1 é positivo ";
    } else {
        texto += "n1 é negativo ";
    }

    if(n1 % 2 == 0){
        texto += "e também é par<br> ";
    } else {
        texto += "e também é ímpar<br> ";
    }

    let resultado = 0;

    if(operacao == "soma") {
        resultado = n1 + n2;
    } else if (operacao == "sub") {
        resultado = n1 - n2;
    } else if(operacao == "mult"){
        resultado = n1 * n2;
    } else if(operacao == "div"){
        if(n2 == 0){
            alert("Erro! Divisão por zero");
            return resultado;
        } else {
            resultado = n1 / n2;
        }
    } else {
        alert("Operação inválida!");
        return resultado;
    }

    return texto + "A conta deu: " + resultado ;
}
