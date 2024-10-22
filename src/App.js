
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/web/HomePage';
import LayoutWeb from './layout/LayoutWeb';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' element={<LayoutWeb />} >
           <Route path='' element={<HomePage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
