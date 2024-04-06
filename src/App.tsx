import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '@components/layouts';
import { publicRoutes } from '@routes/index';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout || DefaultLayout;
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
          })}
        </Routes>
      </div>
    </Router>
  );
}
