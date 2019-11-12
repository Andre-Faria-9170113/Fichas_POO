const vm = new Vue({
    el: "#intro",
    data: {
        schools: ["ESMAD", "ISEP", "ESE", "ISCAP", "ESTG", "ESS", "ESHT"],
        char: ""
    },
    methods:{
        addSchool: function(school){
            this.schools.push(school)
        },
        filterSchool: function(c){
            this.char = c
        }
    },
    computed:{
        computedFilterSchools: function(){
            return this.schools.filter(school=> school.startsWith(this.char))
        }
    }
})