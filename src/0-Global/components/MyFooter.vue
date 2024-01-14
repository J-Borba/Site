<template>
  <footer>
    <div class="footerContent">
      <div class="iconsWrapper">
        <a @click="handleClickFooter">
          <font-awesome-icon class="footer-icon" :icon="['fas', 'turn-up']" size="lg" style="color: var(--secondary)"/>
        </a>
        <a href="https://github.com/J-Borba" target="_blank">
          <font-awesome-icon class="footer-icon" :icon="['fab', 'github']" size="xl"/>
        </a>
        <a href="mailto:joao3borba3@gmail.com" target="_blank">
          <font-awesome-icon class="footer-icon" :icon="['far', 'envelope']" size="xl"/>
        </a>
        <a href="https://www.linkedin.com/in/joao-borba27/" target="_blank">
          <font-awesome-icon class="footer-icon" :icon="['fab', 'linkedin']" size="xl"/>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
  function handleClickFooter() {
    document.documentElement.scrollTop = 0;
  }
</script>

<style lang="scss" scoped>
  footer {
    display: flex;
    justify-content: center;
    
    width: 100%;
  }
  p {
    line-height: 1.6;
    font-weight: bold;
  }
  .footerContent {
    display: flex;
    position: sticky;
    bottom: 0;
    justify-content: center;
    align-items: center;
    
    width: 50svw;
    height: 4rem;

    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    
    padding: 0 2rem;

    background-color: var(--primary);
    color: var(--footer-text) !important;

  }
  .footer-icon {
    font-size: 1.5rem !important;
  }
  .iconsWrapper {
    display: flex;
    gap: 0.875rem;

    a {
      color: var(--footer-text);
      cursor: pointer;
      border: 0;

      transition: transform 1.5s;
    }
    a:hover {
      transform: translateY(-15%);
      transition: transform 150ms;
    }
  }
  @media only screen and (max-width: 800px) {
    .footerContent {
      height: 3.8rem;
      padding: 0 2rem;
    }
  }
</style>