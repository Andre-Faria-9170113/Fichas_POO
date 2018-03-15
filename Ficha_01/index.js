//Alínea A
function funcA() {
    console.log("OLÁ MUNDO!")
}

//Alínea B
function funcB(){
    let name = prompt("Nome: ")
    if (name != null){
        console.log("OLÁ " +name+"!")
    }
    
}

//Alínea C
function funcC(){
let comprimento = prompt("Comprimento: ")
let largura = prompt("Largura: ")
let area= comprimento*largura
console.log(area)
}

//Alínea D
function funcD(){
let num1= parseInt(prompt("1º número: ")) 
let num2= parseInt(prompt("2º número: "))
let oper= prompt("Operador: ")
let result

switch(oper){
    case"+": result =num1+num2; break
    case"-": result =num1-num2; break
    case"x": result =num1*num2; break  
    case"/": result =num1/num2; break 
    default:console.log("Operador inválido!");break
}

if(result != undefined){
    console.log("O resultado é "+result+".")
}
else {
    console.log("Resultado inválido!")
}

}

//Alínea E
function funcE(){
let peso_input=prompt("Peso em Kg: ").replace(',','.')
let peso=parseFloat(peso_input)

let altura_input=prompt("Altura em metros: ").replace(',','.')
let altura=parseFloat(altura_input)

let imc = peso/(altura*altura)

if(imc < 18.5){
    console.log(imc.toFixed(2)+" --> Abaixo do peso")

}
else if(imc < 24.9){
    console.log(imc.toFixed(2)+" --> Peso normal")

}
else if(imc < 29.9){
    console.log(imc.toFixed(2)+" --> Sobrepeso")

}
else if(imc < 34.9){
    console.log(imc.toFixed(2)+" --> Obesidade grau I")

}
else if(imc < 39.9){
    console.log(imc.toFixed(2)+" --> Obesidade grau II")

}
else console.log(imc.toFixed(2)+" --> Obesidade grau III ou mórbida")
}

//Alínea F
function funcF(){
    let S = prompt("Texto que pretende imprimir: ")
    let N = parseInt(prompt("nº de vezes que pretende repetir o texto: ") )

    if(Number.isNaN(N)){  // Number.isNan(X) verifica if X Not A Number(NaN)
        console.log("Erro! Por favor digite um número válido.")
    }
    else{
        for(i=N; i>0; i--){
            console.log(S)

        }
    }
    
}

//Alínea G
function funcG(){
    let A = parseInt(prompt("1º número: "))
    let B = parseInt(prompt("2º número: "))

    if (Number.isNaN(A)||Number.isNaN(B)){
        console.log("Erro! Pelo menos um dos dados introduzidos não é um número válido.")
        
    }
    
    if (A== B){
        console.log("Erro! Digitou o mesmo número duas vezes.")
        
    }
    
    if (A> B){
        let range = A-B

        for(i=1; i<=range; i++){
            console.log(B+i)
        }

    }
    if (A< B){
        let range = B-A

        for(i=0; i<range; i++){
            console.log(A+i)
        }

    }
}
//Alínea H
function funcH(){
    
    let n = parseInt(prompt("Tabuada pretendida: "))
    if(Number.isNaN(n)){
        console.log("Erro! Por favor introduza um número válido.")
    }

    else{
        for(i=1; i<=10; i++){
            console.log(n+" X "+i+" = "+n*i)
        }
    } 
}

//Alínea I
function funcI(){
    let A = parseInt(prompt("1º número: "))
    let B = parseInt(prompt("2º número: "))

    if(Number.isNaN(A)||Number.isNaN(B)){
        console.log("Erro! Pelo menos um dos dados introduzidos não é um número válido.")
    }
    else if(A==B){
        console.log("Erro! Os dados introduzidos são idênticos.")
    }
    

    if(A>B){
        let soma = 0;
        for(i=B; i<=A; i++){
            if(i%3==0){
                soma = soma + i
            }
        }
        console.log(soma)
    }
    if(A<B){
        let soma = 0;
        for(i=A; i<=B; i++){
            if(i%3==0){
                soma = soma + i
            }
        }
        console.log(soma)
    }
}
//Alínea J
function funcJ(){
    let n = parseInt(prompt("Número que pretende verificar se é primo: "))

    if(Number.isNaN(n)){
        console.log("Erro! Não introduziu um número válido.")
    }

    let primo = true

    for(i=2; i<n; i++){
        if(n%i==0){
            primo=false
        }
    }

    if(n<=1){
        primo= false
    }

    if(primo==true){
        console.log("SIM")
    }
    else console.log("NÃO")
}
//Alínea K
function funcK(){
    let n = parseInt(prompt("Número que pretende calcular o fatorial: "))
    let fatorial_resultado = 1
    let fatorial = n+"!="

    if(Number.isNaN(n)){
        console.log("Erro! Não introduziu um número válido.")
    }
    else{
        for(i=n; i>0; i--){
            fatorial_resultado=fatorial_resultado *i      
            fatorial= fatorial+i+"x"  
        }
       
         
    
        fatorial = fatorial+"= "+fatorial_resultado
        fatorial= fatorial.replace("1x=","1=")
    
        console.log(fatorial)
    }
}
//Alínea L
function funcL(){
    let n = parseInt(prompt("Número que pretende verificar se é perfeito: "))

    if(Number.isNaN(n)){
        console.log("Erro! Não introduziu um número válido.")
    }
    else{
        let soma=0

        for(i=0; i<n; i++){
            if(n%i ==0){
                soma = soma+i
            }
        }

        if(soma == n){
            console.log("SIM")
        }
        else console.log("NÃO")
    }
}
//Alínea M
function funcM(){
    let n = parseInt(prompt("Indique o ano que pretende verificar se é bissexto: "))

    if(Number.isNaN(n)){
        console.log("Erro! Não introduziu um ano válido.")
    }
    else{
        if(n%400 == 0){
            console.log("SIM")
        }
        else if(n%4==0){
            if(n%100==0){
                console.log("NÃO")
            }
            else console.log("SIM")
        }
        else console.log("NÃO")
    }
}
//Alínea N
function funcN(){
    let n = parseInt(prompt("Indique o número que pretende verificar se é um palíndromo: "))

    if(Number.isNaN(n)){
        console.log("Erro! Não introduziu um número válido.")
    }
    else if(n<100||n>999){
        console.log("Erro! O número introduzido tem que se situar entre 100 e 999.")
    }

    else{
        let n_string = n.toString()

        let n_newString= n_string.split('').reverse().join('')
        
        if(n_string==n_newString){
            console.log("SIM")
        }
        else(console.log("NÃO"))

    }
}
//Alínea O
function funcO(){
    let tentativas = 5
    let random = Math.floor(Math.random()*100)+1
    
    

    for(i=5; i>0; i--){

        let n = parseInt(prompt("Indique o seu palpite: "))
        if(Number.isNaN(n)){
            console.log("Erro! Não introduziu um número válido.")
            break
        }

        if(n>random){
            console.log("PARA BAIXO")
            tentativas--
        }
        else if(n<random){
            console.log("PARA CIMA")
            tentativas--
        }
        else if(n== random){
            console.log("ADIVINHOU, PARABÉNS!")
            break
        }
       

        if(tentativas==0){
            console.log("PACIÊNCIA, JOGUE OUTRA VEZ!")
        }

    }
    
    
   
}

