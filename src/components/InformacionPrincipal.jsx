import React from 'react'

export default function InformacionPrincipal() {
  const scrollToSection = () => {
    const section = document.getElementById('acerca-de');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
    <div  id='incio'  className='contenedorPrincipal '>
        
        <div className='VideoInfo '>
        <video width="1160" height="315" loop  autoPlay muted>
    <source src="src\assets\vs.mp4" type="video/mp4" />
    Tu navegador no admite la reproducción de videos.
  </video>
        </div>

        <div className='textInf text-white '>

            <h1 className='text-4xl font-bold'>Coleccion de perfumes</h1><br />
            <h2 className='text-xl'>Conoce acerca de los perfumes</h2>
            <button onClick={scrollToSection} className='mt-2 bg-gradient-to-br from-black via-zinc-700 to-zinc-400 w-40 h-14 rounded-3xl'>Conocer mas</button>
        </div>
        </div>
   
    </>
  )
}
