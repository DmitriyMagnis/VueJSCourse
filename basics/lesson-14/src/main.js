import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: {
        default: TeamsList,
        footer: UsersFooter, // Named view for footer
      },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true, // Enable passing route params as props
        },
      ],
    },
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter, // Named view for footer
      },
      beforeEnter(to, from, next) {
        console.log('Before entering /users route:', to, from);
        next();
      },
    },

    { path: '/:notFound(.*)', redirect: '/teams' },
  ],
  history: createWebHistory(),
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  console.log('Global beforeEach:', to, from);
  next();
});
router.afterEach((to, from) => {
  console.log('Global afterEach:', to, from);
});

const app = createApp(App);

app.use(router);

app.mount('#app');
