import ProductDetailPage from '@features/Products/pages/ProductDetailPage';
import ErrorPage from '@features/Error/pages/ErrorPage';
import { ProductsPage } from '@features/Products';
import { HomeLayout } from '@components/layouts';
import { HomePage } from '@features/Home';
import Payment from '@features/Payment';
import Cart from '@features/Cart';
import User from '@features/User';

// Public Routes
const publicRoutes = [
  { path: '/', component: HomePage, layout: HomeLayout },
  { path: 'products', component: ProductsPage },
  { path: 'products/:id', component: ProductDetailPage },
  { path: 'cart', component: Cart },
  { path: 'payment', component: Payment },
  { path: 'user', component: User },
  { path: '*', component: ErrorPage },
];

const privateRoutes = [{ path: '/products', component: ProductsPage }];

export { privateRoutes, publicRoutes };
