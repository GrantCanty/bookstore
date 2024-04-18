import {Route, Routes} from 'react-router-dom';
import Sidebar from './assets/sidebar';
import Home from './pages/home';

function App() {
  return (
      <Routes>
        <Route element={<Sidebar />}>
          <Route path='/' element={<Home />} />
          <Route path='/recent' element={null} />

        </Route>
      </Routes>
  );
}

export default App;
