import Public from '@/pages/layouts/Public.vue'
import Home from '@/pages/public/Home.vue'
import Pagina404 from '@/pages/public/404'
import Pagina500 from '@/pages/public/500'

export default [
  {
    path: '/',
    component: Public,
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
      },

      {
        path: '404',
        name: '404',
        component: Pagina404,
      },
      {
        path: '500',
        name: '500',
        component: Pagina500,
      },
    ],
  },
]
