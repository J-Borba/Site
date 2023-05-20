<template>
  <div class="viewsContainer">

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
  </div>
</template>

<script setup>
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
</style>
