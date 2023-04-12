const inputs = document.querySelectorAll(".input");

//adiciona foco ao clicar no input
function addFocus() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

//remove o foco ao clicar em qualquer lugar da tela
function remFocus() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

//adiciona evento nos inputs    /*forEach =>  é um método de loop que é usado em arrays e outros tipos de objetos iteráveis*/
inputs.forEach((input) => {
  input.addEventListener("focus", addFocus);
  input.addEventListener("blur", remFocus);
});

// redirecionamento de pagina
function entrar() {
  var email = document.querySelector(".gmail");
  var senha = document.querySelector(".password");

  if (email.value == "admin@gmail.com" && senha.value == "admin") { 
    localStorage.setItem("acesso", true);

    window.location.href = "/html/usuario.html";

  } else {
    alert("Email ou Senha nao cadastrados")
  }
  

    

}
  
  
