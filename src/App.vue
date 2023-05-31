<template>
  <MyHeader />
  <router-view/>
  <WhatsappBtn />
  <MyFooter />
</template>

<script setup>
  import { onMounted } from 'vue';
  import MyHeader from './components/MyHeader.vue';
  import MyFooter from './components/MyFooter.vue';
import WhatsappBtn from './components/WhatsappBtn.vue';

  onMounted(() => {
    document.documentElement.className = 'dark';
  })
</script>

<style lang="scss">
</style>
