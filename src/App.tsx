import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "./css/Sidebar.css"
import "./css/Main.css"
import "./css/Content.css"
import "./css/Login.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {

  return (<div>
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
