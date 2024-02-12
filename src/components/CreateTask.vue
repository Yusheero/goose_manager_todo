<script>
import { ref } from 'vue';
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const task = ref({ // создание реактивной переменной для использования в методе createTask
      id: 0,
      title: '',
      description: '',
      author: '',
      status: 'created',
      create_date: new Date(),
      workin_date: 0,
      in_work_time: 0,
      time: 0
    });

    const createTask = () => {
      if (task.value.title && task.value.description && task.value.author !== '') {
        task.value.id = Date.now();
        task.value.create_date = new Date();
        store.commit('ADD_TASK', task.value); // отправляем новый объект в store
        task.value = {
          id: 0,
          title: '',
          description: '',
          author: '',
          status: 'created',
          create_date: new Date(),
          workin_date: '',
          in_work_time: 0,
          time: 0
        }
      }
    }
    return {
      task,
      createTask
    }
  }
}
</script>

<template>
  <form @submit.prevent>
    <h2 class="title-2">Создание</h2>
    <input v-model="task.title" type="text" placeholder="Название">
    <input class="description" v-model="task.description" type="text" placeholder="Описание">
    <input v-model="task.author" type="text" placeholder="Автор">
    <button @click="createTask">Создать</button>
  </form>
</template>

<style scoped lang="scss">
.description {
  height: 100px;
}
button:hover {
  background-color: white;
  color: #151515;
  transition: background-color 1s, color 1s;
}
</style>