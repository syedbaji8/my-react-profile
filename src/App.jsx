import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfileOverview from './components/ProfileOverview'
import Maindetails from './components/Maindetails';
import About from './components/About';
import Home from './components/Home';
import Navigationdetails from './components/Navigationdetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path="/" element={<Maindetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/navigation" element={<Navigationdetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
