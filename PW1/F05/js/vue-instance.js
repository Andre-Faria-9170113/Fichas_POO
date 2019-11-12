const vm = new Vue({
    el: "#intro",
    data: {
        msg: "Programação Web I"
    },
    methods: {
        alertMsg: function (m, event) {
            alert(m)
            if (event) {
                console.log("element name(id): " + event.target.id + "\nevent type: " + event.type)
            }

        },
        showMessage: function(m,event){
            // event.stopPropagation();
            console.log(m)
        }
    }
})
