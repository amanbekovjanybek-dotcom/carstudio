import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Privacy from './pages/Privacy/Privacy'
import Contacts from './pages/Contacts/Contacts'
import Configurator from './pages/Configurator/Configurator'
import Catalog from './pages/Catalog/Catalog'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/"             element={<Home />} />
        <Route path="/about"        element={<About />} />
        <Route path="/privacy"      element={<Privacy />} />
        <Route path="/contacts"     element={<Contacts />} />
        <Route path="/configurator" element={<Configurator />} />
        <Route path="/catalog"      element={<Catalog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
