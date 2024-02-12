import { createStore } from 'vuex'

export default createStore({
    state: {
        tasks: [{
            id: 0,
            title: 'Подготоука',
            description: 'Подготовиться к экзамену',
            author: 'Константин',
            status: 'created',
            create_date: new Date(),
            workin_date: 1700971162508,
            in_work_time: 0,
            time: 0
            }],
        current_time: 0
    },
    getters: {
        TASKS: state => {
            return state.tasks; // геттер для работы с массивом задач
        }
    },
    mutations: {
        ADD_TASK: (state, payload) => {
            state.tasks.push(payload); // добавление нового поста в массив
        },
        CHANGE_STATUS_COMPLETED: (state, payload) => {
            let findedItem =  state.tasks.find(item => item.id === payload.id);
            findedItem.status = 'completed';
            findedItem.time = ((state.current_time - findedItem.workin_date)/1000/60).toFixed(0)
        },
        CHANGE_STATUS_WORKIN: (state, payload) => {
            let findedItem =  state.tasks.find(item => item.id === payload.id);
            findedItem.status = 'workin';
            findedItem.workin_date = Date.now();
        }
    },
    actions: {
    },
    modules: {
    }
})