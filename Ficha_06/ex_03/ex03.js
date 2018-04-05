let filmes = []

class Filme {
    constructor(titulo, ano, genero){
        this.id = Filme.generateID()
        this.titulo = titulo
        this.ano = ano
        this.genero = genero
    }

    get titulo(){       // get/set pra titulo
        return this.titulo
    }

    set titulo(novoTitulo){
        this.titulo = novoTitulo
    }

    get ano(){       // get/set pra ano
        return this.ano
    }

    set ano(novoAno){
        this.ano = novoAno
    }

    get genero(){       // get/set pra genero
        return this.genero
    }

    set genero(novoGenero){
        this.genero = novoGenero
    }

    static generateID() {
        let count = 0
        for (i=0; i<filmes.length;i++){
            if(filmes[i].id>count){
                count = filmes[i].id
            }
        }
        return count+1
    }
    
}

window.onload = function(){
    mainFunction()
}

function mainFunction(){

    let frmFilmes= document.getElementById("frmFilmes")

    let titulo= document.getElementById("titulo")
    let ano = document.getElementById("ano")
    let genero = document.getElementById("genero")

    //event listener pro botao de submeter
    frmFilmes.addEventListener("submit", function(event){
        let novoFilme = new Filme(titulo.value, ano.value, genero.value)

        filmes.push(novoFilme)

        tabelaUpdate()

        event.preventDefault()
    })


    function tabelaUpdate() {
        let tblFilmes = document.getElementById("tblFilmes")
        let str ="<thead><tr><th>TÍTULO</th><th>ANO</th><th>GÉNERO</th><th>ACÕES</th></tr></thead><tbody>"
        for(i=0; i<filmes.length;i++){
            str += "<tr>"        
            str += "<td>" + filmes[i].titulo + "</td>"
            str += "<td>" + filmes[i].ano + "</td>"
            str += "<td>" + filmes[i].genero + "</td>"
            str +="</tr>"
        }
        str += "<tbody>"
        tblFilmes.innerHTML = str
    }
}