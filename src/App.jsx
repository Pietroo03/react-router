import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import DefaultLayout from './pages/DefaultLayout'
import Home from './pages/Homepage'
import './App.css'

function App() {

  return (

    <>

      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App
