<template>
  <HomeSections>
    <ViewsContainer >
      <div class="profileContainer">
        <img src="@/assets/MyFoto-Circle.png" alt="">
        <h1>João Victor Borba</h1>
      </div>

      <div class="aboutMe">
        <p>
          Estudante de Ciências da Computação na <strong>Universidade do Estado do Rio de Janeiro
          (UERJ)</strong> e atualmente Analista de Sistemas com um sonho de me tornar
          Desenvolvedor.
        </p>
        <p>
          Desde que me deparei com esta área eu sou completamente apaixonado e tenho
          sede de conhecimento.
        </p>
      </div>
      
      <div class="introSections">
        <h4>Mais sobre mim</h4>
        <font-awesome-icon :icon="['far', 'hand-point-down']" bounce size="2xl" style="color: var(--primary)"/>
      </div>
    </ViewsContainer>
  </HomeSections>
</template>

<script setup>
  import ViewsContainer from '@/components/ViewsContainer.vue';
  import HomeSections from '@/components/HomeSections.vue';
</script>

<style lang="scss" scoped>
  img {
    width: 10rem;
    border-radius: 50%;
  }
  .profileContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
  }
  .aboutMe {
    padding: 10px;
    line-height: 1.6;
  }
  .introSections {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 4rem;
  }
  @media (max-width: 1168px) {
    .introSections {
      margin-top: 0;
      font-size: 0.675rem;
    }
  }
</style>
