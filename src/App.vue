<template>
  <MyHeader />
  <router-view/>
  <WhatsappBtn />
  <MyFooter />
</template>

<script setup>
  import MyHeader from './0-Global/components/MyHeader.vue';
  import MyFooter from './0-Global/components/MyFooter.vue';
  import WhatsappBtn from './0-Global/components/WhatsappBtn.vue';
</script>