const { createApp } = Vue;

createApp({
    data() {
        return {
            newTodoElement: '',
            todoList : [
                {
                    id: 2,
                    text: 'Dublin',
                    done: false,
                },
                {
                    id: 3,
                    text: 'Vienna',
                    done: true,
                },
                {
                    id: 1,
                    text: 'Tokyo',
                    done: false,
                },
                {
                    id: 5,
                    text: 'Berlin',
                    done: false,
                },
                {
                    id: 7,
                    text:'Antananarivo',
                    done: true,
                }
            ],
        }
    },
    methods: {
        addNewTodoItem(newElement){
            newElement = newElement.trim();
            console.warn(newElement);

            const beatifiedElement = this.stringBeautifier(newElement);

            if (newElement.length > 3 ){
                this.newTodoElement = '';
                this.todoList.push({
                    id: this.todoList[this.todoList.length-1].id + 1 ,
                    text: beatifiedElement,
                    done: false
                });
            }
            else
                console.error('Cannot insert an item which is not a capital city');
        },

        stringBeautifier(rawString){
            rawString = rawString.trim().toLowerCase();
            return rawString.charAt(0).toUpperCase() + rawString.slice(1);
        },

        removeTodoElement(elementId){

            // let indexToBeRemoved;
            // let i = 0;
            // while( indexToBeRemoved === undefined && i < this.todoList.length){
            //     const element = this.todoList[i];
            //     if (element.id === elementId){
            //         indexToBeRemoved = i;
            //     }
            //     i++;
            // }
            // % const indexToBeRemoved = this.todoList.findIndex( function(element){
            // %    return element.id === elementId;
            // % });

            const indexToBeRemoved = this.todoList.findIndex( element => element.id === elementId );
            this.todoList.splice(indexToBeRemoved, 1);
        },

        interactWithElement(indexToBeStruck){
            this.todoList[indexToBeStruck].done = !this.todoList[indexToBeStruck].done;
        }
    },

    created() {
    },
}).mount('#app');

