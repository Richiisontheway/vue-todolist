const {createApp} = Vue;

createApp({
    data(){
        return{
            newTodo:'',
            todos: [
                {
                    text: 'pulire',
                    done:true,
                },
                {
                    text: 'fare il letto',
                    done:true,
                },
                {
                    text:'svegliarsi',
                    done:false,
                },
                {
                    text:'ascoltare Alessio Vietri',
                    done:false,
                },
            ]
        };
    },
    methods: {
        addTodo(){
            if(this.newTodo.trim().length > 0){
                let newElem = {};
                newElem.text = this.newTodo;
                newElem.done = false;
                this.todos.push(newElem);
                this.newTodo = '';
            }
        },
        removeTodo(i){
            this.todos.splice(i,1);
        },
        submit(){
            if(this.newTodo.trim().length > 0){
                let newElem = {};
                newElem.text = this.newTodo;
                newElem.done = false;
                this.todos.push(newElem);
                this.newTodo = '';
            }
        }
    }
}).mount('#app');