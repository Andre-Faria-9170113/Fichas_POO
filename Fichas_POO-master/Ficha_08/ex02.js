window.onload = function(){
    mainFunction()
}


function mainFunction(){
    //criar classe pro jogo
    class Game {
    constructor(nome, genero, plataformas, capa){
        this._id = Game.getLastId()+1
        this.nome = nome
        this.genero = genero
        this.plataformas=plataformas
        this.capa=capa
    }

    //gets e sets
    get nome(){
        return this._nome
    }

    set nome(newNome){
        this._nome = newNome
    }

    get genero(){
        return this._genero
    }

    set genero(newGenero){
        this._genero = newGenero
    }

    get plataformas(){
        return this._plataformas
    }

    set plataformas(newPlataformas){
        this._plataformas = newPlataformas
    }

    get capa(){
        return this._capa
    }

    set capa(newCapa){
        this._capa = newCapa
    }

    //GERAR O ID
    static getLastId(){
        let lastId= 0
        if(games.length > 0){
            lastId = games[games.length-1]._id
        }
        return lastId
    }
    
}

//Array que vai conter Games
 let games = []

//gameId sempre a 0 ao iniciar
let gameId = 0

//CRIAR REFERENCIAS AOS VARIOS ELEMENTOS
   //Campos
 let txtName = document.getElementById("txtName")
 let inputGenre = document.getElementById("inputGenre")
 let inputPlatforms = document.getElementsByClassName("form-check-input")
 let urlCover = document.getElementById("urlCover")
    
    //Botoes
 let btnSubmit = document.getElementById("btnSubmit")
 let btnReset = document.getElementById("btnReset")
 let btnFiltrar = document.getElementById("btnFiltrar")
 let btnRemover = document.getElementById("btnRemover")

    //Modais
 let modalGameName = document.getElementById("modalGameName")
 let modalGameGenre = document.getElementById("modalGameGenre")
 let modalGamePlatforms = document.getElementById("modalGamePlatforms")
 let modalGameCover = document.getElementById("modalGameCover")

    //Tabela
 let tblGames = document.getElementById("tblGames")

    //Form
 let frmGames = document.getElementById("frmGames")


//EVENT LISTENERS DO FORM
 frmGames.addEventListener("submit", function(event){
      //Validaçoes
        //Campos Plataforma
        let platforms = []
        let strError = ""

        for(let i=0; i<inputPlatforms.length;i++){
        if(inputPlatforms[i].checked){
         platforms.push(inputPlatforms[i].value)
            }
         }   

        if(platforms.length==0){
        strError = "Selecione, pelo menos, uma plataforma."
        }
    //Verificar se é uma atualização ou uma nova submiçao
     if(strError == ""){
        if (gameId == 0){
            let newGame = new Game(txtName.value, inputGenre.value, platforms, urlCover.value)
            games.push(newGame)
        }
        else{
            for (let i = 0; i < games.length; i++) {
                if(games[i]._id == gameId){
                    games[i].nome = txtName.value
                    games[i].genero = inputGenre.value
                    games[i].plataformas = platforms
                    games[i].capa = urlCover.value
                }
                
            }
            gameId = 0
        }    
     //Refresh á table
        renderTable()

     //Limpar tds os campos
        frmGames.reset()   
     }
     else{
         alert(strError)
     }
    
 event.preventDefault();
 })

 //EVENT LISTENER REMOVER TODOS
 btnRemover.addEventListener("click", function(){
     games = []
     renderTable()
     tblGames.innerHTML = ""

 })

 //EVENT LISTENER FILTRAR
 btnFiltrar.addEventListener("click",function(){
     renderTable(inputGenre.value)
 })

 //FUNCÇAO PRA ATUALIZAR A TABELA
function renderTable(genero = "") {
    let strHtml = "<thead class='thead-dark'><tr>" +
    "<th class='w-2'>#</th>" +
    "<th class='w-50'>Name</th>" +
    "<th class='w-20'>Genre</th>" +
    "<th class='w-20'>Platforms</th>"+  
    "<th class='w-8'>Actions</th>" +              
    "</tr>" + 
    "</thead><tbody>"

    for (var i = 0; i < games.length; i++) {
        if (genero==games[i].genero || genero=="") {
            strHtml += "<tr>" +
            "<td>" + games[i]._id + "</td>" +
            "<td>" + games[i].nome + "</td>" +
            "<td>" + games[i].genero + "</td>" +
            "<td>" + games[i].plataformas + "</td>" +
            "<td>" +
                "<a id='" + games[i]._id + "' class='edit'><i class='fas fa-edit'></i></a> " +
                "<a id='" + games[i]._id + "' class='remove'><i class='fas fa-trash-alt'></i></a> " +
                "<a id='" + games[i]._id + "' class='view' data-toggle='modal' data-target='#gameModal'><i class='fas fa-eye'></i></a>" +
            "</td>" +                         
            "</tr>" 
        }        
    }
    strHtml += "</tbody>"
    tblGames.innerHTML = strHtml

     //Agrupar todos os icons de remoçao na tabela
 let tdRemove = document.getElementsByClassName("remove") 
 //Adicionar listeners a cada um
  for(let i=0; i<tdRemove.length; i++){
      tdRemove[i].addEventListener("click", function(){
          let gameId = tdRemove[i].getAttribute("id")
          removeGameById(gameId)
          renderTable()
      })
  }

//FUNÇAO P/ REMOVER O JOGO ESPECEFICADO POR ID
function removeGameById(id){
 for(let i =0; i<games.length; i++){
     if(games[i]._id == id){
         games.splice(i, 1)
     }
 }
}

//Agrupar todos os icons de visualizaçao na tabela
let tdView = document.getElementsByClassName("view") 
 //Adicionar listeners a cada um
  for(let i=0; i<tdView.length; i++){
      tdView[i].addEventListener("click", function(){
          let gameId = tdView[i].getAttribute("id")
          viewGameById(gameId)
      })
  }


//FUNÇAO P/ VISUALIZAR A MODAL DO JOGO ESPECIFICADO POR ID
function viewGameById(id){
 for(let i =0; i<games.length; i++){
     if(games[i]._id == id){
         modalGameName.innerHTML= games[i].nome               
         modalGameGenre.innerHTML = games[i].genero
         modalGamePlatforms.innerHTML =  games[i].plataformas
         modalGameCover.setAttribute("src", games[i].capa)
     }
 }
}    

//Agrupar todos os icons de ediçao na tabela
let tdEdit = document.getElementsByClassName("edit") 
 //Adicionar listeners a cada um
  for(let i=0; i<tdEdit.length; i++){
      tdEdit[i].addEventListener("click", function(){
          gameId = tdEdit[i].getAttribute("id")
          editGameById(gameId)
      })
  }     
 }

//FUNÇAO P/ PREENCHER TDS OS CAMPOS COM OS DADOS DO JOGO COM O ID ESPECIFICADO
function editGameById(id){
    gameId = id
   for(let i =0; i<games.length; i++){
       if(games[i]._id == id){
           txtName.value = games[i]._nome
           inputGenre.value = games[i]._genero
           urlCover.value = games[i]._capa
               //Dar check ás plataformas do jogo
            for(let j=0; j<inputPlatforms.length;j++){
                if(games[i]._plataformas.indexOf(inputPlatforms[j].getAttribute("value"))!=-1){
                   inputPlatforms[j].checked = true
                }
                else{
                    inputPlatforms[j].checked = false
                }
            }   
       }
   }     
  }

}


