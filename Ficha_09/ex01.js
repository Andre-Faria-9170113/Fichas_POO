let users = []

class User{
    constructor(name, email, password){
        this._id = User.getLastId()
        this.name = name
        this.email= email
        this.password = password
    }

      //Propriedade ID
      get id(){
        return this._id
    }

    //Propriedade Nome
    get name(){
        return this._name
    }

    set name(newName){
        this._name=newName
    }

    //Propriedade E-mail
    get email(){
        return this._email
    }

    set email(newEmail){
        this._email=newEmail
    }

    //Propriedade Password
    get password(){
        return this._password
    }

    set password(newPassword){
        this._password=newPassword
    }

    static getLastId(){
        let count = 0
        for (let i=0; i<users.length;i++){
            if(users[i].id>count){
                count = users[i].id
            }
        }
        return count+1

    }
}



window.onload = function(){
    mainFunc()
}





function mainFunc() {

    // Esconder opçoes de autenicação
    let optLogout = document.getElementById("optLogout")
    let optHi = document.getElementById("optHi")
    optLogout.style.display = "none"
    optHi.style.display = "none"



    let frmRegister = document.getElementById("frmRegister")

    frmRegister.addEventListener("submit", function(){
        console.log("REGISTADO!!!")
        strError=""

        // 1. Validar pass iguais

        let inputPassword1 = document.getElementById("inputPassword1")
        let inputPassword2 = document.getElementById("inputPassword2")

        if(inputPassword2.value != inputPassword1.value){
            strError = "As passwords têm de ser iguais!"     
        }

        // 2. Validar se o email já foi registado por outro user

        let inputEmail = document.getElementById("inputEmail")
        let userExist = false

        for(let i =0; i<users.length; i++){
            if (users[i].email == inputEmail.value){
                userExist=true
            }
        }

        if (userExist){
            strError += "\nEmail já existente"
        }

        // 3. criar o utilizador

        let newUser

        if(strError==""){
            let inputName = document.getElementById("inputName")
            newUser = new User(inputName.value, inputEmail.value, inputPassword1.value)

        }
        else{
            alert(strError)
            frmRegister.reset()
            inputName.focus()
        }

        // 4. adicionar utilizador ao array
        users.push(newUser)
        userId = newUser.id

        // 5. alertar de sucesso!
        alert("Registo efetuado com sucesso!")


        // 6. Fechar a modal
        $('#registoModal').modal('hide')

        // 7. Alterar navbar
        optLogout.style.display = "block"
        optHi.style.display = "block"

        let optLogin = document.getElementById("optLogin")
        let optRegister = document.getElementById("optRegister")

        optHi.innerHTML = "<a class='nav-link' href='#' data-toggle='modal' data-target='#registoModal'>Olá, "+newUser.name+"!</a>"
       

        event.preventDefault()
    })


    //SUBMISSÃO DE REGISTO
    optLogout.addEventListener("click", function(){
        

    })


}