let users = []
let trips = []
let userId=0

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

class Trip {
    constructor(name, country, link, date, description, score, userId) {
        this._id = Trip.getLastId() + 1
        this.name = name
        this.country = country
        this.link = link
        this.date = date
        this.description = description
        this.score = score
        this.userId = userId
    }

    // Propriedade ID
    get id() {
        return this._id
    }
   
    // Propriedade NAME
    get name() {
        return this._name
    }
   
    set name(newName) {
        this._name = newName
    }

    // Propriedade COUNTRY
    get country() {
        return this._country
    }
   
    set country(newCountry) {
        this._country = newCountry
    }

    // Propriedade LINK
    get link() {
        return this._link
    }
   
    set link(newLink) {
        this._link = newLink
    }

    // Propriedade DATE
    get date() {
        return this._date
    }
   
    set date(newDate) {
        this._date = newDate
    }

    // Propriedade DESCRIPTION
    get description() {
        return this._description
    }
   
    set description(newDescription) {
        this._description = newDescription
    }

    // Propriedade SCORE
    get score() {
        return this._score
    }
   
    set score(newScore) {
        this._score = newScore
    }

    // Propriedade USERID
    get userId() {
        return this._userId
    }
   
    set userId(newUserId) {
        this._userId = newUserId
    }

    static getLastId() {
        let lastId = 0
        if(trips.length != 0) {
            lastId = trips[trips.length-1].id
        }
        console.log("IDE: " + lastId)
        return lastId
        }


}

window.onload = function(){
    mainFunc()
}





function mainFunc() {

    //Injetar utilizadores e viagens via código
    let user01 = new User("Ricardo", "ricardo@mail.com",12345)
    let user02 = new User("Maria", "maria@mail.com",54321)
    users.push(user01); users.push(user02)
    let newTrip01 = new Trip("Madrid","Espanha","","22-04-2018","Madrid é bonita",8 ,1)
    let newTrip02 = new Trip("Roma","Itália","","12-03-2018","Roma é barulhenta",6 ,1)
    let newTrip03 = new Trip("Nova York","EUA","","22-04-2017","NY é muito grande",8 ,2)
    let newTrip04 = new Trip("Cairo","Egipto","","22-04-2002","Cairo é muito interessante",8 ,2)
    trips.push(newTrip01);trips.push(newTrip02);trips.push(newTrip03);trips.push(newTrip04)

    renderCatalog()
    // renderAuthors() //FALTA DEFINIR/////////////
    // renderCountries()//FALTA DEFINIR/////////////

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

    //OPÇÃO DE LOGIN
    optLogin.addEventListener("click", function(){
        frmLogin.addEventListener("submit",function(event){
             //  1. obter valores das caixas de texto
        let inputLoginEmail = document.getElementById("inputLoginEmail")
        let inputLoginPassword = document.getElementById("inputLoginPassword")

        // 2. Iterar sobre o array e verificar se o user existe
        let userExist = false
        for(var i=0; i<users.length;i++){
            if(users[i].email == inputLoginEmail.value && users[i].password == inputLoginPassword.value){
                userExist = true
                userId = users[i].id
            }
        }

        // 3. se sim, autenticar o user
        if(userExist== true){
            alert("Autenticação efetuada com sucesso!!")
            //fechar a modal
            $('#loginModal').modal('hide')
            //alterar navbar
            optLogout.style.display = "block"
            optHi.style.display = "block"
    
            let optLogin = document.getElementById("optLogin")
            let optRegister = document.getElementById("optRegister")
    
            optHi.innerHTML = "<a class='nav-link' href='#' data-toggle='modal' data-target='#loginModal'>Olá, "+newUser.name+"!</a>" //INCOMPLETO!!! //////////////////////////////////////////////////////
           
    
            event.preventDefault()
        }
        

        //4. caso n exista ou a pass esteja errada, 
        else{
            alert("Utilizador não-existente/ password errada.")
            frmLogin.reset()
            inputLoginEmail.focus()
            
         }

        })
       

    })
 //Função q vai alimentar o meu catálogo
 function renderCatalog(){
    // 1. iterar sobre o array de trips

    // 2. para cada trip vou definir uma card e compô-la com os dados do objeto

    let strHtmlCard =""
    for(let i =0; i<trips.length;i++){

        if(i%3 ==0){
            strHtmlCard += `<div class="row">`
        }
        strHtmlCard += `<div class="col-sm-4">
                <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="images/imgMadrid.jpg" alt="Card image cap">
                        <div class="card-body">
                          <h5 class="card-title">${trips[i].name}</h5>
                          <p class="card-text">${trips[i].description}</p>
                          <a href="#" class="btn btn-primary">Visualizar Viagem.    </a>
                        </div>
                      </div>
                </div>`
                //Fecha a linha
                if(i%3 == 2){
                    strHtmlCard += `</div>`
                }

           
    }
    let tripsCatalog = document.getElementById("tripsCatalog")
    tripsCatalog.innerHTML = strHtmlCard
 }

}
