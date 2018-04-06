//SUBMETER RESULTADOS PARA A AREA DE TEXTO
let show = function (value) {
    let myTextArea = document.querySelector("#txtResults")
    myTextArea.innerHTML += value + "\n"
}

//ALINEA A  #####################################################################
let soma = 0
function funcA(numeros) {
    for (i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }

    let media = soma / numeros.length
    show("A --> " + media)
}

//ALINEA B  #####################################################################
function funcB(numeros) {

    numeros.sort(function (a, b) { return a - b })
    show("B --> " + numeros[0])

}

//ALINEA C  #####################################################################
function funcC(numeros, n) {
    let new_array = []
    for (i = 0; i < numeros.length; i++) {
        if (numeros[i] != n) {
            new_array.push(numeros[i])
        }
    }
    show("C --> " + new_array)
}

//ALINEA D  #####################################################################
function funcD(numeros) {
    let elementos_concatenados = ""
    for (i = 0; i < numeros.length; i++) {
        elementos_concatenados += numeros[i]
    }

    show("D --> "+elementos_concatenados)

}

//ALINEA E  #####################################################################
function funcE(cores) {
    show("E--> "+cores.sort())
}

//ALINEA F  #####################################################################
function funcF(cores) {
   show("F --> "+cores.sort().reverse())
}

//ALINEA G  #####################################################################
function funcG(cores) {
    let maior =""
    for(i=0; i<cores.length;i++){
        if(cores[i].length>maior.length){
            maior = cores[i]
        }
    }
    show("G --> "+maior)
 }

 //ALINEA H  #####################################################################
function funcH(cores, s) {
  let ocurrences = 0
  for(i=0; i<cores.length;i++){
      if(cores[i]==s){
          ocurrences++
      }
  }
    show("H --> "+ocurrences)
 }

 //ALINEA I  #####################################################################
function funcI(passwords) {
    if(passwords[0]==passwords[1]){
        show("I --> 1")
    }
    if(passwords[0]!=passwords[1]){
        show("I --> 0")
    }    
   }

//ALINEA J  #####################################################################
function funcJ(cores, p) {
    
    
    show("J --> "+cores[p-1]) //pois é zero-based
   }

//ALINEA K  #####################################################################
function funcK(n) {
    let positivos = []

    for(i=1; i<n; i++){
        positivos.push(i)
    }
    
    show("K --> "+positivos)
   }   

//ALINEA L  #####################################################################
function funcL(numeros) {
    let novoArray = []

    for(i=0; i<numeros.length;i++){
        if (numeros[i]%2==0){
            novoArray.push(numeros[i])
        }
    }

    show("L --> "+novoArray)
   }   

//ALINEA M  #####################################################################
function funcM(numeros) {
    

    for(i=0; i<numeros.length;i++){
       numeros[i]=parseInt(numeros[i])+1
    }

    show("M --> "+numeros)
   }
   
//ALINEA N  #####################################################################
function funcN(array01,array02) {
    let novoArray =[]

    if(array01.length>=array02.length){
        for(i=0; i<array01.length;i++){
            if(array02[i]==undefined){
                array02[i]=0
            }
            novoArray.push(parseInt(array01[i])+parseInt(array02[i]))
        }
    }
    if(array01.length<array02.length){
        for(i=0; i<array02.length;i++){
            if(array01[i]==undefined){
                array01[i]=0
            }
            novoArray.push(parseInt(array01[i])+parseInt(array02[i]))
        }
    }

    show("N --> "+novoArray)
   }   