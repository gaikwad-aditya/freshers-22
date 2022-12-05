import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { CreateBlog, Footer, Home, Login, Navbar, Register } from './components';

function App() {
  return (
    <Router>
      <div >
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/createBlog' element={<CreateBlog/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
