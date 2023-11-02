<template>
  <HomeSections>
    <ViewsContainer>
      <div class="about-container">
        <div class="profile-container">
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
            (UERJ)</strong>
          </p>
          <p>
            Desenvolvedor na <a href="https://www.tiplan.com.br/" target="_blank">TIPLAN</a>
          </p>
          <p>
            Amo desenvolver e busco mais conhecimento a cada dia
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
  a{
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
  .about-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    gap: 2rem;
    .about-text-grid-container {
      display: flex;
      flex-direction: column;
      width: 80%;
      text-align: start;
      
      a {
        color: var(--primary);
        &:hover {
          opacity: 0.5;
          color: var(--secondary);
        }
      }
    }
  }
  .profile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    img {
      width: 10rem;
      border-radius: 50%;
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
