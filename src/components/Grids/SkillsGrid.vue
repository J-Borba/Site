<template>
  <div class="skills-grid">
    <h2 class="title-skills-grid-container">
      Skills
    </h2>
    <div class="icon-skills-grid-container">
      <font-awesome-icon :icon="['fab', 'square-js']" size="2xl" class="skillsIcon" />
    </div>
    <div class="icon-skills-grid-container">
      <font-awesome-icon :icon="['fab', 'html5']" size="2xl" class="skillsIcon"/>
    </div>
    <div class="icon-skills-grid-container">
      <font-awesome-icon :icon="['fab', 'sass']" size="2xl" class="skillsIcon"/>
    </div>
    <div class="icon-skills-grid-container">
      <font-awesome-icon :icon="['fab', 'vuejs']" size="2xl" class="skillsIcon"/>
    </div>
    <div class="icon-skills-grid-container">
      <font-awesome-icon :icon="['fab', 'react']" size="2xl" class="skillsIcon"/>
    </div>
    <div class="icon-skills-grid-container">
      <font-awesome-icon :icon="['fab', 'java']" size="2xl" class="skillsIcon"/>
    </div>
    <div class="icon-skills-grid-container">
      <font-awesome-icon :icon="['fab', 'git-alt']" size="2xl" class="skillsIcon"/>
    </div>
    <div class="icon-skills-grid-container">
      <font-awesome-icon :icon="['fab', 'square-github']" size="2xl" class="skillsIcon"/>
    </div>

    <div class="desc-skills-grid-container">
      <h5>Descrição das Skills</h5>
      <router-link to="conhecimentos">
        <font-awesome-icon :icon="['fas', 'circle-info']" size="xl" style="color: var(--secondary)" />
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.skills-grid {
    display: grid;
    gap: 2rem;
    justify-items: center;

    grid-template-areas: 
      "title title title title title title title title"
      "js html sass vue react java git github"
      "desc desc desc desc desc desc desc desc";

    .title-skills-grid-container {
      grid-area: title;
    }
    .icon-skills-grid-container {
      .skillsIcon {
        color: var(--primary);
        font-size: 3rem;
      }
      &:nth-child(2) {
        grid-area: js;
      }
      &:nth-child(3) {
        grid-area: html;
      }
      &:nth-child(4) {
        grid-area: sass;
      }
      &:nth-child(5) {
        grid-area: vue;
      }
      &:nth-child(6) {
        grid-area: react;
      }
      &:nth-child(7) {
        grid-area: java;
      }
      &:nth-child(8) {
        grid-area: git;
      }
      &:nth-child(9) {
        grid-area: github;
      }
    }
    .desc-skills-grid-container {
      text-align: center;
      grid-area: desc;
    }
  }
  @media only screen and (max-width: 1168px) {
    .skills-grid {
      grid-template-areas: 
        "title title title title"
        "js html sass vue"
        "react java git github"
        "desc desc desc desc";
    }
    .skillsIcon {
      font-size: 2rem !important;
    }
  }
</style>