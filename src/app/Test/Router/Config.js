//
// Router test config
//
import Button from 'pages/Test/Button';
import Alert from 'pages/Test/Alert';
import AlertResult from 'pages/Test/Alert/Result';
import Confirm from 'pages/Test/Confirm';
import LoaderApp from 'pages/Test/Loader/App';
import Request from 'pages/Test/Request';
import RequestDetail from 'pages/Test/Request/Detail';
import RequestLoadMore from 'pages/Test/Request/LoadMore';
import RequestScrollLoadMore from 'pages/Test/Request/ScrollLoadMore';
import RequestPagination from 'pages/Test/Request/Pagination';
import FormLogin from 'pages/Test/Form/Login';

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
    name: 'TestRequestDetail',
    path: '/request/detail',
    component: RequestDetail,
    exact: true,
    requiresAuth: false,
  },
  {
    name: 'RequestLoadMore',
    path: '/request/load-more',
    component: RequestLoadMore,
    exact: true,
    requiresAuth: false,
  },
  {
    name: 'RequestScrollLoadMore',
    path: '/request/scroll-load-more',
    component: RequestScrollLoadMore,
    exact: true,
    requiresAuth: false,
  },
  {
    name: 'RequestPagination',
    path: '/request/pagination',
    component: RequestPagination,
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
  {
    name: 'TestFormLogin',
    path: '/form/login',
    component: FormLogin,
    exact: true,
    requiresAuth: false,
  },
];
