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
    
    width: 60%;
    min-height: 100svh;
    gap: 2rem;
    padding: 0.875rem;
    margin: 1.5rem auto;

    opacity: 0;
    scale: 0;
    animation: opacityUp 2s forwards, scaleUp 2s forwards;
  }
  @media (max-width: 1168px) {
    div {
      width: 100%;
      margin: 1rem auto;
      padding: 0;
    }
  }
</style>