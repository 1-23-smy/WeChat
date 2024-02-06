
import './App.css';
import Navigation from './components/shared/Navigation/Navigation.jsx';
import Home from './pages/Home/Home.jsx';
import Register from "../src/pages/Register/Register.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login.jsx';
const App = () => {
  return (
    
    <Router>
      <Navigation/>
      <Routes>
        <Route path='/' exact element={<Home />}/>
        
      <Route path='/register' exact element={<Register/>}/>
      <Route path='/login' exact element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App