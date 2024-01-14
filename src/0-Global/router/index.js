import { createRouter, createWebHistory } from 'vue-router'

const title = 'João Borba'
const routes = [
  // Home Page
  {
    path: '/',
    name: 'home',
    meta: {
      title: `${ title } : Home`
    },
    component: () => import('../../0-Global/views/HomeView.vue'),
  },
  // Curriculo
  {
    path: "/curriculo/",
    redirect: 'curriculo/home'
  },
  {
    path: '/curriculo/home',
    name: 'home curriculo',
    meta: {
      title: `Currículo : Home`
    },
    component: () => import('../../1-Curriculo/views/HomeView.vue'),
  },
  {
    path: '/curriculo/experiencia',
    name:'experiencia',
    meta: {
      title: `Currículo : Experiência`
    },
    component: () => import('../../1-Curriculo/views/ExperienciaView.vue'),
  },
  {
    path: '/curriculo/conhecimentos',
    name:'conhecimentos',
    meta: {
      title: `Currículo : Conhecimentos`
    },
    component: () => import('../../1-Curriculo/views/ConhecimentosView.vue'),
  },
  // Financeiro
  {
    path: "/financeiro/",
    redirect: 'financeiro/home'
  },
  {
    path: '/financeiro/home',
    name: 'financeiro curriculo',
    meta: {
      title: `Financeiro : Home`
    },
    component: () => import('../../2-Financeiro/views/HomeView.vue'),
  },
  // Not Found
  {
    path: "/:catchAll(.*)",
    redirect: '/404'
  },
  {
    path: '/404',
    name: 'notfound',
    meta: {
      title: `${ title } : Not Found`
    },
    component: () => import('../../0-Global/views/NotFoundView.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router