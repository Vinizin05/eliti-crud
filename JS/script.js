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

//Salvando dados para fazer login

function entrar() {
  var email = document.querySelector("#email").value;
  var senha = document.querySelector("#passwd").value;

  console.log({ email, senha });

  var users = JSON.parse(localStorage.getItem("users")) || [
    {
      email: "admin@gmail.com",
      password: "admin",
    },
  ];

  console.log(users);

  var usuarioEncontrado = users.filter(function (u) {
    return u.email === email && u.password === senha;
  })[0]; // para acessar o primeiro elemento do novo array

  console.log(usuarioEncontrado);

  if (usuarioEncontrado) {
    window.location.href = "/html/usuario.html";
  } else {
    alert("Email ou Senha nao cadastrados");
  }
}

// Entrar com Enter
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    var btn = document.querySelector(".botao");

    btn.click();
  }
});
