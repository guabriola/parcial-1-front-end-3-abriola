import { React } from 'react'; 
import { useState } from 'react';
import  '../styles/Form.css';
import Card from './Card';



function Form(){

const [marca, setMarca] = useState("");
const [modelo, setModelo] = useState("");
const [matricula, setMatricula] = useState("");
const [show, setShow] = useState(false);
const [error, setError] = useState(false);

const onChangeMarca = (e) => setMarca(e.target.value.trimStart());
const onChangeModelo = (e) => setModelo(e.target.value.trimStart());
const onChangeMatricula = (e) => setMatricula(e.target.value.trimStart());

const onClicOk = (e) => {
    //Oculto la Card y reseteo el form
    setShow(false);
    setMarca('')
    setModelo('')
    setMatricula('')
    }

const onSubmitForm = (e) => {
    e.preventDefault();

    if (marca.length >= 3 && modelo.length >= 3 && matricula.length >= 6) {
        //Hago que se muestre la card y que no aparezca el error
        setShow(true)
        setError(false)

    }else {
        //Hago que se muestre el error y no el formulario
        setShow(false)
        setError(true)
    }

};

    return (
        <>

        <div id = "form-container">
        <h3>Formulario de Ingreso de vehículo</h3>
        <form onSubmit={onSubmitForm} id = "form">
            <label>Ingrese Marca </label>
            <input 
                type="text"
                placeholder="Marca Vehículo"
                value={marca}
                onChange={onChangeMarca}
                >
            </input>
            <label>Ingrese Modelo </label>
            <input 
                type="text"
                placeholder="Modelo Vehículo"
                value={modelo}
                onChange={onChangeModelo}
                >
                    
            </input>
            <label>Ingrese matrícula </label>
            <input 
                type="text"
                placeholder="Modelo Vehículo"
                value={matricula}
                onChange={onChangeMatricula}
                >
                    
            </input>
            <button type="submit">Enviar</button>
            
            {
            error && <><p id = "error" ><strong>Debe completar los campos correctamente</strong></p></>
            }

        </form>
        </div>

        {
            show && 
            <div id = "card">
                <Card marca={marca} modelo={modelo} matricula={matricula}/> 
            <button onClick={onClicOk}>ok</button>
            </div> 
        
        }
        </>
    )
}

export  default Form