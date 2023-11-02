import react from 'react';
import './Form.jsx'
function Card ({marca, modelo, matricula}) {
    return (
        <div>
            <h3>¡Datos ingresados correctamente!</h3>
            <p><strong>Marca: </strong>{marca}</p>
            <p><strong>Modelo: </strong>{modelo}</p>
            <p><strong>Matrícula: </strong>{matricula}</p>
        </div>
    )
}

export default Card;