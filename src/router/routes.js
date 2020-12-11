'use strict'

import Home from 'views/Home'
import SamplePage from 'views/SamplePage'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Sample',
    path: '/sample',
    component: SamplePage
  },
  {
    path: '*',
    redirect: '/'
  }
]

export default routes
