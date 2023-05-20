<template>
  <MyHeader />
  <router-view/>
  <MyFooter />
</template>

<script setup>
  import { onMounted } from 'vue';
  import MyHeader from './components/MyHeader.vue';
  import MyFooter from './components/MyFooter.vue';

  onMounted(() => {
    document.documentElement.className = 'dark';
  })
</script>

<style lang="scss">
</style>
