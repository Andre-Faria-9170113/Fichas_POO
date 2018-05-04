
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
    show("a1 -->")

    for (let i in student) {
        show(i)
    }
}

// A2 #######################

function funcA2() {
    show("a2 --> \nAntes: ")
    for (let i in student) {
        show(i + "= " + student[i])
    }

    delete student.grade
    show("\nDepois: ")
    for (let i in student) {
        show(i + "= " + student[i])
    }
}

// A3 #######################

function funcA3() {
    let count = 0
    for (let i in student) {
        count++
    }
    show("a3 --> " + count)
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

function funcB1() {
    let n = prompt("Name: ")
    let g = parseInt(prompt("Grade: "))

    if (Number.isNaN(g)) {
        show("b1 -- > ERRO! Não introduziu uma nota válida.")
    }
    else {
        grades.push({ name: n, grade: g })


        show("b1 --> ")
        for (let i in grades) {
            show("Name: " + grades[i].name + "; Grade: " + grades[i].grade)
        }
    }
}

// B2 #######################


function funcB2() {

    let count = 0
    let soma = 0

    for (let i in grades) {
        soma += grades[i].grade
        count++
    }
    let average = soma / count

    show("b2 --> " + average.toFixed(2))

}

// B3 #######################

function funcB3() {
    show("b3 --> Estudantes com positiva:")
    for (let i in grades) {
        if (grades[i].grade >= 10) {
            show(grades[i].name)
        }
    }
}

// ALINEA C #############################################
function Car(marca, matricula, cor, deposito_atual, combustivel) {
    this.marca = marca
    this.matricula = matricula
    this.cor = cor
    this.deposito_atual = deposito_atual
    this.combustivel = combustivel
}
let carros = []

// C1 #######################
function funcC1() {



    let ford = new Car("Ford", "91-GH-15", "verde", 40, "Gasóleo")
    let opel = new Car("Opel", "23-AB-23", "branco", 50, "Gasolina")

    carros.push(ford)
    carros.push(opel)

    show("c1 -->")

    for (let i in carros) {
        show("Marca: " + carros[i].marca + "\nMatrícula: " + carros[i].matricula + "\nCor: " + carros[i].cor + "\nDepósito atual: " + carros[i].deposito_atual + "\nCombustível: " + carros[i].combustivel + "\n\n")
    }
}

// C2 #######################
function funcC2() {
    let carroSelect = prompt("Matrícula do carro: ")
    let corNova = prompt("Nova cor: ")
    let count = 0

    show("c2 -->")

    for (let i in carros) {
        if (carroSelect == carros[i].matricula) {
            carros[i].cor = corNova
            count++
        }
    }


    if (count == 0) {
        show("ERRO! Nenhum carros com essa matrícula registado.")
    }

    else {
        for (let i in carros) {
            show("Marca: " + carros[i].marca + "\nMatrícula: " + carros[i].matricula + "\nCor: " + carros[i].cor + "\nDepósito atual: " + carros[i].deposito_atual + "\nCombustível: " + carros[i].combustivel + "\n\n")
        }
    }
}

// C3 #######################

function funcC3() {

    let carroSelect = prompt("Matrícula do carro: ")

    let count = 0

    show("c3 -->")

    for (let i in carros) {
        if (carroSelect == carros[i].matricula) {
            carros[i].km = parseInt(prompt("Km percorridos: "))
            carros[i].deposito_atual -= (carros[i].km * 5) / 100
            count++
        }
    }


    if (count == 0) {
        show("ERRO! Nenhum carros com essa matrícula registado.")
    }

    else {
        for (let i in carros) {
            show("Marca: " + carros[i].marca + "\nMatrícula: " + carros[i].matricula + "\nCor: " + carros[i].cor + "\nDepósito atual: " + carros[i].deposito_atual + "\nCombustível: " + carros[i].combustivel + "\n\n")
        }
    }
}

// ALINEA D #############################################

function funcD() {

    function Cylinder(Raio, Altura) {
        this.Raio = Raio
        this.Altura = Altura
        this.Volume = function () {
            return 3.14 * this.Raio * this.Raio * this.Altura

        }

    }
    let cyl = new Cylinder(7, 4)
    console.log('volume =', cyl.Volume().toFixed(4))
}

// ALINEA E #############################################

function funcE() {


    function Circle(Raio) {
        // let Raio = parseInt(prompt("Raio do circulo: "))
        this.perimeter = function () {
            return 2 * 3.14 * Raio
        }
        this.area = function () {
            return 3.14 * Raio * Raio
        }
    }
    let c = new Circle(parseInt(prompt("Raio do circulo: ")))
    console.log('Area =', c.area().toFixed(2))
    console.log('perimeter =', c.perimeter().toFixed(2))

}

// ALINEA F #############################################

function funcF() {

    String.prototype.initEnd = function () {
        let string_reverse = []
        for (let i in this) {
            string_reverse.push(this[this.length - i - 1])
        }
        return "Primeiro char: " + this[0] + "  Segundo char: " + string_reverse[0]      
    }
    console.log("dog".initEnd())
}
