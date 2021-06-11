//
// Router test config
//
import Button from 'pages/Test/Button';
import Alert from 'pages/Test/Alert';
import AlertResult from 'pages/Test/Alert/Result';
import Confirm from 'pages/Test/Confirm';
import LoaderApp from 'pages/Test/Loader/App';

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
    name: 'TestAlertResult',
    path: '/test/alert/result',
    component: AlertResult,
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
  {
    name: 'TestLoaderApp',
    path: '/test/loader/app',
    component: LoaderApp,
    exact: true,
    requiresAuth: false,
  },
];
