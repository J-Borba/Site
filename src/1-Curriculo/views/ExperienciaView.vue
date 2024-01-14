<template>
  <ViewsContainer>
    <div class="title">
      <h4>Experiências Profissionais</h4>
    </div>
    <div class="jobDescContainer" :id="job.sigla" v-for="job in jobs" :key="job.id">
      <h5 class="nomeEmpresa">{{ job.empresa }}</h5>
      <div class="experiencias" v-for="experiencia in job.experiencias" :key="experiencia.cargo">
        <div class="cargo-periodo">
          <p>{{ experiencia.cargo }}</p>
          <p>{{ experiencia.periodo }}</p>
        </div>
        <div class="desc">
          <p v-for="line in experiencia.descricao" :key="line">{{ line }}</p>
        </div>
      </div>
      <div class="line" v-if="jobs.length > 1"></div>
    </div>
  </ViewsContainer>
</template>

<script setup>
  import ViewsContainer from '../components/ViewsContainer.vue';
  import '../style/global.scss'

  const jobs = [
    {
      id: 1,
      empresa: "Associação Brasileira Beneficente de Reabilitação (ABBR)",
      sigla: 'ABBR',
      experiencias: [
        {
          cargo: "Estagiário - Analista",
          periodo: "Mar/2022 - Fev/2023",
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
          periodo: "Fev/2023 - Jun/2023",
          descricao: [
            'Todas as funções citadas acima como estagiário',
            'Desenvolvimento de ChatBot com TakeBlip',
            'Desenvolvimento de Scripts em JS para ChatBot',
            'Desenvolvimento de Sites com Vue.js 3',
          ]
        },
      ]
    },
    {
      id: 2,
      empresa: "TIPLAN",
      sigla: 'TIPLAN',
      experiencias: [
        {
          cargo: "Estagiário - Desenvolvimento",
          periodo: "Out/2023 - Atualmente",
          descricao: [
            '.NET C#',
            'Vue.js 2',
          ]
        },
      ]
    },
  ]

</script>

<style lang="scss" scoped>
  p {
    margin-block-end: 0;
  }
  .cargo-periodo {
    color: var(--primary);
  }
  .title {
    margin: 2rem auto 0 auto;
  }
  .jobDescContainer {
    display: flex;
    flex-direction: column;
    min-width: 40rem;
    color: var(--text);
    padding: 1rem;
    margin-bottom: 5%;

  }
  .nomeEmpresa {
    border-bottom: 1px solid var(--primary);
    display: flex;
    width: fit-content;
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
    p::before {
      content: "• ";
    }
  }
  .experiencias {
    margin-top: 1rem;
  }
  .line {
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--secondary);
    margin-top: 2rem;
  }
</style>