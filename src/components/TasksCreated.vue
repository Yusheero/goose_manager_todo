<script setup>
import { useStore } from "vuex";

const store = useStore();

</script>

<template>
  <div class="tasks-section">
    <h2 class="title-2">Созданые задачи</h2>
    <div class="task-list">
      <div class="task" v-for="task in store.getters.TASKS.filter(x => x.status === 'created')">
        <div><strong>Название : </strong>{{ task.title }}</div>
        <div><strong>Описание : </strong>{{ task.description }}</div>
        <div><strong>Автор : </strong>{{ task.author }}</div>
        <div><strong>Статус : </strong>{{ task.status.toUpperCase() }}</div>
        <div><strong>Создана : </strong>{{ task.create_date.toLocaleString() }}</div>
        <button @click="store.commit('CHANGE_STATUS_WORKIN', task)">В работу</button>
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
</style>