window.onload = function(){
    mainFunc()
}



function mainFunc(){

    let dataAtual = new Date()
    let dd = dataAtual.getDate()
    let mm = dataAtual.getMonth()+1
    let yyyy= dataAtual.getFullYear()

    let frmCorrida = document.getElementById("frmCorrida")
    
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
        var isValid = true

        
    })

    
   


    
    
    console.log(new_dataAtual)
    document.getElementById("txtNascimento").setAttribute("max", new_dataAtual)

    
}
