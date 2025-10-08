import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfileOverview from './components/ProfileOverview'
import About from './components/About';
import Home from './components/Home';
import Navigationdetails from './components/Navigationdetails';

function App() {
  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
