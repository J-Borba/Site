<template>
  <HomeSections>
    <ViewsContainer >
      <div class="about-grid">
        <div class="profile-grid">
          <div class="img-container">
            <a href="https://www.linkedin.com/in/joao-borba27/" target="_blank">
              <img src="@/assets/MyFoto-Circle.png" alt="">
            </a>
          </div>
          <h1>João Victor Borba</h1>
        </div>
        
        <div class="about-text-grid-container">
          <p>
            Estudante de Ciências da Computação na <strong>Universidade do Estado do Rio de Janeiro
            (UERJ)</strong> com um sonho de me tornar Desenvolvedor.
          </p>
          <p>
            Desde que me deparei com esta área, sou completamente apaixonado e tenho
            sede de conhecimento.
          </p>
          <p>
            Amo desenvolver e vou dar meu máximo para tornar esta paixão em profissão!
          </p>
        </div>

        <div class="more-icon-grid-container">
          <h4>Mais sobre mim</h4>
          <font-awesome-icon :icon="['far', 'hand-point-down']" bounce size="2xl" style="color: var(--primary)"/>
        </div>
      </div>
    </ViewsContainer>
  </HomeSections>
</template>

<script setup>
  import ViewsContainer from '@/components/ViewsContainer.vue';
  import HomeSections from '@/components/HomeSections.vue';
</script>

<style lang="scss" scoped>
  a {
    opacity: 1 !important;
  }
  .img-container {
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    
    width: 10.5rem;
    aspect-ratio: 1;
    border-radius: 50%;

    padding: 0.275rem;

    overflow: hidden;
    &::before {
      content: '';
      
      position: absolute;
      z-index: -1;
      inset: -10px 40px;
      background: linear-gradient(315deg, var(--secondary), var(--primary));
      
      transition: 1s;
      animation: spin 10s linear infinite
    }
    &:hover::before {
      transition: 300ms;
      inset: -10px 0;
    }
    img {
      width: 10.5rem;
    }
  }
  .about-grid {
    display: grid;
    gap: 2rem;

    justify-items: center;
    align-items: center;
    text-align: center;

    .about-text-grid-container {
      display: flex;
      flex-direction: column;
      width: 80%;
      text-align: start;
    }
  }
  .profile-grid {
    display: grid;
    align-items: center;
    justify-items: center;
    gap: 1.5rem;
    grid-template-areas: 
      "foto nome";
    img {
      width: 10rem;
      border-radius: 50%;
      grid-area: foto;
    }
    h1 {
      grid-area: nome;
    }
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @media only screen and (max-width: 800px) {
    .profile-grid {
      grid-template-areas: 
        "foto"
        "nome";
    }
    .img-container {
      width: 7rem;
      img {
        width: 6.5rem;
      }
      &::before {
        inset: -10px 20px;
      }
    }
  }
</style>
