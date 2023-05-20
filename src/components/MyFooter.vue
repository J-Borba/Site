<template>
  <footer>
    <div class="footerContent">
      <div class="iconsWrapper">
        <a href="https://github.com/J-Borba" target="_blank">
          <font-awesome-icon :icon="['fab', 'github']" size="xl"/>
        </a>
        <a href="mailto:joao3borba3@gmail.com" target="_blank">
          <font-awesome-icon :icon="['far', 'envelope']" size="xl"/>
        </a>
        <a href="https://www.linkedin.com/in/joao-borba27/">
          <font-awesome-icon :icon="['fab', 'linkedin']" size="xl"/>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  footer {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  p {
    line-height: 1.6;
    font-weight: bold;
  }
  .footerContent {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8svh;
    background-color: var(--primary);
    color: var(--footer-text);
    width: fit-content;
    padding: 0 2rem;
    position: fixed;
    bottom: 0;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    animation: slideUp 1s forwards
  }
  .iconsWrapper {
    display: flex;
    gap: 1rem;

    a {
      transition: transform 1.5s;
      border: 0;
    }
    a:hover {
      transform: translateY(-15%);
      transition: transform 150ms;
    }
  }
</style>