import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'


import Home from '../../pages/Home'
import Casa from '../../pages/Casa'
import Sobre from '../../pages/Sobre'
import Contato from '../../pages/Contato'


function Main() {
  return (
    <main>
      <Container className="py-5">
        <Routes>
           <Route path='/' element={<Home />}></Route>
           <Route path='/casa' element={<Casa />}></Route>
           <Route path='/sobre' element={<Sobre />}></Route>
           <Route path='/contato' element={<Contato />}></Route> 
        </Routes>        
      </Container>
    </main>
  )
}

export default Main
