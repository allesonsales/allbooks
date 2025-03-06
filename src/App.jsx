import './App.css'
import ErrorBoundary from './components/errorboundary'
import Search from './components/search'
import Livros from './pages/livros'
import CombinedProvider from './providers/combined/CombinedProvider'
import Favoritos from './pages/favoritos/favoritos'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carrinho from './pages/carrinho/carrinho'
import HomeModal from './components/modalHome/homeModal'
import Modal from './components/modal/modal'
import CardHome from './components/cardhome/cardHome'
import ModalCompra from './components/modalcompra/modalcompra'
import Footer from './components/footer/footer'

function App() {

  return (
    <>
    <ErrorBoundary>
    <Router>
      <CombinedProvider>
        <HomeModal />
        <Modal />
        <Routes>
            <Route path="/" element={<Navigate to="/allbooks" />} />
            <Route path="/allbooks" element={<><Search /><CardHome /><Livros /><Footer/></>} />
            <Route path="/favoritos" element={<><Search /><Favoritos /><Footer/></>} />
            <Route path='/carrinho' element={<><Search /><Carrinho /><ModalCompra/><Footer/></>} />
        </Routes>
      </CombinedProvider>
    </Router>
    </ErrorBoundary>
    </>
  )
}

export default App
