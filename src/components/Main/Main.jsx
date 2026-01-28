import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'


import Home from '../../pages/Home'
import Casa from '../../pages/Casa'
import Beleza from '../../pages/Beleza'
import Eletronicos from '../../pages/Eletronicos'
import Sobre from '../../pages/Sobre'
import Contato from '../../pages/Contato'


function Main() {
  return (
    <main>
      <Container className="py-5">
        <Routes>
           <Route path='/' element={<Home />}></Route>
           <Route path='/casa' element={<Casa />}></Route>
           <Route path='/beleza' element={<Beleza />}></Route>
           <Route path='/eletronicos' element={<Eletronicos />}></Route>
           <Route path='/sobre' element={<Sobre />}></Route>
           <Route path='/contato' element={<Contato />}></Route> 
        </Routes>        
      </Container>
    </main>
  )
}

export default Main
