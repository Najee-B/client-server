
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import {Routes,Route} from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>
     <Routes>
      <Route path="/" exact element={<Home/>}></Route>
      <Route path="/login" exact element={<Login/>}></Route>
      <Route path="/register" exact element={<Register/>}></Route>
     </Routes> 
    </>
  )
}

export default App
