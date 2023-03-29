let emailUsuario = document.querySelector("#email");
let senhaUsuario = document.querySelector("#senha");
let botaoLogar = document.querySelector("#logar");
let botaoLimpar = document.querySelector("#cancelar");
let formulario = document.querySelector("#form");

const emailCadastrado = "arthurlopes558@gmail.com";
const senhaCadastrada = "123456";

form.addEventListener("submit", function (event) {
  event.preventDefault();
  //valor dos inputs
  let email = emailUsuario.value;
  let senha = senhaUsuario.value;

  //condicionais
  let condição1 = email === emailCadastrado;
  let condição2 = senha === senhaCadastrada;

  if (condição1 && condição2) {
    alert('LOGADO COM SUCESSO!')
    emailUsuario.classList.remove("invalidated");
    senhaUsuario.classList.remove("invalidated");
  } else if (condição1 !== true) {
    emailUsuario.classList.add("invalidated");
    timeOut(emailUsuario);
  }
  if (condição2 !== true) {
    senhaUsuario.classList.add("invalidated");
    timeOut(senhaUsuario);
  }
});

function timeOut(element) {
  setTimeout(function () {
    element.classList.remove("invalidated");
  }, 2000);
}


botaoLimpar.addEventListener('click', function(){
    emailUsuario.value = "";
    senhaUsuario.value = "";
})