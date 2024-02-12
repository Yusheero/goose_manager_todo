<script setup>
import CreateTask from "./components/CreateTask.vue";
import TasksCreated from "./components/TasksCreated.vue";
import TasksWorkOn from "./components/TasksWorkOn.vue";
import TasksCompleted from "./components/TasksCompleted.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<template>
  <div class="main">
    <header-component />
    <div class="container">
      <create-task />
      <tasks-created />
      <tasks-work-on />
      <tasks-completed />
    </div>
    <footer-component />
  </div>
</template>

<style lang="scss">
@import url('../src/scss/main.scss');
</style>

