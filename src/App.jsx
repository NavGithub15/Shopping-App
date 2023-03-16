import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import ShopNow from './pages/ShopNow/ShopNow';

function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shopNow" element={<ShopNow />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
