<script setup>

</script>

<template>
  <div class="wrapper wrapper-header">
    <div class="title-1">
      <div class="typing-title">Untitled Goose Manager</div>
    </div>
    <details>
      <summary>О проекте</summary>
      <div class="content">
        <p>Автор проекта - Yusheero</p>
        <p>GitHub - Yusheero</p>
        <p>Реализован на SCSS, Vue3 Composition API и VueX</p>
      </div>
    </details>
  </div>
</template>

<style scoped lang="scss">
.wrapper-header {
  padding: 0 20px;
  height: 10%;
  width: 100%;
  background-color: #47a655;
}
.typing-title {
  width: 23ch;
  animation: typing 3s steps(23), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 2rem;
}

@keyframes typing {
  from {
    width: 0;
  }
}
@keyframes blink {
  50% {
    border-color: transparent;
  }
}

//Разрешение от 320px до 740px
@media (min-width: 320px) and (max-width: 740px) {
  .wrapper-header {
    padding: 0 20px;
    height: 10%;
    width: 100%;
    background-color: #47a655;
    margin-bottom: 15px;
  }
  .typing-title {
    width: 23ch;
    animation: typing 3s steps(23), blink .5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    font-size: 1.7rem;
  }
}

//Разрешение от 740px до 1280px
@media (min-width: 740px) and (max-width: 1280px) {
  .wrapper-header {
    padding: 0 20px;
    height: 10%;
    width: 100%;
    background-color: #47a655;
    margin-bottom: 15px;
  }
  .typing-title {
    width: 23ch;
    animation: typing 3s steps(23), blink .5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    font-size: 1.7rem;
  }
}
</style>