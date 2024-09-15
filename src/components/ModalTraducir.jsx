import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { useSelector } from 'react-redux';

const ModalTraducir= ({ visible, onClose }) => {

   const [palabrABuscar, setpalabrABuscar] = useState('');

   const [idiomaSeleccionado,  setIdiomaSeleccionado] = useState('espaniol');

   const [resultado, setResultado] = useState('');

   const palabras = useSelector(state => state.dictionary.palabras);

   useEffect(() => {
      setpalabrABuscar('');
      setIdiomaSeleccionado('espaniol');
      setResultado('');
   }, [visible])

   const buscarPalabra = (event) => {
      event.preventDefault();
      const palabra = palabras.find((pal) =>
         pal.espaniol === palabrABuscar||
         pal.ingles === palabrABuscar ||
         pal.portugues === palabrABuscar
      )

      if (palabra) {
         setResultado(palabra[idiomaSeleccionado])
      }
      else {
         alert('Palabra no encontrada');
      }
   }

   const resultadoChange = (event) => {
      setResultado(event.target.value);
   };

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
            <h1>Traductor  USIP</h1>
            <h3>Que palabra decea traducir en el diccionario </h3>
            <h3>Agregue su palabra y despues el idioma de traduccion</h3>
            <form onSubmit={buscarPalabra}>
               <div>
                  <label htmlFor="palabra">Palabra a traducir</label>
                  <input
                     type="text"
                     value={palabrABuscar}
                     onChange={(e) => setpalabrABuscar(e.target.value)}
                  />
               </div>
               <div>
                  <label>Seleccionar idioma:</label>
                  <select
                     value={idiomaSeleccionado}
                     onChange={(e) => setIdiomaSeleccionado(e.target.value)}
                  >
                     <option value="espaniol">Español</option>
                     <option value="ingles">Ingles</option>
                     <option value="portugues">Portugués</option>
                  </select>
               </div>
               <textarea style={{ width: '300px', height: '70px' }} onChange={resultadoChange} value={resultado} name="resultado" id="resultado"></textarea>
               <br /><br />
               <button type='submit'>Traducir</button>
            </form>
            <button type="button" className="close-btn-success" onClick={onClose}>X</button>
         </motion.div>
      </div>
   )
}

export default ModalTraducir
