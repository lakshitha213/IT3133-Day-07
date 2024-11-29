import './App.css';
import{BrowserRouter as Router , Routes, Route, Link,NavLink} from 'react-router-dom' ;
import Home from './Component/Home';
import Contactus from './Component/Contactus';
import Aboutus from './Component/AboutUs';
import Login from './Component/Login';
import Dasboard from './Component/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/dash">Dasboard</Link></li>
        </ul>
      </nav>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/contact' element={<Contactus/>}/>
          <Route path='/about' element={<Aboutus/>}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/dash' element={<Dasboard/>}/>
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;