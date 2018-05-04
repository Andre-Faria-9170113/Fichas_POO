class Pais{
    constructor(nome, populaçao, area){
        this._nome = nome
        this._populaçao = populaçao
        this._area = area
    }

    //gets e sets
    //Nome
    get nome(){
        return this._nome
    }
    set nome (newNome){
        this._nome = newNome
    }
    //População
    get populaçao(){
        return this._populaçao
    }
    set populaçao (newPopulaçao){
        this._populaçao = newPopulaçao
    }
    //Área
    get area(){
        return this._area
    }
    set nome (newArea){
        this._area = newArea
    }

    //Metodo getMaiorArea
  static  getMaiorArea(){
        let maiorArea = 0
        let paisMaiorArea = 0
        for(let i = 0; i<paises.length; i++){
            if(paises[i].area>maiorArea){
                maiorArea = paises[i].area
                paisMaiorArea = i
            }
        }
        return paises[paisMaiorArea].nome
    }

    //Metodo getMaisPopulado
  static  getMaisPopulado(){
        let maiorPop = 0
        let paisMaiorPop = 0
        for(let i = 0; i<paises.length; i++){
            if(paises[i].populaçao>maiorPop){
                maiorPop = paises[i].populaçao
                paisMaiorPop = i
            }
        }
        return paises[paisMaiorPop].nome
    }

    //Metodo getMaiorDensidadePop
  static  getMaiorDensidadePop(){
        let maiorDensidadePop = 0
        let paisMaiorDensidadePop = 0
        for(let i = 0; i<paises.length; i++){
            if(paises[i].populaçao/paises[i].area>maiorDensidadePop){
                maiorDensidadePop = paises[i].populaçao/paises[i].area
                paisMaiorDensidadePop = i
            }
        }
        return paises[paisMaiorDensidadePop].nome
    } 
    

   
}
 //Criar 5 instancias de Pais
 pais01 = new Pais("Portugal", 10, 111)
 pais02 = new Pais("Espanha", 30, 222)
 pais03= new Pais("França", 40, 333)
 pais04= new Pais("China", 999, 444)
 pais05= new Pais("Rússia", 250, 999)

 //Guardar todas elas num array
 let paises = []
 
 paises.push(pais01,pais02,pais03,pais04,pais05)

 //Imprimir o array por ordem crescente do nome do país
 let nomesPaises = []

 for(let i=0; i< paises.length;i++){
     nomesPaises.push(paises[i].nome)
 }

 nomesPaises.sort()

 for (let i=0; i< nomesPaises.length; i++){
     console.log(nomesPaises[i])
 }
