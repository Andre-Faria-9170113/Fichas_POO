//MOSTRAR RESULTADO NA ARAEA DE TEXTO ALARGADA
let show = function (value) {
    let myTextArea = document.querySelector("#txtResults")
    myTextArea.innerHTML += value + "\n"
}

//ALINEA A  ######################################################

function funcA() {
    let s = prompt("Indique um string para determinar o seu nº de carateres: ")

    // let count = 0 ///////////////////////////////s SE N CONSIDERAR " " UM CARATER
    // for (i = 0; i < s.length; i++) {
    //     let s_split = s.split('')
    //     if (s_split[i] != " ") {
    //         count++
    //     }
    // }
    show("A --> " + s.length)
}

//ALINEA B  ######################################################

function funcB() {
    let nome = prompt("Nome: ")
    let apelido = prompt("Apelido: ")

    show("B --> " + apelido + ", " + nome)
}

//ALINEA C  ######################################################

function funcC() {
    let s = prompt("Indique um string para determinar o seu nº de vogais: ").toLocaleLowerCase()

    let count = 0

    for (i = 0; i < s.length; i++) {
        let s_split = s.split('')
        if (s_split[i] == 'a' || s_split[i] == 'e' || s_split[i] == 'i' || s_split[i] == 'o' || s_split[i] == 'u') {
            count++
        }
    }

    show("C --> " + count)
}

//ALINEA D  ######################################################

function funcD() {
    let s = prompt("Indique um string para determinar o seu nº de palavras: ")

    if (s.length == 0) {
        count = 0
    }
    if (s.length > 0) {
        count = 1
    }

    for (i = 0; i < s.length; i++) {
        let s_split = s.split('')
        if (s_split[i] == ' ' && s_split[i + 1] != ' ') {
            count++
        }
    }

    show("D --> " + count)
}

//ALINEA E  ######################################################

function funcE() {
    let s = prompt("Indique um string para inverter: ").split('').reverse()

    show("E --> " + s)
}

//ALINEA F  ######################################################

function funcF() {
    let s = prompt("Indique um string: ")
    let c = prompt("Indique um caratér p/ remover do string: ")

    if (c.length > 1) {
        show("F --> ERRO! Indique UM caratér.")
    }
    else {
        show("F --> " + s.split(c).join(''))
    }

}

//ALINEA G  ######################################################

function funcG() {
    let s = parseInt(prompt("Indique uma quantia de segundos: "))

    let h = Math.trunc(s / 3600) //HORAS
    let sec = s - (h * 3600)// SEGUNDOS

    let m = Math.trunc(sec / 60) //MINUTOS
    sec -= (m * 60)

    show("G --> " + s + "s = " + h + "h + " + m + "m + " + sec + "s")
}

//ALINEA H  ######################################################

function funcH() {
    let s = prompt("Indique um string a encriptar: ")
    let c = parseInt(prompt("Indique o nº de posições a avançar: "))

    let s_encriptado = ""


    let abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    for (i = 0; i < s.length; i++) {
        if (s[i] == " ") {
            s_encriptado += s[i]
        }
        for (j = 0; j < abc.length; j++) {
            if ((j + c) < abc.length) {
                if (s[i] == abc[j]) {
                    s_encriptado += abc[j + c]
                }

            }
            else {
                if (s[i] == abc[j]) {
                    let excesso = (j + c) - (abc.length)
                    s_encriptado += abc[excesso]
                }
            }
        }
    }


    show("H --> " + s_encriptado)
}