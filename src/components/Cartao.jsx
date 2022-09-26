import React from 'react'
import { Card } from 'react-bootstrap'

const Cartao = () => {
    return (
        <>
            
            <Card>
                <Card.Img variant="top" src={carro.foto} />
                    <Card.Body>
                      <Card.Title>{carro.marca}-{carro.modelo}</Card.Title>
                      <hr />
                      <Card.Text>
                        Roberta
                      </Card.Text>
                    </Card.Body>
                  </Card>


        </>
    )
}

export default Cartao
