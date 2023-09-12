import React, { useContext, useEffect, useState } from 'react'
import { PerfumesContext } from '../context/PerfumesContext'

export default function Sidebar() {
  

  const {noticias}=useContext(PerfumesContext)
  return (
<>

    <div className='linea-vertical  items-center flex flex-col ' ><h1 className='font-bold text-3xl mb-5 mt-4'>NOTICIAS</h1>
    
    { noticias.map((noticia)=>(

      <div className=' tarjetasNoticias mb-3 h-58 bg-white text-black border-2 border-black p-4 rounded-3xl relative '  key={noticia.id}>

      <div className='border-solid border-white border border-4 bg-slate-200 rounded-3xl h-20 overflow-hidden'>
      <img className='h-20 w-64 w-full h-auto' src={noticia.image}alt="" />
      </div>
      
      <h1 className=' text-xs font-bold capitalize'>{noticia.title}</h1>
      
      <p className='text-gray-500 text-sm'>{noticia.description}</p>
      <p className='text-gray-500 text-sm mb-10 mt-4'>publicado el {noticia.publishedAt}</p>
      <button className='bg-red-700 px-2 rounded-md mt-4 hover:bg-red-300 absolute bottom-5' >ver mas</button>
      </div>
      ))
    }
  
    
    </div>

    </>
  )
}
