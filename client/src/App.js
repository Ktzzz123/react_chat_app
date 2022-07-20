import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Register from './pages/Register'
import Login from './pages/Login'
import Chat from './pages/Chat'
function App() {
  return (
    <Router>
      <Routes>
        <Route path ="/register" element={<Register/>}/>
        <Route path ="/Login" element={<Login/>}/>
        <Route path ="/" element={<Chat/>}/>
      </Routes>
    </Router>
  );
}

export default App;
