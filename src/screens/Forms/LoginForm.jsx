import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from 'react-redux';
import {saveFormData} from "../../redux/form/formActions";
import { motion } from 'framer-motion';
import ModalInfo from "../../components/ModalInfo";
import ModalSalir from "../../components/ModalSalir";

import { useState } from "react";
import {Link} from "react-router-dom";

const LoginForm = () => {
    const initialValues = {username: '', email: '',password:''};
    const [values, handleChange, resetForm] = useForm(initialValues);
    const [showModalInfo, setShowModalInfo] = useState(false);
    const [showPassword,setShowPassword] = useState(false);
    const [showModalSalir, setShowModalSalir] = useState(false);


    const form = useSelector(state => state.form);
    const dispatch = useDispatch();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        console.log(values.password);
        if (values.password===form.passwordDefine){
            dispatch(saveFormData(values));}
        else{
             showModal();
        }
       
    }

    const hideModalInfo = () => {
        setShowModalInfo(false);
    };

    const hideModalSalir = () => {
        setShowModalSalir(false);
    };
    const handleOutSession = () =>{
      
       //***********Cerrar sesion*************** */
       console.log('handleOutSession************************')
       console.log(initialValues);
       dispatch(saveFormData(initialValues))

       setShowModalSalir(false);
       resetForm(event);

    }
    const showModal = () => {
        setShowModalInfo(true);
    }
    const switchShowPassword = () => 
        setShowPassword(!showPassword);

     const handleLogout = () => {
        setShowModalSalir(true);
     }



    return (
        
        <motion.div
            initial={{opacity: 0, y: -70}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
        >
            <ModalInfo
                visible={showModalInfo}
                message="Password incorrecto"
                onClose={hideModalInfo}
                typeNotification='notification-alert'
            />
            <ModalSalir
                visible={showModalSalir}
                mensaje="Esta seguro de cerrar sesion?"
                onClose={hideModalSalir}
                onOut={handleOutSession}
            />  
            <div className="container">
                <form onSubmit={handleSubmit}>
                    {/**<h5>username: {form.formData.username}</h5>
                    <h5>email: {form.formData.email}</h5>
                    **/}
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type={showPassword?'text':'password'}
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        <button type="button"  onClick={switchShowPassword}>{showPassword ? 'Ocultar' : 'Mostrar'}</button>
                    </div>
                    <div className="button-container">
                    <button type="submit">Submit</button>
                        <Link  className="link" onClick={handleLogout}>Logout</Link>
                         {/** 
                        <button onClick={showModal}>Mostrar Modal</button>
                        */}
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default LoginForm;