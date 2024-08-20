
import './App.css';
import Navbar from './layout/Navbar';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Category from './components/Category';
import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (

    <Router>
    <div className="App">
    <Navbar />
 <Routes>
  <Route exact path='/' element={<Home />} />
  <Route exact path='/Gallery' element={<Gallery />} />
  <Route exact path='/Category' element={<Category />} />
  <Route exact path='/Register' element={<Register />} />
  <Route exact path='/Login' element={<Login />} />
  
 </Routes>
    </div>
    </Router>
  );
}

export default App;