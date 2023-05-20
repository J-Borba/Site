<template>
  <div class="viewsContainer">
    <div class="title">
      <h2>Experiências Profissionais</h2>
    </div>
    <div class="jobDescContainer" v-for="job in jobs" :key="job.id">
      <h3>{{ job.empresa }}</h3>
      <div class="experiencias" v-for="experiencia in job.experiencias" :key="experiencia.cargo">
        <div class="cargo-periodo">
          <h4>{{ experiencia.cargo }}</h4>
          <h4>{{ experiencia.periodo }}</h4>
        </div>
        <div class="desc">
          <p v-for="line in experiencia.descricao" :key="line">{{ line }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  
  const jobs = [
    {
      id: 1,
      empresa: "Associação Brasileira Beneficente de Reabilitação (ABBR)",
      experiencias: [
        {
          cargo: "Estagiário",
          periodo: "mar/2022 - fev/2023",
          descricao: [
            'Suporte ao cliente',
            'Infraestrutura de TI',
            'Desenvolvimento e manutenção de dashboards/indicadores - Power BI',
            'Configurações Report Server do Power BI',
            'Querys em SQL',
            'Manutenção de planilhas em Excel',
            'Automatização de processos e serviços - Power Automate',
            'Uso do pacote Microsoft 365 (Antigo Office 365)',
            'Criação de metadados para sistema TOTVS Linha RM',
            'Gerenciar configurações dos sistemas TOTVS - Linha RM e Linha Protheus'
          ]
        },
        {
          cargo: "Analista de Sistemas",
          periodo: "mar/2023 - atual",
          descricao: [
            'Todas as funções citadas acima como estagiário',
            'Desenvolvimento de ChatBot com TakeBlip',
            'Desenvolvimento de Scripts em JS para ChatBot',
            'Desenvolvimento de Sites com Vue.js 3',
          ]
        },
      ]
    }
  ]

</script>

<style lang="scss" scoped>
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-size: 1rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  .cargo-periodo {
    color: var(--primary);
  }
  p {
    margin-block-end: 0;
  }
  p::before {
    content: "• ";
  }

  .title {
    margin: 0 auto;
  }
  .jobDescContainer {
    color: var(--text);
    border: 5px dotted var(--primary);
    border-left: none;
    border-right: none;
    padding: 1rem;
    margin-bottom: 5%;
  }
  .cargo-periodo {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0.5rem 1rem;
  }
  .desc {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-left: 1rem;
    margin-top: 1rem;

    opacity: 0.8;
  }
  .experiencias {
    margin-top: 1rem;
  }
</style>