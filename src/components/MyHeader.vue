<template>
  <header>
    <nav class="navbar sticky-top">
      <div class="container-fluid">
        <div class="slideDownContainer justify-content-space-between me-4 ms-4">
          <div class="blankdiv" style="width:1.2rem">
          </div>
          <router-link class="logoRouter" to="/">
            <img src="@/assets/myLogoNoBg.png" class="logo" alt="">
          </router-link>
          <div class="navegacaoBtnContainer">
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span class="baseThemeBtn">
                <font-awesome-icon :icon="['fas', 'circle-chevron-down']"/>
              </span>
            </button>
          </div>
        </div>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" data-bs-dismiss="offcanvas">
          <div class="offcanvas-header">
            <router-link to="/" class="baseThemeBtn">
              <font-awesome-icon :icon="['fas', 'house']"/>
            </router-link>
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Navegação</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-space-between">
              <li class="nav-item">
                <router-link to="/experiencia">
                  Experiência
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/conhecimentos">
                  Conhecimentos
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
</script>

<style lang="scss" scoped>
  ul {
    align-items: center;
  }
  nav {
    a {
      &:not(.router-link-exact-active):hover {
        color: var(--secondary);
      }
      &.router-link-exact-active {
        border-bottom-color: var(--secondary);
        opacity: 1;

        &:hover {
          cursor: not-allowed;
        }
      }
      &:hover {
        opacity: 0.5;
      }
    }
  }
  ul {
    gap: 1rem;
  }
  .offcanvas-body, .offcanvas-header {
    background-color: var(--bg);
    color: var(--text);
  }
  .navbar-toggler {
    border: none;
    padding: 0;
    margin: 0;
  }
  .slideDownContainer {
    display: flex;
    width: 100%;
    align-items: center;
    line-height: 0;
    justify-content: space-between;
    
    animation: slideDown 1s forwards
  }
  .logo {
    width: 6rem;
  }
  .logoRouter {
    border: none;
    &.router-link-exact-active:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 1168px) {
    .logo {
      width: 4rem;
    }
  }
</style>