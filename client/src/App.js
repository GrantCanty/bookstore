import {Route, Routes} from 'react-router-dom';
import Sidebar from './assets/sidebar';

function App() {
  return (
      <Routes>
        <Route element={<Sidebar />}>
          <Route path='/' element={""} />
          <Route path='/edit' element={""} />
          <Route path='/new' element={""} />
          <Route path='/delete' element={""} />
          <Route path='/get' element={""} />
        </Route>
      </Routes>
  );
}

export default App;
