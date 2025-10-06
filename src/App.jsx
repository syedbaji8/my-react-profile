import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfileOverview from './components/ProfileOverview'
import Pagewrapper from './components/Pagewrapper';
import About from './components/About';
import Home from './components/Home';
import Navigationdetails from './components/Navigationdetails';

function App() {
  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path="/" element={<Pagewrapper />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/navigation" element={<Navigationdetails />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
