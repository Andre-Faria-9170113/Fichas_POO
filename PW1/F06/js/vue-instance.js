const vm = new Vue({
    el: "#intro",
    data: {
        tasks: [],
        inputTask: "",
        inputTopic: "Personal",
        filter: "All"
    },
    methods: {
        addTask: function () {
            var newTask = {
                name: this.inputTask,
                topic: this.inputTopic
            }
            this.tasks.push(newTask);


            localStorage.setItem("tasks", JSON.stringify(this.tasks))
        },
        deleteTask: function (i) {
            this.tasks.splice(i, 1)
            localStorage.setItem("tasks", JSON.stringify(this.tasks))
        }
    },
    computed: {
        filterTasks: function () {
            if (this.tasks) {
                return this.tasks.filter((task) => task.topic == this.filter || this.filter == "All")
            }

        }
    },
    created: function () {
        if(localStorage.getItem("tasks")){
            this.tasks = JSON.parse(localStorage.getItem("tasks"))
        }
        
    }
})