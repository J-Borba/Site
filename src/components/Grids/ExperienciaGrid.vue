<template>
  <div class="experiencia-grid">
    <div class="title-experiencia-grid-container">
      <h2>
        Última Experiência
      </h2>
    </div>
    
    <div class="vaga-experiencia-grid-container flexbox-col-center-aligned">
      <h5>TIPLAN</h5>
      <p class="paragraph" >Desenvolvedor de Software</p>
      <p class="paragraph" >Out/2023 - Atualmente</p>
    </div>

    <div class="maps-experiencia-grid-container">
      <iframe
        class="maps"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3468.95989963365!2d-43.18144200464534!3d-22.904709338182126!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5fdc3e9565%3A0xe09773af0e23b78e!2sTIPLAN!5e0!3m2!1spt-BR!2sbr!4v1696688192919!5m2!1spt-BR!2sbr"        width="600"
        height="300"
        style="border:0;"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>  
    </div>
    <div class="desc-experiencia-grid-container flexbox-col-center-aligned">
      <h5>Descrição da vaga</h5>
      <router-link to="experiencia#TIPLAN">
        <font-awesome-icon :icon="['fas', 'circle-info']" size="xl" style="color: var(--secondary)" />
      </router-link>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
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
  @media only screen and (max-width: 1168px) {
    .experiencia-grid {
      grid-template-columns: 100%;
      grid-template-areas:
      "title"
      "vaga"
      "maps"
      "desc";
    }
  }
</style>