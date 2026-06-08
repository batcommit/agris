// =========================================================
// ANIMAÇÕES AO SCROLL
// =========================================================

// document.addEventListener("DOMContentLoaded", () => {
//     const elementos = document.querySelectorAll(
//         ".fade-in, .slide-left, .slide-right, .zoom-in"
//     );

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if(entry.isIntersecting){
//                 entry.target.classList.add("visible");
//             } else {
//                 entry.target.classList.remove("visible");
//             }
//         });
//     }, {
//         threshold: 0.15
//     });

//     elementos.forEach(el => observer.observe(el));
// });

// ======================================================
// CAMPOS
// ======================================================

var nome = document.getElementById("nome");
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");
var mensagem = document.getElementById("mensagem");


// ======================================================
// MENSAGENS DE ERRO
// ======================================================

var erroNome = document.getElementById("erroNome");
var erroEmail = document.getElementById("erroEmail");
var erroTelefone = document.getElementById("erroTelefone");
var erroMensagem = document.getElementById("erroMensagem");


// ======================================================
// BOTÃO
// ======================================================

var btnEnviar = document.getElementById("btnEnviar");


// ======================================================
// EVENTOS
// ======================================================

nome.addEventListener("keyup", validarNome);

email.addEventListener("keyup", validarEmail);

telefone.addEventListener("keyup", validarTelefone);

mensagem.addEventListener("keyup", validarMensagem);

btnEnviar.addEventListener("click", enviarFormulario);


// ======================================================
// CONTAR CARACTERES
// ======================================================

function contarCaracteres(texto){

    var contador = 0;

    var i;

    for(i = 0; texto[i] != undefined; i++){

        contador++;
    }

    return contador;
}


// ======================================================
// VALIDAR NOME
// ======================================================

function validarNome(){

    var quantidade =
    contarCaracteres(nome.value);

    if(quantidade < 3){

        erroNome.innerHTML =
        "Digite pelo menos 3 caracteres.";

        return false;
    }

    if(quantidade > 50){

        erroNome.innerHTML =
        "Máximo de 50 caracteres.";

        return false;
    }

    erroNome.innerHTML = "";

    return true;
}


// ======================================================
// VALIDAR EMAIL
// ======================================================

function validarEmail(){

    var texto = email.value;

    var quantidade =
    contarCaracteres(texto);

    var contadorArroba = 0;
    var contadorPonto = 0;

    var i;

    for(i = 0; texto[i] != undefined; i++){

        if(texto[i] == "@"){

            contadorArroba++;
        }

        if(texto[i] == "."){

            contadorPonto++;
        }
    }

    if(quantidade > 80){

        erroEmail.innerHTML =
        "Máximo de 80 caracteres.";

        return false;
    }

    if(contadorArroba != 1){

        erroEmail.innerHTML =
        "O email deve possuir apenas um @.";

        return false;
    }

    if(contadorPonto < 1){

        erroEmail.innerHTML =
        "O email deve possuir pelo menos um ponto.";

        return false;
    }

    erroEmail.innerHTML = "";

    return true;
}


// ======================================================
// VALIDAR TELEFONE
// ======================================================

function validarTelefone(){

    var texto = telefone.value;

    var quantidade =
    contarCaracteres(texto);

    var contadorNumeros = 0;

    var i;

    for(i = 0; texto[i] != undefined; i++){

        if(
            texto[i] >= "0" &&
            texto[i] <= "9"
        ){

            contadorNumeros++;
        }
    }

    if(quantidade > 11){

        erroTelefone.innerHTML =
        "Máximo de 11 números.";

        return false;
    }

    if(contadorNumeros != quantidade){

        erroTelefone.innerHTML =
        "Digite apenas números.";

        return false;
    }

    if(texto[2] != "9"){

    erroTelefone.innerHTML =
    "Digite um celular válido. Após o DDD, o número deve começar com 9.";

    return false;
}

    if(texto[2] != "9"){

        erroTelefone.innerHTML =
        "Telefone inválido.";

        return false;
    }

    erroTelefone.innerHTML = "";

    return true;
}


// ======================================================
// VALIDAR MENSAGEM
// ======================================================

function validarMensagem(){

    erroMensagem.innerHTML = "";

    return true;
}


// ======================================================
// ENVIAR FORMULÁRIO
// ======================================================

function enviarFormulario(){

    var nomeValido =
    validarNome();

    var emailValido =
    validarEmail();

    var telefoneValido =
    validarTelefone();

    var mensagemValida =
    validarMensagem();

    var quantidadeErros = 0;

    if(nomeValido == false){

        quantidadeErros++;
    }

    if(emailValido == false){

        quantidadeErros++;
    }

    if(telefoneValido == false){

        quantidadeErros++;
    }

    if(mensagemValida == false){

        quantidadeErros++;
    }

    if(quantidadeErros == 0){

        alert(
            "Mensagem enviada com sucesso!"
        );

    }else if(quantidadeErros > 1){

        alert(
            "Existem campos preenchidos incorretamente."
        );

    }else{

        if(nomeValido == false){

            alert(
                "Verifique o campo Nome."
            );
        }

        if(emailValido == false){

            alert(
                "Verifique o campo Email."
            );
        }

        if(telefoneValido == false){

            alert(
                "Verifique o campo Telefone."
            );
        }

        if(mensagemValida == false){

            alert(
                "Verifique o campo Mensagem."
            );
        }
    }
}