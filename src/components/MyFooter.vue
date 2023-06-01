<template>
  <footer>
    <div class="footerContent">
      <div class="iconsWrapper">
        <a @click="handleClickFooter">
          <font-awesome-icon :icon="['fas', 'turn-up']" size="lg" style="color: var(--secondary)"/>
        </a>
        <a href="https://github.com/J-Borba" target="_blank">
          <font-awesome-icon :icon="['fab', 'github']" size="xl"/>
        </a>
        <a href="mailto:joao3borba3@gmail.com" target="_blank">
          <font-awesome-icon :icon="['far', 'envelope']" size="xl"/>
        </a>
        <a href="https://www.linkedin.com/in/joao-borba27/" target="_blank">
          <font-awesome-icon :icon="['fab', 'linkedin']" size="xl"/>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted } from 'vue'
  function handleClickFooter() {
    document.documentElement.scrollTop = 0;
  }
  onMounted(() => {
    const sliders = document.querySelectorAll('.footerContent')

    const appearOptions = {
      threshold: 0.9,
    }

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
      
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        else {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        }
      })
      
    }, appearOptions);

    sliders.forEach((slider) => {
      appearOnScroll.observe(slider);
    })
  })
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
    
    width: fit-content;
    height: 4rem;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    
    padding: 0 2rem;

    background-color: var(--primary);
    color: var(--footer-text) !important;

    opacity: 0;
  }
  .footerContent.appear {
    animation: opacityUp 3s forwards;
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
  @media (max-width: 1168px) {
    .footerContent {
      transform: translateX(-40%);
    }
  }
  @media only screen and (max-width: 800px) {
    .footerContent {
      height: 2.5rem;
      padding: 0 1rem;
    }
  }
</style>