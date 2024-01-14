<template>
  <ViewsContainer>
    <div class="title">
      <h4>Conhecimentos</h4>
    </div>
    <div class="skillDescContainer" :id="skill.sigla" v-for="skill in skills" :key="skill.id">
      <h5>{{ skill.tipo }}</h5>
      <div class="desc">
        <p v-for="line in skill.descricao" :key="line">{{ line }}</p>
      </div>
    </div>
  </ViewsContainer>
</template>

<script setup>
  import ViewsContainer from '../components/ViewsContainer.vue';
  import '../style/global.scss'

const skills = [
    {
      id: 1,
      tipo: "Ferramentas",
      sigla: 'ferramentas',
      descricao: [
      "Banco de Dados SQL Server",
      "Microsoft Power BI, Excel, Power Automate e Sharepoint",
      "Sistema TOTVS - Linha RM e Protheus",
      ]
    },
    {
      id: 2,
      tipo: "Desenvolvimento",
      sigla: "dev",
      descricao: [
        "Javascript e Typescript ( Vue.js 3 e React )",
        "Java",
        "Python",
        "C++",
        "Requisições HTTP",
      ]
    }
  ]
</script>

<style lang="scss" scoped>
  p {
    margin-block-end: 0;
  }
  .title {
    margin: 0;
  }
  .skillDescContainer {
    margin-top: 1rem;
    color: var(--text);
    width: 90%;
    
    &:not(:last-child) {
      padding-bottom: 1.5rem;
      border-bottom: 2px solid var(--primary);
    }
  }
  .desc {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-left: 1rem;
    margin-top: 1rem;

    opacity: 0.8;
    p::before {
      content: "• ";
    }
  }
</style>