const inputs = document.querySelectorAll(".input");

//adiciona foco ao clicar no input
function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

//remove o foco ao clicar em qualquer lugar da tela
function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

//adiciona evento nos inputs
inputs.forEach((input) => {
  input.addEventListener("focus", addcl);
  input.addEventListener("blur", remcl);
});

// redirecionamento de pagina
function entrar() {
  window.location.href = "/html/usuario.html";
}


