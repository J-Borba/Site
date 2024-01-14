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
  import GithubCardsGrid from './Grids/GithubCardsGrid.vue';
  import ExperienciaGrid from '@/components/Grids/ExperienciaGrid.vue'
  import FormacaoGrid from '@/components/Grids/FormacaoGrid.vue'
  import SkillsGrid from '@/components/Grids/SkillsGrid.vue'

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

<style lang="scss">
  section {
    display: flex;
    min-height: 80svh;
    justify-content: center;
    align-items: center;
  }
  .section-4 {
    flex-direction: column;
  }
  h2,
  .paragraph {
    color: var(--primary);
    margin: 0;
    margin-block-end: 0;
    font-weight: bold;
  }
  .maps {
    border-radius: 8px;
    width: 40rem;
    height: 15rem;
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
  .flexbox-col-center-aligned {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
  }  

  @media only screen and (max-width: 1168px) {
    .maps {
      width: 80svw;
    }
  }
</style>