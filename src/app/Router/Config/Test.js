//
// Router test config
//
import Button from 'pages/Test/Button';
import Alert from 'pages/Test/Alert';

export default [
  {
    name: 'TestButton',
    path: '/test/button',
    component: Button,
    exact: true,
    requiresAuth: false,
  },
  {
    name: 'TestAlert',
    path: '/test/alert',
    component: Alert,
    exact: true,
    requiresAuth: false,
  },
];
