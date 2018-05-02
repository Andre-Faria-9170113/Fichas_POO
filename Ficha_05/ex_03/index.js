//Constantes velocidade
const BAIXA = 1
const MEDIA= 2
const ALTA = 3



class Ventoinha{
    constructor(velocidade=BAIXA, estado=false){
        this.velocidade=velocidade
        this.estado=estado
    }

    //gets e sets

    //Velocidade
    get velocidade(){
        return this._velocidade
    }
    set velocidade(newVelocidade){
        this._velocidade = newVelocidade
    }

    //Estado
    get estado(){
        return this._estado
    }
    set estado(newEstado){
        this._estado = newEstado
    }

    //metodo toString
    toString(){
        if (this._estado==true){
            return "A ventoinha está liga, a funcionar à velociade "+this.velocidade+"."

        }
        else{
            return"A ventoinha está desligada."
        }
    }
}

// Duas novas instancias de Ventoinha
let newVentoinha01 = new Ventoinha()
let newVentoinha02 = new Ventoinha()

//Ligar a segunda
newVentoinha02.estado=true
//Alterar a velocidade pra MEDIA da segunda
newVentoinha02.velocidade= MEDIA


console.log(newVentoinha01.toString())
console.log(newVentoinha02.toString())