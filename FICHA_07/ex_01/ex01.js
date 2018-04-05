window.onload= function(){
    mainFunc()
}

function mainFunc() {

    let frmLogin = document.getElementById("frmLogin")
    let btnLogin = document.getElementById("btnLogin")
    let txtEmail = document.getElementById("txtEmail")
    let txtPassword=document.getElementById("txtPassword")
   

    frmLogin.addEventListener("submit",function(event){
        
        alert(txtPassword.value +"#"+txtEmail.value)
        event.preventDefault()
    })

    frmLogin.addEventListener("reset",function(event){
        
        txtEmail.focus()
    })




}