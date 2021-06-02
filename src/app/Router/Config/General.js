//
// Router general config
//
import Homepage from 'pages/Homepage/Loadable';
import Test from 'pages/Test';

export default [
  {
    name: 'Homepage',
    path: '/',
    component: Homepage,
    exact: true,
    requiresAuth: false,
  },
  {
    name: 'Test',
    path: '/test',
    component: Test,
    exact: true,
    requiresAuth: false,
  },
];
