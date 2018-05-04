class Circulo{
    constructor(raio){
        this.raio = raio
    }
    //get e set para o raio
    get raio(){
        return this._raio
    }
    set raio(newRaio){
        this._raio = newRaio
    }
    
    //metodo getArea
    getArea(){
        return 3.14*this._raio*this._raio
    }
    //metodo getCircunferencia
    getCircunferencia(){
        return 2*3.14*this._raio
    }
    //metodo aumentarRaio
    aumentarRaio(){
        let raioEscala = parseInt(prompt("aumentar o raio por X%:\nX="))
        this._raio += raioEscala/100*this._raio
        return this._raio
    }
}
//Pedir valor do raio
let raioInput = parseInt(prompt("Valor do raio:"))

//Criar um novo Circulo com o raio especificado
let newCirculo = new Circulo(raioInput)

//Imrpimir pra consoloa raio, area e circunferencia
console.log("Raio="+newCirculo.raio+"\nÁrea="+newCirculo.getArea()+"\nCircunferência="+newCirculo.getCircunferencia())

//Pedir ao user percentagem pra aumentar o raio
newCirculo.aumentarRaio()

//Reimprimir tds as variaveis
console.log("\n\nCirculo alterado:\nRaio="+newCirculo.raio+"\nÁrea="+newCirculo.getArea()+"\nCircunferência="+newCirculo.getCircunferencia())


