// const nome = document.querySelector("#nome")
// const email = document.querySelector("#email")
// const senha = document.querySelector("#senha")

window.onload = function (){
    exibirDados();
  }


function cadastrar(){
    const nome = document.querySelector("#nome")
    const email = document.querySelector("#email")
    const senha = document.querySelector("#senha")
    let listaUserStorage = JSON.parse(localStorage.getItem('listaUser'))

    let novoUsuario;

    if(listaUserStorage){
        console.log("entrou no if")
        novoUsuario = [...listaUserStorage, {
            'nome': nome.value,
            'email': email.value,
            'senha': senha.value
        }]
    }
    else {
        console.log("entrou no else")
        novoUsuario = [{
            'nome': nome.value,
            'email': email.value,
            'senha': senha.value
        }]
    }
    localStorage.setItem('listaUser', JSON.stringify(novoUsuario))
}

function exibirDados() {
    const novoUsuario = JSON.parse(localStorage.getItem('listaUser'));

    if (novoUsuario && novoUsuario.length > 0) {
        const nome = novoUsuario[novoUsuario.length - 1].nome;
        const paragrafo = document.createElement('p');
        paragrafo.textContent = nome;
        document.querySelector('#usuario').appendChild(paragrafo);
    } else {
        document.querySelector('#usuario').textContent = 'Nenhum usuário cadastrado';
    }
}

