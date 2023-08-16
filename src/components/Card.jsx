import React from 'react'

export const Card = ({ estudiantes }) => {
    return (
        <div>
            {estudiantes.map((estudiante, index) => {
                return (
                    <div key={index} className='text-white pt-3 gap-3'>
                        <h2>Hola {estudiante.nombre}</h2>
                        <p>Tu codigo es: {estudiante.codigo}</p>
                    </div>
                );
            })}
        </div>
    )
}
