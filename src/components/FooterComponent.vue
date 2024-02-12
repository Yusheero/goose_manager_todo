<script setup>

</script>

<template>
  <div class="wrapper wrapper-footer">
    <h1 class="title-1">Я подвал приложения, вопросы?</h1>
    <ul class="items-list">
      <li><a href="https://yusheero.github.io/my-page/">yusheero</a></li>
      <li><a href="https://github.com/Yusheero/vue-ugm">git</a></li>
      <li><a href="https://t.me/yusheero_dev">telegram</a></li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.wrapper-footer {
  padding: 0 20px;
  height: 10%;
  width: 100%;
  background-color: #47a655;
}
.items-list {
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 15px;
}
.items-list li {
  border-radius: 5px;
  font-size: 20px;
  font-weight: 600;
}
.items-list a {
  background-color: #151515;
  color: white;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 600;
}
.items-list a:hover {
  background-color: #ffffff;
  color: #151515;
  transition: background-color 1s, color 1s;
}
</style>