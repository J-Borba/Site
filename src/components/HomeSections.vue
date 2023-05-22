<template>
  
  <main>
    <slot></slot>
    <section class="slideIn section-1">
      <div class="sectionShort">
        <h2>
          Trabalho Atual
        </h2>
        <div class="baseContainer">
          <div class="baseDesc">
            <h5>Associação Brasileira Beneficente de Reabilitação</h5>
            <p>Analista de Sistemas</p>
            <p>início: mar/2022</p>
          </div>
          <iframe class="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.6188111481233!2d-43.220514285033204!3d-22.964261584982655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd59ea959a3a3%3A0x7429ede8067295be!2sABBR!5e0!3m2!1spt-BR!2sbr!4v1684791000938!5m2!1spt-BR!2sbr" :width="mapsWidth" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>  
          <div class="vagaContainer">
            <h5>Descrição da vaga</h5>
            <router-link to="experiencia#ABBR">
              <font-awesome-icon :icon="['fas', 'circle-info']" size="xl" style="color: var(--secondary)" />
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <section class="slideIn section-2">
      <div class="sectionShort">
        <h2>
          Formação Acadêmica
        </h2>
        <div class="baseContainer">
          <div class="baseDesc">
            <h5>1. Universidade do Estado do Rio de Janeiro (UERJ)</h5>
            <p>Ciências da Computação</p>
            <p>fev/2021 - cursando</p>
          </div>
          <iframe class="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1798.1578673479453!2d-43.23736935486235!3d-22.911006013880126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e66c5f330ad%3A0x874ed5a98cf472d1!2sUniversidade%20do%20Estado%20do%20Rio%20de%20Janeiro!5e0!3m2!1spt-BR!2sbr!4v1684793985425!5m2!1spt-BR!2sbr" :width="mapsWidth" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>        <div class="vagaContainer">
            <h5>Descrição da Formação</h5>
            <router-link to="formacao">
              <font-awesome-icon :icon="['fas', 'circle-info']" size="xl" style="color: var(--secondary)" />
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <section class="slideIn section-3">
      <h1>Section 3</h1>
    </section>
    <section class="slideIn section-4">
      <h1>Section 4</h1>
    </section>
</main>
</template>

<script setup>
import { onMounted } from 'vue';
  let mapsWidth = 600
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
  p {
    margin: 0;
    margin-block-end: 0;
    color: var(--primary);
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
  .sectionShort {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
  .baseContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    font-weight: bold;

    h5 {
      width: 15rem;
    }
  }
  .vagaContainer {
    flex-direction: row;
    gap: 2rem;
  }
  .maps {
    border-radius: 8px;
    height: 300px !important;
  }
  @media (max-width: 1168px) {
    .baseContainer {
      flex-direction: column;
      
      .maps {
        width: 90svw !important
      }
    }
  }
</style>