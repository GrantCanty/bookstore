import {Route, Routes} from 'react-router-dom';
import Sidebar from './assets/sidebar';
//import Get from './pages/get';
//import Available from './pages/available';
//import New from './pages/new';
import Home from './pages/home';

function App() {
  return (
      <Routes>
        <Route element={<Sidebar />}>
          {/*<Route path='/' element={""} />
          <Route path='/edit' element={""} />
          <Route path='/new' element={<New />} />
          <Route path='/delete' element={""} />
          <Route path='/get' element={<Get />} />
          <Route path='/get/available' element={<Available />} />
          <Route path='/get/search' element={''} />
  <Route path='/get/recent' element={<Available />} />*/}
          <Route path='/' element={<Home />} />

          
          
        </Route>
      </Routes>
  );
}

export default App;
