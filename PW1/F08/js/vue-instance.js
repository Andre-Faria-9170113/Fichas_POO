const vm = new Vue({
    el: "#intro",
    data: {
        castles: [{ creationDate: 1900, id: 1, name: "Castelo de Bragança", photo: "https://upload.wikimedia.org/wikipedia/commons/1/15/Castelo_de_Bragan%C3%A7a.jpg" },
        { creationDate: 1950, id: 2, name: "Castelo de Almourol", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Almourol_034.jpg/300px-Almourol_034.jpg" },
        { creationDate: 1935, id: 3, name: "Castelo de Marvão", photo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/CastillodeMarvao.jpg" },
        { creationDate: 1990, id: 4, name: "Castelo de Montalegre", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Castelo_montalegre.JPG/300px-Castelo_montalegre.JPG" },
        { creationDate: 1750, id: 5, name: "Castelo de Sortelha", photo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/SortelhaCastle.jpg" },
        { creationDate: 1800, id: 6, name: "Castelo de Arraiolos", photo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Arraiolos1.jpg" },
        { creationDate: 1860, id: 7, name: "Castelo de Santa Maria da Feira", photo: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Castelo_da_Feira.jpg" },
        { creationDate: 1930, id: 8, name: "Castelo de Lindoso", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/LindosoCastle3.jpg/275px-LindosoCastle3.jpg" },
        { creationDate: 1230, id: 9, name: "Castelo dos Mouros", photo: "http://www.sintra-portugal.com/Images/400px/castelo-dos-mouros-sintra.jpg" },
        { creationDate: 1930, id: 10, name: "Castelo de Guimarães", photo: "https://www.guimaraesturismo.com/imgcrop/uploads/geo_article/image/56/20081119151046327558_1_510_300.jpg" }
        ],
        castleName: "",
        castlePhoto: "",
        form: {
            name: "",
            link: "",
            editId: 0,
            editName: "",
            editLink: "",
            filterName: ""
        }
    },
    methods: {
        openNewForm: function () {
            document.getElementById("dialogAdd").showModal()
        },
        addCastle: function () {
            this.castles.push({
                id: this.getLastId() + 1,
                name: this.form.name,
                photo: this.form.link
            })

            this.closeDialogAdd()
        },
        closeDialogAdd: function () {
            document.getElementById("dialogAdd").close()
        },
        editCastle: function (id) {
            let index = this.castles.findIndex(
                castle => castle.id === id
            )

            this.castleName = this.castles[index].name
            this.form.name = this.castles[index].name
            this.form.link = this.castles[index].photo
            this.form.editId = this.castles[index].id


            document.getElementById("dialogEdit").showModal()
        },
        closeDialogEdit: function () {
            document.getElementById("dialogEdit").close()
        },
        changeCastle: function (id) {
            let index = this.castles.findIndex(
                castle => castle.id === id
            )
            this.castles[index].name = this.form.name
            this.castles[index].photo = this.form.link
            console.log(`changed Id ${id}`)
            document.getElementById("dialogEdit").close()
        },
        viewCastle: function (id) {
            let index = this.castles.findIndex(
                castle => castle.id === id
            )

            this.castleName = this.castles[index].name
            this.castlePhoto = this.castles[index].photo

            document.getElementById("dialogView").showModal()
        },
        closeDialogView: function () {
            document.getElementById("dialogView").close()
        },
        getLastId: function () {
            return this.castles[this.castles.length - 1].id
        },
        removeCastle: function (id) {
            let index = this.castles.findIndex(
                castle => castle.id === id
            )
            if (confirm(`Deseja eliminar o seguinte castelo: ${this.castles[index].name}?`)) {
                this.castles = this.castles.filter(
                    castle => castle.id !== this.castles[index].id
                )
            }
        },
        sortByName: function () {
            this.castles.sort(this.compareNames)
        },
        compareNames: function (a, b) {
            if (a.name > b.name) return 1
            if (a.name < b.name) return -1
            else return 0

        },
        ex1: function () {
            //JAVARDICE
            // for(let i in this.castles){
            //     this.castles[i].name=this.castles[i].name.replace("Castelo ","")
            // }
            this.castles = this.castles.map(
                castle => {
                    castle.name = castle.name.replace("Castelo ", "")
                    return castle
                }
            )
        },
        ex2: function () {
            const avgDate = this.castles.reduce(
                (sum, cur) => sum + cur.creationDate, 0) / this.castles.length
            console.log(avgDate)
        },
        ex3: function () {
            console.log(this.castles.some(
                castle => castle.name.includes("Marvão")
            ))
        },
        ex4: function () {
            console.log(this.castles.filter(
                castle => castle.name.toLowerCase().split('')[0] == 'a'
            ))
        },
        ex5: function () {
            console.log(this.castles.every(
                castle => castle.photo && castle.photo != ""
            ))
        },
        ex6: function () {
            // this.castles.fill(
            //   "http: //nofoto.jpg", this.castles.length - 3
            // )
            //POR IMPLEMENTAR
            this.castles = this.castles.map(
                castle => {
                    if (this.castles.indexOf(castle) >= this.castles.length - 3) {
                        castle.photo = "http: //nofoto.jpg"
                    }
                    return castle
                }
            )
        },
        ex7: function () {
            console.log(this.castles.find(
                castle => castle.name === "Castelo de Santa Maria da Feira"
            ))
        },
        ex8: function () {
            console.log(this.castles.findIndex(
                castle => castle.name === "Castelo de Arraiolos"
            ))

        },
        extra1: function () {
            this.castles = this.castles.filter(
                castle => castle.name.includes('-')
            )
        },
        extra2: function () {
            this.castles = this.castles.filter(
                castle => castle.creationDate >= 1950
            )
        },
        extra3: function () {
            this.castles = this.castles.map(
                castle => {
                    if (castle.creationDate < 1900) {
                        castle.photo = ""
                    }
                    return castle
                }
            )
        },
        extra4: function () {
            const incrementsYear = 5
            console.log(this.castles.map(
                (castle) => {
                    if (castle.name.toLowerCase().startsWith("a") ||
                        castle.name.toLowerCase().startsWith("e") ||
                        castle.name.toLowerCase().startsWith("i") ||
                        castle.name.toLowerCase().startsWith("o") ||
                        castle.name.toLowerCase().startsWith("u")) {
                        castle.creationDate += incrementsYear
                    }
                    return castle
                }
            ))
        },

    },
    computed: {
        castleNameFilter: function () {
            return this.castles.filter(
                castle => castle.name.toLowerCase().includes(this.form.filterName)
            )
        }
    }
})

