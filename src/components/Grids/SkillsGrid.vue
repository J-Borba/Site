<template>
  <div class="skills-container">
    <h2 class="title-skills-container-container">
      Skills
    </h2>
    <div class="icon-skills-container">
      <div class="icon">
        <font-awesome-icon :icon="['fab', 'square-js']" size="2xl" />
      </div>
      <div class="icon">
        <font-awesome-icon :icon="['fab', 'html5']" size="2xl" />
      </div>
      <div class="icon">
        <font-awesome-icon :icon="['fab', 'sass']" size="2xl" />
      </div>
      <div class="icon">
        <font-awesome-icon :icon="['fab', 'vuejs']" size="2xl" />
      </div>
      <div class="icon">
        <font-awesome-icon :icon="['fab', 'react']" size="2xl" />
      </div>
      <div class="icon">
        <font-awesome-icon :icon="['fab', 'java']" size="2xl" />
      </div>
      <div class="icon">
        <font-awesome-icon :icon="['fab', 'git-alt']" size="2xl" />
      </div>
      <div class="icon">
        <font-awesome-icon :icon="['fab', 'square-github']" size="2xl" />
      </div>
    </div>

    <div class="desc-skills-container-container">
      <h5>Descrição das Skills</h5>
      <router-link to="conhecimentos">
        <font-awesome-icon :icon="['fas', 'circle-info']" size="xl" style="color: var(--secondary)" />
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.skills-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    justify-items: center;
    text-align: center;

  }
  .icon-skills-container {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
    padding: 3rem 0;
  }

  @media only screen and (max-width: 1168px) {
    .icon-skills-container {
      gap: 1.2rem;
      padding: 2rem 0;
      div{
        width: 15%;
      }
    }
  }
</style>