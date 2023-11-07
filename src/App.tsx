import './App.css'
import "./css/Main.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import Main from './pages/main/Main'

function App() {

  return (<div className='app'>
    <Sidebar />
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route index element={<Main/>}/>
          <Route path='/calendar' element={<Main/>}/>
          <Route path='/documents' element={<Main/>}/>
          <Route path='/reports' element={<Main/>}/>
          <Route path='/users' element={<Main/>}/>
        </Routes>  
      </BrowserRouter>
    </div>
  </div>
  )
}

export default App
