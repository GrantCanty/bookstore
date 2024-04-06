import {Route, Routes} from 'react-router-dom';
import Sidebar from './assets/sidebar';
import Get from './pages/get';
import Available from './pages/available';

function App() {
  return (
      <Routes>
        <Route element={<Sidebar />}>
          <Route path='/' element={""} />
          <Route path='/edit' element={""} />
          <Route path='/new' element={""} />
          <Route path='/delete' element={""} />
          <Route path='/get' element={<Get />} />
          <Route path='/get/available' element={<Available />} />
          <Route path='/get/byauthor' element={''} />

          
          
        </Route>
      </Routes>
  );
}

export default App;
