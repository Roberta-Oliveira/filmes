import React from 'react'
import { Container } from 'react-bootstrap'

import HelloWorld from './HelloWorld'
import Box from '../components/Box'


const PaginaInicial = () => {
    return (
        <>
            <Container>
                <p>Roberta Avelino</p>

                <Box title="Meu Primeiro Card" variant="success">
                    <p>
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    </p>
                    <HelloWorld />
                    <p>
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    </p>
                </Box>

                <Box title="Meu Segundo Card" variant="primary">
                    <h1>O Leandro vai gostar mais de React do que de Angular</h1>

                    <p>
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    </p>
                </Box>

                <Box title="Roberta Avelino" />
                <Box title="João da Silva" />

                <HelloWorld />
            </Container>
        </>
    )
}

export default PaginaInicial