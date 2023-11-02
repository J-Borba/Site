<template>
    <div>
      <slot></slot>
  
    </div>
</template>

<style lang="scss" scoped>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    min-height: 90svh;

    padding: 0 0.875rem;

    opacity: 0;
    animation: opacityUp 2.5s forwards;
  }
  @media only screen and (max-width: 1168px) {
    div {
      max-width: 90svw;
      margin: 0.750rem auto;
      padding: 0;
    }
  }
</style>