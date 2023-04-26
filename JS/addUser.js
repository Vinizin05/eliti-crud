
window.onload = function (){
    listaUserStorage = JSON.parse(localStorage.getItem('listaUser'));
    exibirDados();
}


function cadastrar(){
    const nome = document.querySelector("#nome")
    const email = document.querySelector("#email")
    const senha = document.querySelector("#senha")
    let listaUserStorage = JSON.parse(localStorage.getItem('listaUser')) || []

    let novoUsuario = {
        'nome': nome.value,
        'email': email.value,
        'senha': senha.value
    }
    
    if(nome && email && senha){
        listaUserStorage.push(novoUsuario)
        localStorage.setItem('listaUser', JSON.stringify(listaUserStorage))
    } else alert("incorreto")

}

function exibirDados() {

    const usuarios = JSON.parse(localStorage.getItem('listaUser'));

    const divUsuarios = document.querySelector('.usuarios')


    if (usuarios) {
        for(const usuario of usuarios) {
            const nome = usuario.nome;
            const paragrafo = document.createElement('p');
            paragrafo.textContent = nome;
    
            const novoUsuarioDiv = document.createElement('div');
            novoUsuarioDiv.appendChild(paragrafo)
            novoUsuarioDiv.className = 'user'

            divUsuarios.appendChild(novoUsuarioDiv)
        }
    
    } else {
        document.querySelector('.user').textContent = 'Nenhum usuário cadastrado';
    }
}


    



