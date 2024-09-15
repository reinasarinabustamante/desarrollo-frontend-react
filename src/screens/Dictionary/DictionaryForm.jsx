import React, { useState} from 'react'
import ModalAgregarPalabra from '../../components/ModalAgregarPalabra'
import ModalEliminarPalabra from '../../components/ModalEliminarPalabra'
import ModalTraducir from '../../components/ModalTraducir'
const DictionaryForm = () => {
    
    const [verModalAgregar, setShowModalAgregar]= useState(false)
    const [verModalEliminar, setShowModalEliminar] = useState(false);
    const [verModalTraducir, setShowModalTraducir] = useState(false);
    
    const mostrarModalAgregar=()=>{
        setShowModalAgregar(true);
    }
    const ocultarModalAgregar=()=>{
        setShowModalAgregar(false);
    }
   
    const mostrarModalEliminar = () => {
        setShowModalEliminar(true);
     }
    const ocultarModalEliminar = () => {
        setShowModalEliminar(false);
     }
     const mostrarModalTraducir = () => {
        setShowModalTraducir(true);
     }
    const ocultarModalTraducir= () => {
        setShowModalTraducir(false);
     }

    return (

        <div className="principal">
            <ModalAgregarPalabra visible={verModalAgregar} onClose={ocultarModalAgregar}/>
            <ModalEliminarPalabra visible={verModalEliminar} onClose={ocultarModalEliminar}/>
            <ModalTraducir visible={verModalTraducir} onClose={ocultarModalTraducir}/>
            <h1>DICTIONARY USIP</h1>
            <p> Recuperatorio del módulo-7 ReacJS </p>
            <p>  URL: https://reinasarinabustamante.github.io/desarrollo-frontend-react/dictionary </p>
            <div className="botonesFormIni">
           
            <button onClick={mostrarModalAgregar} >Agregar palabra</button>
            <button onClick={mostrarModalEliminar} >Eliminar palabra</button> <br />
            </div>
            <div className="botonFormIni">
            <button onClick={mostrarModalTraducir} >Traducir</button>
         
            </div>
        </div>

    );
}

export default DictionaryForm