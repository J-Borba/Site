<template>
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
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>  
    </div>
    <div class="desc-formacao-grid-container flexbox-col-center-aligned">
      <p class="paragraph">Ciências da Computação</p>
      <p class="paragraph">Fev/2021 - Atualmente</p>
    </div>     
  </div>
</template>

<script setup>
import '../../style/global.scss'
</script>

<style lang="scss" scoped>
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
  .flexbox-col-center-aligned {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
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
  @media only screen and (max-width: 1168px) {
    .formacao-grid {
      grid-template-columns: 100%;
      grid-template-areas: 
        "title"
        "universidade"
        "desc"
        "maps";
    }
    .maps {
      width: 80svw;
    }
  }
</style>