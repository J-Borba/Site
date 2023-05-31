<template>
    <a href="https://wa.me/message/URFTSO4RH2ZQF1" target="_blank" class="whatsapp-button-container">
      <font-awesome-icon :icon="['fab', 'whatsapp']"/>
    </a>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .whatsapp-button-container {
    display: flex;
    justify-content: center;
    align-items: center;

    background: var(--primary);
    color: white;
    font-size: 2rem;

    position: fixed;
    bottom: 20px;
    right: 20px;
    
    width: 0;
    height: 0;

    padding: 1.5625rem;
    text-decoration: none;
    border-radius: 50%;

    animation: 
      whatsapp-button-animation-pulse 1.5s ease-out infinite,
      whatsapp-button-animation-scale-up 2s ease-in-out forwards;
  }
  @keyframes whatsapp-button-animation-pulse {
    0% {
      box-shadow: 0 0 0 0 var(--primary-low-opacity);
    }
    80% {
      box-shadow: 0 0 0 14px var(--primary-no-opacity);
    }
  }
  @keyframes whatsapp-button-animation-scale-up{
    0% {
      transform: scale(0)
    }
    100% {
      transform: scale(1);
    }
  }
</style>