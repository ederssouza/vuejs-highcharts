'use strict'

import Home from '@/views/Home'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    path: '*',
    redirect: '/'
  }
]

export default routes
