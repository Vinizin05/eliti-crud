const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
const senha = document.querySelector("#senha")


function cadastrar(){
    
    console.log('kkkk')
   let listaUser = JSON.parse(localStorage.getItem('listaUser') || []) 
    
        listaUser.push (
            {
            nomecad: nome.value ,
            emailcad: email.value ,
            senhacad: senha.value
            }
        )
         
     localStorage.setItem('listarUser', JSON.stringify(listaUser))
     window.location.href = "/html/addUser.html"
    
}
