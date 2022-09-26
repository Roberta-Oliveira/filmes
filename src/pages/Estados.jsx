import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Estados = () => {

    const [contador, setContador] = useState(0)
 
    
    function subtrair(){
        const valor = contador - 1
        setContador(valor)

    }

    function adcionar(){
        const valor = contador + 1
        setContador(valor)
        
    
    }


    return (
        <>
           <h1>States</h1>

           <Button variant="danger" onClick={subtrair}> - </Button>
           <span>{' ' + contador + ' '}</span>
           <Button variant="success" onClick={adcionar}> + </Button>
        </>
    )
}

export default Estados
