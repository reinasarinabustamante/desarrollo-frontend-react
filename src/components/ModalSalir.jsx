import React from "react";
import { motion } from 'framer-motion'
const ModalSalir = ({ visible, mensaje, onClose,onOut }) => {
  if (!visible) {
    return null;
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
        <div>
          <p>{mensaje}</p>
          <button  type="button" onClick={onOut}>
            Presione para salir
          </button>
        </div>
        <button className="close-btn-success" onClick={onClose}>
          X
        </button>
      </motion.div>
    </div>
  );
};

export default ModalSalir;
