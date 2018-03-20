
//MOSTRAR RESULTADO NA ARAEA DE TEXTO ALARGADA
let show = function (value) {
    let myTextArea = document.querySelector("#txtResults")
    myTextArea.innerHTML += value + "\n"
}

// ALINEA A #############################################
let student = { 
  name: "David Silva", 
  course: "POO", 
  grade: 12  
} 
// A1 #######################

function funcA1() {
    show("a1 -->\n name: "+student.name+"\n course: "+student.course+"\n grade: "+student.grade)
}

// A2 #######################

function funcA2(){
    show("a2 --> \nAntes: ")
    for(let i in student){
        show(i+"= "+student[i])
    }

    delete student.grade
    show("\nDepois: ")
    for(let i in student){
        show(i+"= "+student[i])
    }
}

// A3 #######################

function funcA3(){
    let count = 0
for (let i in student){
    count++
}
show("a3 --> "+count)
}

// ALINEA B #############################################

let grades = [  
   { 
       name: 'Rui', 
       grade: 8 
   }, 
   { 
       name: 'Ana', 
       grade: 12 
   }, 
   { 
       name: 'Carla', 
       grade: 14 
   }] 

// B1 #######################

function funcB1(){
let n = prompt("Name: ")
let g =parseInt(prompt("Grade: ")) 

if(Number.isNaN(g)){
    show("b1 -- > ERRO! Não introduziu uma nota válida.")
}
else{
    grades.push({name: n, grade: g})


show("b1 --> ")
for(let i in grades){
    show("Name: "+grades[i].name+"; Grade: "+grades[i].grade)
}
}
}

// B2 #######################


function funcB2(){

 let count = 0
 let soma = 0
 
 for(let i in grades){
        soma+= grades[i].grade
        count++
    }
 let average = soma/count    

    show("b2 --> "+average.toFixed(2))

}

// B3 #######################

function funcB3(){
    show("b3 --> Estudantes com positiva:")
    for(let i in grades){
        if(grades[i].grade>=10){
            show(grades[i].name)
        }
    }
}

// ALINEA C #############################################
function Car(marca, matricula, cor, deposito_atual, combustivel){
    this.marca= marca
    this.matricula=matricula
    this.cor=cor
    this.deposito_atual=deposito_atual
    this.combustivel=combustivel
}
let carros =[]

// C1 #######################
function funcC1(){

 

   let ford= new Car("Ford", "91-GH-15", "verde", 40, "Gasóleo")
    let opel = new Car("Opel", "23-AB-23", "branco", 50, "Gasolina")

  carros.push(ford)
  carros.push(opel)

  show("c1 -->")
   
  for(let i in carros){
      show("Marca: "+carros[i].marca+"\nMatrícula: "+carros[i].matricula+"\nCor: "+carros[i].cor+"\nDepósito atual: "+carros[i].deposito_atual+"\nCombustível: "+carros[i].combustivel+"\n\n")
  }
}

// C2 #######################
function funcC2(){
    let carroSelect = prompt("Matrícula do carro: ")
    let corNova = prompt("Nova cor: ")
    let count = 0

    show("c2 -->")

    for(let i in carros){
        if(carroSelect==carros[i].matricula){
            carros[i].cor = corNova
            count++
        }    
    }
    
    
    if(count== 0){
        show("ERRO! Nenhum carros com essa matrícula registado.")
    }
    
    else{
        for(let i in carros){
            show("Marca: "+carros[i].marca+"\nMatrícula: "+carros[i].matricula+"\nCor: "+carros[i].cor+"\nDepósito atual: "+carros[i].deposito_atual+"\nCombustível: "+carros[i].combustivel+"\n\n")
        }
    }


}
