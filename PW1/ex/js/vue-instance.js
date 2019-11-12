const vm = new Vue({
    el: "#intro",
    data: {
        name:"",
        age:16,
        gender:"Feminino",
        degree:"",
        languages:[],
        motivation:""

    },
    methods: {
        generateMsg: function () {

            var msg = "O candidato " + this.name + " ,com " + this.age + " anos, do sexo " + this.gender + " "


            if (this.degree == "Sem Licenciatura") {
                msg += "não possui qualquer licenciatura."
            }
            else {
                msg+= "possui uma licensiatura em " + this.degree + "."
            }

            if (this.languages.length == 0) {
                msg+= "O candidato não domina nenhuma linguagem de programação. A sua motivação para esta candidatura é " + this.motivation + "."
            }
            else {
                msg+= "O candidato domina as linguagens: "
                for (let i = 0; i < this.languages.length; i++) {
                    if(i < this.languages.length -1){
                        msg+= this.languages[i] + ", "
                    }
                    else{
                       msg+= this.languages[i] + ". "
                    }
                    
                }
                 msg+="A sua motivação para esta candidatura é "+this.motivation+". "
                
            }
            
            var score = 0

            if(this.degree != "Sem Licenciatura"){
                score += 5
            }

            if(16<= this.age && this.age < 22){
                score +=3
            }
            else if(22 <= this.age && this.age < 35){
                score +=5
            }
            else {
                score++
            }

           score += this.languages.length *2

            msg+= "\nPontuação final: "+score

            //console.log(msg)
            var dialog = document.getElementById("dialogReport")
            dialog.innerText = msg
            dialog.showModal()
        }
    },
    computed: {

    }
})