import React from 'react'
import Navbar from './components/Navbar'
import InformacionPrincipal from './components/InformacionPrincipal'
import ContenitoMain from './components/contenitoMain'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

export default function App() {
  return (
    <>

    <Navbar/>
    <InformacionPrincipal/>
   
<div className='mainSide'>
<main className='mt-10 contenidoMain'>
      <ContenitoMain/>
    </main>

    <div className='mt-10 sideBar'>
      <Sidebar/>
    </div>

</div>
    
<Footer/>
    </>
  )
}
