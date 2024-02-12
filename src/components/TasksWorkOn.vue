<script setup>
import { useStore } from "vuex";
import {onMounted} from "vue";

const store = useStore();

onMounted(() => {
  setInterval(() => {
    store.state.current_time = Date.now();
  }, 10)
})
</script>

<template>
  <div class="tasks-section">
    <h2 class="title-2">В работе</h2>
    <div class="task-list">
      <div class="task" v-for="task in store.getters.TASKS.filter(x => x.status === 'workin')">
        <div><strong>Название : </strong>{{ task.title }}</div>
        <div><strong>Описание : </strong>{{ task.description }}</div>
        <div><strong>Автор : </strong>{{ task.author }}</div>
        <div><strong>Статус : </strong>{{ task.status.toUpperCase() }}</div>
        <div><strong>Создана : </strong>{{ task.create_date.toLocaleString() }}</div>
        <div><strong>В работе : </strong>{{ new Date(task.workin_date).toLocaleString() }}</div>
        <div><strong>Затрачено : </strong>{{ ((store.state.current_time - task.workin_date)/1000/60).toFixed(0) }} минут</div>
        <button @click="store.commit('CHANGE_STATUS_COMPLETED', task)">Завершить</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// variables
$background: #47a655;
$component-bg: #000000;
$component-border: #151515;
$title-1: black;
$title-2: black;
h2 {
  margin-bottom: 10px;
}
.button__task-list {
  background-color: $component-bg;
  border: 2px solid white;
  color: white;
  margin-top:       10px;
}
.task-list::-webkit-scrollbar {
  width: 0;
}
</style>