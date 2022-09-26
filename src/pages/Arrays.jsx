import React from 'react'
import { Alert, ListGroup } from 'react-bootstrap'

const Arrays = () => {

    const carros = [
     'Porsche',
     'Subaru',
     'Ferrari',
     'Mustang',
     'Camaro',
     'Lambo',
    
    ]



    return (
        <>

            <h1>Arrays de Carros</h1>

            { carros.map( carro => (
                <p>{carro}</p>
            ) ) }

            { carros.map( carro => (
                <Alert variant="danger">{carro}</Alert>
            ) ) }

            { carros.map( carro => (
                <ListGroup.Item>{carro}</ListGroup.Item>
            ) ) }
    


        </>
    )
}

export default Arrays
