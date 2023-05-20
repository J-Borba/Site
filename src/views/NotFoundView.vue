<template>
  <div class="viewsContainer">
    <div class="notFound">
      <span>4</span>
      <span>0</span>
      <span>4</span>
    </div>
    <div class="notFoundText">
      <h1>Ops, essa página não existe!</h1>
      <h3>Selecione uma das páginas pelo cabeçalho ou menu!</h3>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
  span {
    color: var(--primary);
    font-weight: bold;
    font-size: 15svw;
  }
  .notFound {
    display: flex;
    gap: 1.5rem;
  }
  .notFoundText {
    text-align: center;
    margin-top: 2rem;
  }

</style>