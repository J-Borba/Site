<template>
  <h2>Projetos</h2>
  <div class="github-card-grid">
    <div class="github-card" v-for="repo in repos" :key="repo.id">
      <div class="github-card-content">
        <p class="title">
          <a :href="repo.html_url" target="_blank">
            <div class="title-wrapper">
                <font-awesome-icon :icon="['fas', 'book-bookmark']" class="book-icon"/>
              <span>
                {{ repo.name }}
              </span>
            </div>
          </a>
        </p>
        <p class="desc" v-if="repo.description">
          {{ repo.description }}
        </p>
        <p class="desc" v-if="!repo.description">
          Vazio
        </p>
        <p class="lang" :id="repo.language">
          {{ repo.language }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import api from '@/services/api'

  const repos = ref([])

  async function getRepos() {
    const response = await api.get('/repos?sort=asc')

    if (response) {
      repos.value = JSON.parse(response.request.response)
    }
  }
  onMounted(() => {
    getRepos();
  })
</script>

<style lang="scss" scoped>

  $title-clr: #0969da;
  $vue-clr: #41b883;
  $ts-clr: #3178c6;
  $js-clr: #f1e05a;
  $java-clr: #b07219;
  $border-clr: #b4bac0;
  $book-icon-clr: #768390;
  $card-bg-clr:#22272e;

  #Vue {
    &::before {
      color: $vue-clr;
    }
  }
  #TypeScript {
    &::before {
      color: $ts-clr;
    }
  }
  #JavaScript {
    &::before {
      color: $js-clr;
    }
  }
  #Java {
    &::before {
      color: $java-clr;
    }
  }
  .github-card-grid {
    display: grid;
    gap: 1.5rem;
    margin-top: 2rem;

    grid-template-columns: repeat(3, 1fr);
  }
  .github-card {
    display: flex;
    
    width: 15rem;
    height: 100%;
    padding: 1rem;
    font-size: 0.8rem;

    border-radius: 8px;
    border: 1px solid $border-clr;

    background-color: $card-bg-clr;
  }
  .title {
    span {
      font-size: 1.1rem;
      color: $title-clr;
      font-weight: 400;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .book-icon {
    font-size: 0.9rem;
    color: $book-icon-clr;
  }
  .lang {
    &::before {
      content: '● ';
      font-size: 1.1rem;
    }
  }
  .title-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .desc {
    margin: 0.5rem auto;
  }
  p {
    margin-block-end: 0;
  }
  a:hover {
    opacity: 1 !important;
  }
  @media only screen and (max-width: 1168px) {
    * {
      font-size: 0.875rem !important;
    }
    .github-card-grid {
      grid-template-columns: repeat(1, 1fr);
      margin-bottom: 2rem;
    }
  }
  @media (prefers-color-scheme: light) {
    .github-card {
      background-color: whitesmoke;
    }
  }
</style>