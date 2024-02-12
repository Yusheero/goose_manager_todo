<script setup>
import { useStore } from "vuex";

const store = useStore();
</script>

<template>
  <div class="tasks-section">
    <h2 class="title-2">Завершены</h2>
    <div class="task-list">
      <div class="task" v-for="task in store.getters.TASKS.filter(x => x.status === 'completed')">
        <div><strong>Название : </strong>{{ task.title }}</div>
        <div><strong>Описание : </strong>{{ task.description }}</div>
        <div><strong>Автор : </strong>{{ task.author }}</div>
        <div><strong>Статус : </strong>{{ task.status.toUpperCase() }}</div>
        <div><strong>Создание : </strong>{{ (task.create_date).toLocaleString() }}</div>
        <div><strong>Затрачено : </strong>{{ task.time }} минут</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// variables
$background: #47a655;
$component-bg: #fc9313;
$component-border: #151515;
$title-1: black;
$title-2: black;
h2 {
  margin-bottom: 10px;
}
.task-list::-webkit-scrollbar {
  width: 0;
}
</style>