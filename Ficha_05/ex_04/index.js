
class Dado{
    constructor(){
        this._faces=6
        this.valorFace=1
    }

    //gets e sets pra valorFace
    get valorFace(){
        return this._valorFace
    }

    set valorFace(newValorFace){
        if(1<=newValorFace<=6){
            this._valorFace = newValorFace
        }
        else{
            console.log("Valor inválido para a face do dado")
        }
    }
    //Método rolar
    rolar(){
        this._valorFace = Math.floor((Math.random()*6)+1)
        return this._valorFace
    }
    //Método getQuantidadeFaces
    getQuantidadeFaces(){
        return this._faces
    }
}
newDado = new Dado()

console.log(newDado.rolar())
console.log(newDado.getQuantidadeFaces())