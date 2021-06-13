//
// Router test config
//
import Button from 'pages/Test/Button';
import Alert from 'pages/Test/Alert';
import AlertResult from 'pages/Test/Alert/Result';
import Confirm from 'pages/Test/Confirm';
import LoaderApp from 'pages/Test/Loader/App';
import Request from 'pages/Test/Request';

export default [
  {
    name: 'TestButton',
    path: '/button',
    component: Button,
    exact: true,
    requiresAuth: false,
  },
  {
    name: 'TestAlert',
    path: '/alert',
    component: Alert,
    exact: true,
    requiresAuth: false,
  },
  {
    name: 'TestAlertResult',
    path: '/alert/result',
    component: AlertResult,
    exact: true,
    requiresAuth: false,
  },
  {
    name: 'TestConfirm',
    path: '/confirm',
    component: Confirm,
    exact: true,
    requiresAuth: false,
  },
  {
    name: 'TestLoaderApp',
    path: '/loader/app',
    component: LoaderApp,
    exact: true,
    requiresAuth: false,
  },
  {
    name: 'TestRequest',
    path: '/request',
    component: Request,
    exact: true,
    requiresAuth: false,
  },
];
