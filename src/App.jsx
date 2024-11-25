import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './pages/DefaultLayout'
import Home from './pages/Homepage'
import About from './pages/About'
import Posts from './pages/Posts'
import './App.css'

function App() {

  return (

    <>

      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/posts' element={<Posts />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App
