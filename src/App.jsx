import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom';
import ProfileOverview from './components/ProfileOverview'
import Maindetails from './components/Maindetails';
import About from './components/About';
import Home from './components/Home';
import Navigationdetails from './components/Navigationdetails';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            {/* <Route path="/" element={<Maindetails />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/navigation" element={<Navigationdetails />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
