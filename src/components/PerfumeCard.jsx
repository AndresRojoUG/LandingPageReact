import React, { useState  } from 'react'
import { Button, Snackbar } from '@mui/material';
import { Alert } from '@mui/material';

export default function PerfumeCard({perfume}) {

  const [showAlert, setShowAlert] = useState(false);

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <div className='bg-gray-700 text-white p-4 rounded-3xl relative'>

      <div className='border-solid border-white border border-4 bg-slate-200 rounded-3xl h-64 overflow-hidden'>
      <img className='h-64 w-64 imagenPerfume' src={perfume.url} alt="" />
      </div>
      
    <h1 className=' text-lg font-bold capitalize'>{perfume.nombre}</h1>

    <p className='text-white text-sm'>{perfume.descripcion}</p>
    <p className='text-green-600 text-sm mb-20 mt-4 font-bold ' >${perfume.precio}</p>
     <button  variant="contained" onClick={() => setShowAlert(true)} className='px-2 h-10 rounded-3xl mt-4 bg-blue-700 hover:bg-red-300 absolute bottom-5'>
        Ver mas
      </button>

      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleAlertClose} severity="error">
          PROXIMAMENTE...
        </Alert>
      </Snackbar>
  </div>
  )
}
