import React, { useContext } from 'react'
import { PerfumesContext } from '../context/PerfumesContext'
import PerfumeCard from './PerfumeCard'


export default function ContenitoMain() {

  

  const {perfumes}=useContext(PerfumesContext)
  if(perfumes.length===0){
    return <div className='text-white text-center text-4xl font-bold'>No hay informacion</div>
  }

  return (
    <>
    <div id='acerca-de'className=' flex justify-center mt-4 mb-4' ><h2 className='font-bold text-3xl '>COLECCION DE PERFUMES</h2></div>
    
    <div className='grid grid-cols-3 gap-2 ml-10' >{
      perfumes.map((perfume)=>(
      <PerfumeCard key={perfume.id} perfume={perfume} />
      ))
    }
    </div>
    </>
  )
}
