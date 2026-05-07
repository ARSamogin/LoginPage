const senha1 = document.getElementById("Senha") 
const senha2 = document.getElementById("ConfirmarSenha")
const form = document.getElementById("FormSubmit")

function comparisson(){
  if(senha1 === senha2){
    pass
  }
  else{
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      alert("Senhas Diferentes")
    }  
    )
  }
}
