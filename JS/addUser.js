const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
const senha = document.querySelector("#senha")


function cadastrar(){
    const nome = document.querySelector("#nome")
    const email = document.querySelector("#email")
    const senha = document.querySelector("#senha")
    let listaUser = JSON.parse(localStorage.getItem('listaUser')) || []

    listaUser.push({
        nome: nome.value ,
        email: email.value ,
        senha: senha.value
    }
    )

    localStorage.setItem('listarUser', JSON.stringify(listaUser))
}
    

