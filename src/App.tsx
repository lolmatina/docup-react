import './App.css'
import "./css/Main.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import Main from './pages/main/Main'
import Users from './pages/users/Users'
import Documents from './pages/documents/Documents'
import Constructor from './pages/constructor/Constructor'

function App() {

  return (<div className='app'>
    <Sidebar />
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route index element={<Main/>}/>
          <Route path='/calendar' element={<Main/>}/>
          <Route path='/documents' element={<Documents/>}/>
          <Route path='/reports' element={<Main/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/constructor' element={<Constructor/>}/>
        </Routes>  
      </BrowserRouter>
    </div>
  </div>
  )
}

export default App
