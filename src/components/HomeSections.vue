<template>
  <slot></slot>
  
  <section class="slideIn">
    <h1>Section 1</h1>
  </section>
  <section class="slideIn">
    <h1>Section 2</h1>
  </section>
  <section class="slideIn">
    <h1>Section 3</h1>
  </section>
  <section class="slideIn">
    <h1>Section 4</h1>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';

  onMounted(() => {
    const sliders = document.querySelectorAll('.slideIn')

    const appearOptions = {
      threshold: 0.5,
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
  section {
    display: flex;
    height: 100svh;
    justify-content: center;
    align-items: center;
  }
  .slideIn {
    opacity: 0;
    transform: translateX(-30%);
    transition: opacity 0.6s ease-in, transform 0.6s ease-in;
  }
  .slideIn.appear {
    opacity: 1;
    transform: translateX(0);
  }
</style>