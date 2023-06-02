<template>
  <div class="experiencia-grid">
    <div class="title-experiencia-grid-container">
      <h2>
        Última Experiência
      </h2>
    </div>
    
    <div class="vaga-experiencia-grid-container flexbox-col-center-aligned">
      <h5>Associação Brasileira Beneficente de Reabilitação</h5>
      <p class="paragraph" >Analista de Sistemas</p>
      <p class="paragraph" >mar/2022 - jun/2023</p>
    </div>

    <div class="maps-experiencia-grid-container">
      <iframe
        class="maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.6188111481233!2d-43.220514285033204!3d-22.964261584982655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd59ea959a3a3%3A0x7429ede8067295be!2sABBR!5e0!3m2!1spt-BR!2sbr!4v1684791000938!5m2!1spt-BR!2sbr" 
        width="600"
        height="300"
        style="border:0;"
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