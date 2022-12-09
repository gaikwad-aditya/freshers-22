import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { CreateBlog, Footer, Home, Login, Navbar, Profile, Register } from './components';

function App() {
  return (
    <Router>
      <div>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/createBlog' element={<CreateBlog/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
