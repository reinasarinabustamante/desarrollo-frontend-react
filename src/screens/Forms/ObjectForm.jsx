
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  {setObject} from '../../redux/object/objectActions'

const ObjectForm = () => {
    const objectState = useSelector (state => state.object);
    const dispatch = useDispatch();

    useEffect(()=>{
       dispatch(
        setObject(
            [{ id: "0001", descripcion: " cero cero cero uno" }])
       )
    },[]);

    return (
        <div>
            <h1>Componente Bienvenido*************** </h1>
            <h4>{JSON.stringify(objectState.object)}</h4>
        </div>
         
    );
}

export default ObjectForm