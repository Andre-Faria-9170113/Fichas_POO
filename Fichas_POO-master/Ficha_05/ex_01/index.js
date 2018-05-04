
class Retangulo {
    constructor (largura=1, altura=1, cor){
        this.largura = largura
        this.altura = altura
        this._cor = "branco"
    }

   
   
    
    //Propriedade Largura
    get largura(){
        return this._largura
    }

    set largura(newLargura){
        this._largura=newLargura
    }
   //Propriedade Altura
    get altura(){
        return this._altura
    }

    set altura(newAltura){
        this._altura=newAltura
    }  

    //Propriedade Cor
    get cor(){
        return this._cor
    }

    //Parâmetro getArea
    getArea (){
        return this._altura*this._largura
    }
    //Parâmetro getPerimetro
    getPerimetro (){
        return this._altura*2+this._largura*2
    }


}

//Novas instâncias de Retangulo
let retanguloDefault = new Retangulo()
let retanguloCustom = new Retangulo(10, 5)

//Imprimir pra consola
console.log("Retangulo Padrão:\nLargura="+retanguloDefault.largura+"\nAltura="+retanguloDefault.altura+"\nCor="+retanguloDefault.cor+"\nÁrea="+retanguloDefault.getArea()+"\nPerímetro="+retanguloDefault.getPerimetro())
console.log("Retangulo com as medidas especificadas:\nLargura="+retanguloCustom.largura+"\nAltura="+retanguloCustom.altura+"\nCor="+retanguloCustom.cor+"\nÁrea="+retanguloCustom.getArea()+"\nPerímetro="+retanguloCustom.getPerimetro())