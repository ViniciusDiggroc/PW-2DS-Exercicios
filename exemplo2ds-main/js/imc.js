$("#calcular").click(function () {
    let peso = parseFloat($("#peso").val())
    let altura = parseFloat($("#altura").val())
    if (isNaN(peso) || isNaN(altura) || altura < 1 || peso < 0) {
        $("#resultado").html("Digite peso e altura válidos (Ex: 1.65 / 20 kg)")
        return
    }
    let resultado = calcular(peso, altura)
    $("#resultado").html(resultado);

});


function limpar() {
    $("#peso").val("");
    $("#altura").val("");
    $("#peso").focus();
    $("#resultado").html("Resultado: ");
}

function calcular(peso, altura) {
    let IMC = peso / (altura * altura);
    let resultado = ""
    if (IMC < 18.5) {
        resultado = "Você está abaixo do peso!";
    }
    else if (IMC <= 24.9) {
        resultado = "Você está Normal!";
    }
    else if (IMC <= 29.9) {
        resultado = "Você está com Sobrepeso!";
    }
    else if (IMC <= 39.9) {
        resultado = "Você está com obesidade!";
    }
    else {
        resultado = "Obesidade grave";
    }

    return "Peso: " + peso + " kg<br>" +
        "Altura: " + altura + " m<br>" +
        "IMC: " + IMC.toFixed(2) + "<br>" +
        resultado
}


















