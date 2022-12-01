//pegando o input slider
let sliderElement = document.querySelector("#slider");
//pegando o button "gerar senha"
let buttonElement = document.querySelector("#button");
//pegar o valor do numero de caracteres
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
//pegar o "container-password" para aparecer só após a senhar ser gerada
let containerPassword = document.querySelector("#container-password");

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!';
let novaSenha = '';


//innerHTML troca o "valor " no hrtml
sizePassword.innerHTML = sliderElement.value;
// o atributo oninput pega quando o elemento input é alterado 
slider.oninput = function() {
    //troca o "valor" pra o q está no memonto
    sizePassword.innerHTML = this.value;
}
//colocado no html "onclick, para quando clicado ser acionada essa funçao"
function generatePassword(){
    let pass = '';
 //para a quantidade de caracteres que o usuario queser, passar pelo charset e pegar um caracter aleatorio
 for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
  // charAt vai pegar um item relacionado a sua posição, como o numero é aleatorio a posição tbm é
    pass += charset.charAt(Math.floor(Math.random() * n));
 }
 
 containerPassword.classList.remove("hide");
 password.innerHTML = pass;
 novaSenha = pass;
}
function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
  }