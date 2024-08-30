import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {setUser} from '../../redux/access/accessActions'

const WelcomeForm = () => {
    const userState = useSelector (state => state.user);
    const formState = useSelector(state=>state.form);
    const dispatch = useDispatch();
    useEffect(()=>{
       dispatch(
        setUser("sarina.bustamante")
       )
    },[]);

    return (
        <div>
            <h1>Componente Bienvenido</h1>
            <h4>{userState.user}</h4>
            <p>------------------------------------</p>
            <h3>{formState.formData.username}</h3>  
            <h3>{formState.passwordDefine}</h3>  
                    
        </div>
         
    );
}

export default WelcomeForm