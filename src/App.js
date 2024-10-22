
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/web/HomePage';
import LayoutWeb from './layout/LayoutWeb';
import AboutUsPage from './pages/web/AboutUsPage';
import { ROUTES } from './config/routing';
import ServicePage from './pages/web/ServicePage';
import BlogPage from './pages/web/BlogPage';
import ContacPage from './pages/web/ContacPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' element={<LayoutWeb />} >
           <Route path='' element={<HomePage/>} />
           <Route path={`${ROUTES.Aboutus}`} element={<AboutUsPage/>} />
           <Route path={`${ROUTES.Services}`} element={<ServicePage/>} />
           <Route path={`${ROUTES.Blog}`} element={<BlogPage/>} />
           <Route path={`${ROUTES.Contact}`} element={<ContacPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
