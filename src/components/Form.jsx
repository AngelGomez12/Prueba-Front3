import React from 'react'
import { Card } from './Card'

export const Form = () => {
    const [nombre, setNombre] = React.useState('')
    const [codigo, setCodigo] = React.useState('')
    const [estudiantes, setEstudiantes] = React.useState([])
    const [error, setError] = React.useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (nombre.trim().length > 3 || codigo.trim().length > 3) {
            setEstudiantes([...estudiantes, { nombre, codigo }])
            setNombre('')
            setCodigo('')
        }
        else {
            setError(true)
        }
    }
    return (
        <div className='bg-gray-700 text-white p-4 mb-5 mt-7'>
            <h1>Carga de estudiantes</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} className='text-black' />
                <input type="text" placeholder="Codigo de estudiante" value={codigo} onChange={e => setCodigo(e.target.value)} className='text-black' />
                <button>Enviar</button>
                {error && <p className='text-red-500'>El nombre y el codigo deben tener al menos 3 caracteres</p>}
            </form>
            <Card estudiantes={estudiantes} />
        </div>
    )
}
