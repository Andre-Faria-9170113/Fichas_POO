//Define a class que representa a personalidade
class Personality{
    //define um construtor que vai criar um objeto
    constructor(name,year,nationality, work, photo){
        this.name = name
        this.year = year
        this.nationality = nationality
        this.work = work
        this.photo = photo
    }

    //Nome da propriedade
    
    get name(){
        return this._name
    }
    set name(newName){
        this._name=newName
    }

    get year(){
        return this._year
    }
    set year(newYear){
        this._year=newYear
    }

    get nationality(){
        return this._nationality
    }
    set nationality(newNationality){
        this._nationality=newNationality
    }

    get work(){
        return this._work
    }
    set work(newWork){
        this._work=newWork
    }
    

    get photo(){
        return this._photo
    }
    set name(newPhoto){
        this._photo=newPhoto
    }
}

//Criar o Array que vai armazenar os objetos
let personalities = []

window.onload= function(){
    //impossibilitar a introdução de um ano > que o ano atual
    let maxYearOfBirth = document.getElementById("inputYear")
    let currentYear = new Date().getFullYear()
    maxYearOfBirth.setAttribute("max", currentYear)


    //adicionar listener ao form
    let frmPersonalities=document.getElementById("frmPersonalities")
    frmPersonalities.addEventListener("submit",function(event){

        //1. Get os values
        let name = document.getElementById("inputName").value
        let year = document.getElementById("inputYear").value
        let nationality = document.getElementById("inputNationality").value
        let work = document.getElementById("inputWork").value
        let photo = document.getElementById("inputPhoto").value

        //2. Criar um objeto com base nos dados recolhidos ^
        let newPersonality = new Personality(name, year, nationality, work, photo)

        //3. Adicionar o objeto a um Array
        personalities.push(newPersonality)

        //4. Atualizar a tabela com todos os elementos
       renderTable()

        

        //Impedir a submição dos dados e consequente refresh da página
        event.preventDefault()
    })

    function renderTable(){
        let tblPersonalities = document.getElementById("tblPersonalities")

        let strHtml = ""
        for (var i = 0; i < personalities.length; i++) {
            strHtml += "<tr>" +
            "<th>"+(i+1)+"</th>"+
            "<td>"+personalities[i].name +"</td>"+
            "<td>"+personalities[i].year +"</td>"+
            "<td>"+personalities[i].nationality +"</td>"+
            "<td>"+personalities[i].work +"</td>"+
            "<td>"+personalities[i].photo +"</td>"+
        
          +"</tr>"
            
        }
        strHtml += "</tbody>"
        tblPersonalities.innerHTML=strHtml

        
    }


}