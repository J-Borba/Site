<template>
  <MyHeader />
  <router-view/>
  <WhatsappBtn />
  <MyFooter />
</template>

<script setup>
  import MyHeader from './components/MyHeader.vue';
  import MyFooter from './components/MyFooter.vue';
import WhatsappBtn from './components/WhatsappBtn.vue';
</script>

<style lang="scss">
</style>
