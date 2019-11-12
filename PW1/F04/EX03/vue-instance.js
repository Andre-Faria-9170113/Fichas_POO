const vm = new Vue({
    el: "#intro",
    data: {
        teams: [
            { name: "benfica", year: 1910, location: "Lisboa" },
            { name: "porto", year: 1912, location: "Porto" },
            { name: "sporting", year: 1914, location: "Lisboa" }
        ],
        location: ""
    },
    methods: {
        addTeam: function (n, y, l) {
            var exists = false
            for (let i = 0; i < this.teams.length; i++) {
                if (this.teams[i].name == n) {
                    exists = true;
                }
            }
            if (exists == false) {
                this.teams.push({ name: n, year: y, location: l })
            }

        },
        filterTeams: function (l) {
            this.location = l
        }
    },
    computed: {
        listFilterTeams() {
            if (this.location != "") {
                return this.teams.filter(
                    (team) => team.location === this.location
                )
            }
            else{
                return this.teams
            }
        }
    }
})