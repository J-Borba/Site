<template>
  <ViewsContainer>
    <div class="title">
      <h4>Experiências Profissionais</h4>
    </div>
    <div class="jobDescContainer" :id="job.sigla" v-for="job in jobs" :key="job.id">
      <h5>{{ job.empresa }}</h5>
      <div class="experiencias" v-for="experiencia in job.experiencias" :key="experiencia.cargo">
        <div class="cargo-periodo">
          <p>{{ experiencia.cargo }}</p>
          <p>{{ experiencia.periodo }}</p>
        </div>
        <div class="desc">
          <p v-for="line in experiencia.descricao" :key="line">{{ line }}</p>
        </div>
      </div>
    </div>
  </ViewsContainer>
</template>

<script setup>
import ViewsContainer from '@/components/ViewsContainer.vue';

  
  const jobs = [
    {
      id: 1,
      empresa: "Associação Brasileira Beneficente de Reabilitação (ABBR)",
      sigla: 'ABBR',
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
          periodo: "fev/2023 - jun/2023",
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
  p {
    margin-block-end: 0;
  }
  .cargo-periodo {
    color: var(--primary);
  }
  .title {
    margin: 0 auto;
  }
  .jobDescContainer {
    color: var(--text);
    padding: 1rem;
    margin-bottom: 5%;

    &:not(:last-child) {
      border-bottom: 2px solid var(--primary);
    }
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
</style>