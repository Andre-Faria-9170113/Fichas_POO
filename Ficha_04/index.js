
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
let g =prompt("Grade: ")

grades.push({name: n, grade: g})

}
