<template>
  <section class="text-center">
    <div class="d-flex flex-column gap-3">
      <h2>Home Page</h2>
      <h4>Work in Progress! Come Back Later.</h4>
      
      <div class="d-flex justify-content-center gap-2">
        <h5>
          Try this out instead 
        </h5>
        <h5>
          <font-awesome-icon :icon="['far', 'hand-point-right']" />
        </h5>
        <h5>
          <router-link to="curriculo/home">Currículo</router-link>
        </h5>
      </div>
    </div>
  </section>
</template>

<script setup>
  import '../style/global.scss';
</script>

<style lang="scss" scoped>

</style>
