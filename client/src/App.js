import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Register from './pages/Register'
import Login from './pages/Login'
import Chat from './pages/Chat'
import Navbar from './components/Navbar';
import SetAvatar from './components/SetAvatar';
function App() {
  const logout = ()=>{
    localStorage.removeItem('chat-app-user');
  }
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path ="/register" element={<Register/>}/>
        <Route path ="/Login" element={<Login/>}/>
        <Route path ="/Logout" element={logout()}/>
        <Route path ="/" element={<Chat/>}/>
        <Route path ="/setavatar" element={<SetAvatar/>}/>
      </Routes>
    </Router>
  );
}

export default App;
