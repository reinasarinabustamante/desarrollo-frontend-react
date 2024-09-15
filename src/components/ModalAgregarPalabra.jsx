import React from "react";
import { motion } from 'framer-motion'
import useForm  from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { adicionarPalabras } from "../redux/dictionary/dictionaryActions";


const ModalAgregarPalabra = ({ visible, onClose }) => {
  if (!visible) {
    return null;
  }
const [values, handleChange]=useForm({
espaniol:'',
ingles:'',
portugues:''

})

const dispatch=useDispatch();
const guardarPalabras=(event)=>{
  event.preventDefault();
  dispatch(adicionarPalabras(values));
  onClose();
  alert('Palabras guardadas')
}


  return (
    <div className="modal-overlay">
      <motion.div
        className="notification-success"
        // className={typeNotification}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>TRADUCTOR USIP</h1>
        <form onSubmitCapture={guardarPalabras}>
         
          <label htmlFor="espaniol">Español:</label>
          <input type="text" name="espaniol" id="espaniol" value={values.espaniol} onChange={handleChange} required/><br /><br />
          <label htmlFor="ingles">Inglés:</label>
          <input type="text" name="ingles" id="ingles" value={values.ingles}  onChange={handleChange} required/><br /><br />
          <label htmlFor="portugues">Portugués</label>
          <input type="text" name="portugues" id="portugues" value={values.portugues}  onChange={handleChange}  required/><br /><br />
      
          <button  type="submit" >Agregar</button>
       
        </form>
       <button type="button" className="close-btn-success" onClick={onClose}>X</button>
        </motion.div>
    </div>
  );
};

export default ModalAgregarPalabra;
