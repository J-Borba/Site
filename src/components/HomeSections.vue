<template>
  <slot></slot>

  <main>
    <section class="slideIn section-1">
      <div class="experiencia-grid">
        <div class="title-experiencia-grid-container">
          <h2>
            Última Experiência
          </h2>
        </div>
        
        <div class="vaga-experiencia-grid-container flexbox-col-center-aligned">
          <h5>Associação Brasileira Beneficente de Reabilitação</h5>
          <p>Analista de Sistemas</p>
          <p>mar/2022 - jun/2023</p>
        </div>

        <div class="maps-experiencia-grid-container">
          <iframe
            class="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.6188111481233!2d-43.220514285033204!3d-22.964261584982655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd59ea959a3a3%3A0x7429ede8067295be!2sABBR!5e0!3m2!1spt-BR!2sbr!4v1684791000938!5m2!1spt-BR!2sbr" 
            width="600"
            height="300"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>  
        </div>
        <div class="desc-experiencia-grid-container flexbox-col-center-aligned">
          <h5>Descrição da vaga</h5>
          <router-link to="experiencia#ABBR">
            <font-awesome-icon :icon="['fas', 'circle-info']" size="xl" style="color: var(--secondary)" />
          </router-link>
        </div>
      </div>
    </section>

    <section class="slideIn section-2">
      <div class="formacao-grid">
        <div class="title-formacao-grid-container flexbox-col-center-aligned">
          <h2>
            Formação Acadêmica
          </h2>
        </div>
        <div class="universidade-formacao-grid-container flexbox-col-center-aligned">
          <h5>Universidade do Estado do Rio de Janeiro (UERJ)</h5>
        </div>
        <div class="maps-formacao-grid-container">
          <iframe 
            class="maps" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1798.1578673479453!2d-43.23736935486235!3d-22.911006013880126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e66c5f330ad%3A0x874ed5a98cf472d1!2sUniversidade%20do%20Estado%20do%20Rio%20de%20Janeiro!5e0!3m2!1spt-BR!2sbr!4v1684793985425!5m2!1spt-BR!2sbr" 
            width="600" 
            height="300" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>  
        </div>
        <div class="desc-formacao-grid-container flexbox-col-center-aligned">
          <p>Ciências da Computação</p>
          <p>fev/2021 - cursando</p>
        </div>     
      </div>
    </section>

    <section class="slideIn section-3">
      <div class="skills-grid">
        <h2 class="title-skills-grid-container">
          Skills
        </h2>
        <div class="icon-skills-grid-container">
          <font-awesome-icon :icon="['fab', 'square-js']" size="2xl" class="skillsIcon" />
        </div>
        <div class="icon-skills-grid-container">
          <font-awesome-icon :icon="['fab', 'html5']" size="2xl" class="skillsIcon"/>
        </div>
        <div class="icon-skills-grid-container">
          <font-awesome-icon :icon="['fab', 'sass']" size="2xl" class="skillsIcon"/>
        </div>
        <div class="icon-skills-grid-container">
          <font-awesome-icon :icon="['fab', 'vuejs']" size="2xl" class="skillsIcon"/>
        </div>
        <div class="icon-skills-grid-container">
          <font-awesome-icon :icon="['fab', 'react']" size="2xl" class="skillsIcon"/>
        </div>
        <div class="icon-skills-grid-container">
          <font-awesome-icon :icon="['fab', 'java']" size="2xl" class="skillsIcon"/>
        </div>
        <div class="icon-skills-grid-container">
          <font-awesome-icon :icon="['fab', 'git-alt']" size="2xl" class="skillsIcon"/>
        </div>
        <div class="icon-skills-grid-container">
          <font-awesome-icon :icon="['fab', 'square-github']" size="2xl" class="skillsIcon"/>
        </div>

        <div class="desc-skills-grid-container">
          <h5>Descrição das Skills</h5>
          <router-link to="conhecimentos">
            <font-awesome-icon :icon="['fas', 'circle-info']" size="xl" style="color: var(--secondary)" />
          </router-link>
        </div>
      </div>
    </section>

    <section class="slideIn section-4">
      <h2>Projetos</h2>
      <GithubCards />
    </section>
  </main>
</template>

<script setup>
  import { onMounted } from 'vue';
  import GithubCards from './GithubCards.vue';

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
    min-height: 80svh;
    justify-content: center;
    align-items: center;
  }
  .section-4 {
    flex-direction: column;
  }
  h2,
  p {
    color: var(--primary);
    margin: 0;
    margin-block-end: 0;
    font-weight: bold;
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
  .maps {
    border-radius: 8px;
    width: 40rem;
    height: 15rem;
  }
  .flexbox-col-center-aligned {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
  }
  .experiencia-grid {
    display: grid;
    gap: 1.5rem;
    text-align: center;
    justify-content: center;

    grid-template-columns: 15rem auto 15rem;
    grid-template-areas: 
      "title title title"
      "vaga maps desc";

    .title-experiencia-grid-container {
      grid-area: title;
    }
    .vaga-experiencia-grid-container {
      grid-area: vaga;
    }
    .maps-experiencia-grid-container {
      grid-area: maps;
    }
    .desc-experiencia-grid-container {
      grid-area: desc;
    }
  }
  .formacao-grid {
    display: grid;
    gap: 1.5rem;
    text-align: center;
    justify-content: center;

    grid-template-columns: 15rem auto 15rem;
    grid-template-areas: 
      "title title title"
      "universidade maps desc";

    .title-formacao-grid-container {
      grid-area: title;
    }
    .universidade-formacao-grid-container {
      grid-area: universidade;
    }
    .maps-formacao-grid-container {
      grid-area: maps;
    }
    .desc-formacao-grid-container {
      grid-area: desc;
    }
  }
  .skills-grid {
    display: grid;
    gap: 2rem;
    justify-items: center;

    grid-template-areas: 
      "title title title title title title title title"
      "js html sass vue react java git github"
      "desc desc desc desc desc desc desc desc";

    .title-skills-grid-container {
      grid-area: title;
    }
    .icon-skills-grid-container {
      .skillsIcon {
        color: var(--primary);
        font-size: 3rem;
      }
      &:nth-child(2) {
        grid-area: js;
      }
      &:nth-child(3) {
        grid-area: html;
      }
      &:nth-child(4) {
        grid-area: sass;
      }
      &:nth-child(5) {
        grid-area: vue;
      }
      &:nth-child(6) {
        grid-area: react;
      }
      &:nth-child(7) {
        grid-area: java;
      }
      &:nth-child(8) {
        grid-area: git;
      }
      &:nth-child(9) {
        grid-area: github;
      }
    }
    .desc-skills-grid-container {
      text-align: center;
      grid-area: desc;
    }
  }

  @media only screen and (max-width: 1168px) {
    .experiencia-grid {
      grid-template-columns: 100%;
      grid-template-areas:
      "title"
      "vaga"
      "maps"
      "desc";
    }
    .formacao-grid {
      grid-template-columns: 100%;
      grid-template-areas: 
        "title"
        "universidade"
        "desc"
        "maps";
    }
    .skills-grid {

      grid-template-areas: 
        "title title title title"
        "js html sass vue"
        "react java git github"
        "desc desc desc desc";

        .skillsIcon {
          font-size: 2rem !important;
        }
    }
    .maps {
      width: 80svw;
    }
  }
</style>