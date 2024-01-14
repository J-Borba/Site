<template>
  <slot></slot>

  <main>
    <section class="slideIn section-1">
      <ExperienciaGrid />
    </section>

    <section class="slideIn section-2">
      <FormacaoGrid />
    </section>

    <section class="slideIn section-3">
      <SkillsGrid />
    </section>

    <section class="slideIn section-4">
      <GithubCardsGrid />
    </section>
  </main>
</template>

<script setup>
  import { onMounted } from 'vue';
  import '../style/global.scss'
  import GithubCardsGrid from '../components/Grids/GithubCardsGrid.vue';
  import ExperienciaGrid from '../components/Grids/ExperienciaGrid.vue'
  import FormacaoGrid from '../components/Grids/FormacaoGrid.vue'
  import SkillsGrid from '../components/Grids/SkillsGrid.vue'

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
  .section-4 {
    flex-direction: column;
  }

  .slideIn {
    opacity: 0;
    transform: translateX(-30%);
    transition: opacity 1s ease-in, transform 1s ease-out;
  }
  .slideIn.appear {
    opacity: 1;
    transform: translateX(0);
  }
</style>