import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { setDictionary } from '../../redux/dictionary/dictionaryActions'

const DictionaryForm = () => {
    //const userState = useSelector (state => state.user);
    //const formState = useSelector(state=>state.form);
    const dictionaryState = useSelector(state => state.dictionary)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            //setUser("sarina.bustamante")
        )
    }, []);

    return (
        <div>
            <h1>DICTIONARY USIP</h1>
            <p> Este modulo(diccionario) corresponde al recuperatorio del módulo-7 ReacJS URL: </p>
            <div className="container">
            <form onSubmit={handleSubmit}>
            <button type="button" >Agregar palabra</button>
            <button type="button" >Eliminar palabra</button>
            <button type="button" >Traducir</button>
            </form>
            </div>
        </div>

    );
}

export default DictionaryForm