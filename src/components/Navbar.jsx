import React from 'react'

export default function Navbar() {
  return (
<>

<nav className="navbarComponent bg-zinc-900">
<div  className='logoNavbar container ml-6  flex items-center '>
    <img className='h-12' src="https://www.shutterstock.com/shutterstock/photos/1814941448/display_1500/stock-vector-a-classical-bottle-of-perfume-logo-floral-design-concept-1814941448.jpg" alt="Imagen de logo" />
    <h2>PERFUMES COLLECTION</h2>
</div>
    <div className='listaItems container text-lg flex items-center justify-center'   >
    <ul>
    <li><a href="#incio"> Inicio</a></li>
    <li > <a href='#acerca-de'>Acerca de</a></li>
    <li><a  href='#contacto'>Contacto</a></li>
</ul>
    </div>


   </nav>

  

   </>
  )
}
