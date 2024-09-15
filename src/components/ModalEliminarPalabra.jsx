import React, { useState } from 'react'
import { motion } from "framer-motion"
import { useDispatch, useSelector } from 'react-redux';
import { eliminarPalabraAction } from '../redux/dictionary/dictionaryActions';

const ModalEliminarPalabra = ({visible, onClose}) => {

   const [palabrAEliminar, setDeletePalabra] = useState('');
   const dispatch = useDispatch();
   const palabras = useSelector(state => state.dictionary.palabras);

   const eliminarPalabra = (event) => {
      event.preventDefault();
      const palabra = palabras.find((pal) =>
         pal.espaniol === palabrAEliminar||
         pal.ingles === palabrAEliminar ||
         pal.portugues === palabrAEliminar
      )
      if (palabra) {
         dispatch(
            eliminarPalabraAction(palabrAEliminar)
         )
         alert('La palabra fue eliminada')
      }
      else {
         alert('La palabra no se  encuentra en el diccionario');
      }
   }

   if (!visible) {
      return null;
   }

   return (
      <div className="modal-overlay">
         <motion.div
            className="notification-success"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
         >
            <h1>Traductor USIP</h1>
            <h3>Que palabra desea eliminar del diccionario. Puede escribir su palabra en ESPANHOL, INGLES O PORTUGUES</h3>
            <form onSubmit={eliminarPalabra}>
               <div>
                  <label htmlFor="palabra">Palabra:</label>
                  <input type="text" id='palabra' name='palabra' value={palabrAEliminar}
                     onChange={(event) => setDeletePalabra(event.target.value)} required />
               </div>
               
               <button type='submit'>Eliminar</button>
            </form>
            <button type="button" className="close-btn-success" onClick={onClose}>X</button>
         </motion.div>
      </div>
   )
}

export default ModalEliminarPalabra
