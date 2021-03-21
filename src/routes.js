import React from 'react';

const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true, name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
