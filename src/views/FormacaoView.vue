<template>
  <ViewsContainer>
    <div class="title">
      <h4>Formações Acadêmicas</h4>
    </div>
    <div class="formacaoContainer" v-for="instituicao in formacoes" :key="instituicao.id" :id="instituicao.sigla">
      <h5>{{ instituicao.nome }}</h5>
    </div>
  </ViewsContainer>
</template>

<script setup>
import ViewsContainer from '@/components/ViewsContainer.vue';

const formacoes = [
    {
      id: 1,
      nome: "Universidade do Estado do Rio de Janeiro",
      sigla: 'UERJ',
      periodo: '2021 - cursando'
    }
  ]
</script>

<style lang="scss" scoped>
  
</style>