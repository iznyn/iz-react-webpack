//
// Router test config
//
import Button from 'pages/Test/Button';
import Alert from 'pages/Test/Alert';
import Confirm from 'pages/Test/Confirm';

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
  {
    name: 'TestConfirm',
    path: '/test/confirm',
    component: Confirm,
    exact: true,
    requiresAuth: false,
  },
];
