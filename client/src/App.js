import {Route, Routes} from 'react-router-dom';
import Sidebar from './assets/sidebar';
import Home from './pages/home';
import Recent from './pages/recent';

function App() {
  return (
      <Routes>
        <Route element={<Sidebar />}>
          <Route path='/' element={<Home />} />
          <Route path='/recent' element={<Recent />} />

        </Route>
      </Routes>
  );
}

export default App;
