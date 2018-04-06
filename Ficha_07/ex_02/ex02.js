window.onload = function(){
    mainFunc()
}



function mainFunc(){

    let dataAtual = new Date()
    let dd = dataAtual.getDate()
    let mm = dataAtual.getMonth()+1
    let yyyy= dataAtual.getFullYear()
    

    let frmCorrida = document.getElementById("frmCorrida")
    let txtTelemovel = document.getElementById("txtTelemovel")

    let txtCodigoPostal_01 = document.getElementById("txtCodigoPostal_01")
    let txtCodigoPostal_02= document.getElementById("txtCodigoPostal_02")
    let txtPassword = document.getElementById("txtPassword")
    let txtPasswordConfirm = document.getElementById("txtPasswordConfirm")
    let txtObservaçoes = document.getElementById("txtObservaçoes")
    
    let new_dataAtual=""
    if(mm >=10 && dd>=10){
        new_dataAtual = yyyy.toString()+"-"+mm.toString()+"-"+dd.toString()

    }
    else if(mm <10 && dd>=10){
        new_dataAtual = yyyy.toString()+"-0"+mm.toString()+"-"+dd.toString()

    }
    else if(mm <10 && dd<10){
        new_dataAtual = yyyy.toString()+"-0"+mm.toString()+"-0"+dd.toString()

    }

    frmCorrida.addEventListener("submit", function(event){
        
        
        if(isNaN(parseInt(txtTelemovel.value))){
            alert("ERRO: Nº de telemóvel inválido!")
           
            event.preventDefault()

        }
        else if(isNaN(parseInt(txtCodigoPostal_01.value))||isNaN(parseInt(txtCodigoPostal_02.value))){
            alert("ERRO: Nº de código postal inválido!")
           
            event.preventDefault()

        }
        else if(txtPassword.value != txtPasswordConfirm.value){
            alert("ERRO: Palavras passes não correspondem!")
           
            event.preventDefault()
        }
        else{
            alert("REGISTO EFETUADO COM SUCESSO")

            
        }

    })

    
    document.getElementById("txtNascimento").setAttribute("max", new_dataAtual)

    
}
