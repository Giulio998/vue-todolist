
 const { createApp } = Vue

  createApp({
    data() {
      return {
      todos : [
        {
          text: "fare la spesa",
          done: false,

        },
        {
          text: "portare il cane",
          done: false,

        },
        {
          text: "preparare la cena",
          done: false,

        },
      ],

      newNote:'',
      }
    },

    methods: {
      remove(index){
        this.todos.splice(index,1)
      },

      add(){
        let newTodo = {
          text: this.newNote,
          done: false,
        }
        if (this.newNote != '') {
          this.todos.push(newTodo);
          this.newNote = '';
          console.log(this.todos);
        }
       
      }
    },
  }).mount('#app')