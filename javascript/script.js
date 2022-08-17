var nome = document.getElementById("nome");
var cpf = document.getElementById("cpf");
var dtnascimento = document.getElementById("dtnascimento");
var funcao = document.getElementById("funcao");
var btnForm = document.getElementById("btn-form");
var formCadastro = document.getElementById("formCadastro");

formCadastro.onsubmit=function(){
    setTimeout(function(){
        nome.value="";
        dtnascimento.value="";
        cpf.value="";
        funcao.value="Select";
    }, 1);
};
// var formCadastro = document.getElementById("formCadastro");

// Select
var select = document.getElementById("funcao");
var opcaoValor = select.options[select.selectedIndex].value;


btnForm.addEventListener('click',function(){
    
    if (nome.value == "" || nome.value < 4) {
        console.log("Nome não informado ou menor que 4 caracteres");
        nome.focus();
    }else if (dtnascimento.value == "") {
        console.log("Data de nascimento não informada!")
        dtnascimento.focus();

    }else if (cpf.value == "") {
        console.log("Cpf não informado ou tem caracteres sem ser números!");
        cpf.focus();
    
    }else if (funcao.value == "Select") {
        console.log("Escolha uma funcão");
        funcao.focus();

    }

});

// Permitir apenas caracteres que eu quero

document.getElementById("nome").onkeypress = function (e){
    var chr = String.fromCharCode(e.which);
    if (" abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVXWYZÆÁÂÂÀÅÃÄÇÐÉÊÈËÍÎÌÏÑÓÔÒØÕÖÞÚÛÙÜÝáâæàåãäçéêèðëíîìïñóôòøõößþúûùüýÿ".indexOf(chr) < 0)
    return false;
}

document.getElementById("cpf").onkeypress = function (e){
    var chr = String.fromCharCode(e.which);
    if ("1234567890".indexOf(chr) < 0)
    return false;
}

// Mascara sem usar regex

function mascara_cpf(){
    if (cpf.value.length == 3 || cpf.value.length == 7) {
        cpf.value +=  "."
    }else if (cpf.value.length == 11){
        cpf.value += "-"
    }
}