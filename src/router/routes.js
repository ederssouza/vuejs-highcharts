'use strict'

import Home from 'views/Home'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (sessionStorage.getItem('redirect') !== null) {
        const redirect = sessionStorage.redirect
        delete sessionStorage.redirect
        next(redirect)
      } else {
        next()
      }
    }
  },
  {
    path: '*',
    redirect: '/'
  }
]

export default routes
