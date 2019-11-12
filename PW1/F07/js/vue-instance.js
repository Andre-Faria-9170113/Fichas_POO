const vm = new Vue({
    el: "#myApp",
    data: {
        id: 0,
        travels: [],
        continent: "all",
        country: "",
        cities: "",
        description: "",
        startDate: "",
        returnDate: "",
        type: "holidays",
        link: "",
        filterContinent: "",
        filterStartDate: "",
        filterReturnDate: "",
        filterType: "all"
    },
    created() {
        if (localStorage.getItem("travels")) {
            this.travels =
                JSON.parse(localStorage.getItem("travels"))
        }
    },
    destroyed() {
        localStorage.setItem("travels", JSON.stringify(this.travels))
    },
    methods: {
        addTravel: function () {
            this.travels.push({
                id: this.getLastID() + 1,
                continent: this.continent,
                country: this.country,
                cities: this.cities,
                description: this.description,
                startDate: new Date(this.startDate),
                returnDate: new Date(this.returnDate),
                type: this.type,
                link: this.link,
            })
        },
        removeTravel: function (id) {
            if (confirm("Deseja mesmo remover esta viagem?")) {
                this.travels = this.travels.filter(
                    travel => travel.id !== id
                )
            }
        },
        editTravel: function (id) {
            const index = this.travels.findIndex(
                travel => travel.id === id
            )
            const oldCountry = this.travels[index].country
            this.travels[index].country = prompt("Novo país?", this.travels[index].country)
            if (this.travels[index].country.length === 0 || this.travels[index].country === null) {
                this.travels[index].country = oldCountry
            }
        },
        getLastID() {
            if (this.travels.length === 0) {
                return 0
            }
            else {
                return (this.travels[this.travels.length - 1].id)
            }
        },
        sortByCountry() {
            this.travels = this.travels.sort(this.compareCountry)
        },
        compareCountry(a, b) {
            if (a.country > b.country) return 1
            if (a.country < b.country) return -1
            else return 0
        },
        sortByDate() {
            this.travels = this.travels.sort(this.compareDate)
        },
        compareDate(a, b) {
            if (a.startDate > b.startDate) return 1
            if (a.startDate < b.startDate) return -1
            else return 0
        }
    },
    computed: {
        filteredTravels() {
            return (this.travels.filter(
                travel => {
                    let continentResult = true;
                    let typeResult = true;
                    let dateResult = true;

                    //FILTER CONTINENT
                    if (this.filterContinent != "" && this.filterContinent != "all") {
                        continentResult = travel.continent === this.filterContinent
                    }

                    //FILTER DATES
                    if (this.filterReturnDate != "" && this.filterStartDate != "") {
                        dateResult =
                            travel.startDate >= new Date(this.filterStartDate) &&
                            travel.returnDate <= new Date(this.filterReturnDate)
                    }

                    //FILTER TYPE
                    if (this.filterType != "all") {
                        typeResult =
                            travel.type === this.filterType
                    }

                    return continentResult && typeResult && dateResult

                }
            ))
        }
    }
})

window.onunload = function(){
    vm.$destroy()
}