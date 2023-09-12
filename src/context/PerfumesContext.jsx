
import {createContext,useState,useEffect} from 'react'
import {perfumes as data} from '../data'
import {noticias as dataN} from '../data'

export const PerfumesContext=createContext()

export function PerfumesContextProvider(props) {

  const [noticias,useSet]=useState([])

  

    const [perfumes, setTasks] = useState([])

      useEffect(()=>{
        
        setTasks(data)
       useSet(dataN)

   
      },[])
  
  return (
   <PerfumesContext.Provider value={{
    perfumes,
    noticias
   }}>
    {props.children}
   </PerfumesContext.Provider>
  )
}
