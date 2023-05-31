<template>
    <div>
      <slot></slot>
  
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 60svw;
    min-height: 90svh;

    padding: 0 0.875rem;
    margin: 0 auto;

    opacity: 0;
    scale: 0;
    animation: opacityUp 2s forwards, scaleUp 2s forwards;
  }
  @media only screen and (max-width: 1168px) {
    div {
      width: 90svw;
      margin: 0.750rem auto;
      padding: 0;
    }
  }
</style>