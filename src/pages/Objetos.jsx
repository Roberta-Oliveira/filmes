import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Objetos = () => {

    const carros = [

    { marca: 'Porsche', modelo: 'Taycan', ano: '2021', placa: " BGE 0A34", foto: 'https://cdn.motor1.com/images/mgl/8ww1J/s3/2021-porsche-taycan-turbo-s.webp'},
    { marca: 'Subaru', modelo: 'WRX', ano: '2020', placa: " BGE 0A34", foto: 'http://planetcarsz.com/assets/uploads/34bcee95563eada6cb77ac24f6992689.jpg'},
    { marca: 'Ferrari', modelo: '488', ano: '2021', placa: " BGE 0A34", foto: 'https://i.ytimg.com/vi/r2mWck2aLd4/maxresdefault.jpg'},
    { marca: 'Mustang', modelo: 'GT500', ano: '2020', placa: " BGE 0A34", foto: 'https://cdn.motor1.com/images/mgl/mZWNq/s1/hennessey-shelby-mustang-gt500-venom.jpg'},
    { marca: 'Chevrollet', modelo: 'Corvette', ano: '2020', placa: " BGE 0A34", foto: 'http://www.planetcarsz.com/assets/uploads/e0ba891069308164eca4c9085b3909e8.jpg'}, 
    { marca: 'Lamborghini', modelo: 'Aventador', ano: '2021', placa: " BGE 0A34", foto: 'https://conteudo.imguol.com.br/c/entretenimento/30/2021/07/07/lamborghini-aventador-lp-780-4-ultimae-cupe-1625666114359_v2_615x300.jpg'},
    { marca: 'Porsche', modelo: 'Taycan', ano: '2021', placa: " BGE 0A34", foto: 'https://cdn.motor1.com/images/mgl/8ww1J/s3/2021-porsche-taycan-turbo-s.webp'},
    { marca: 'Subaru', modelo: 'WRX', ano: '2020', placa: " BGE 0A34", foto: 'http://planetcarsz.com/assets/uploads/34bcee95563eada6cb77ac24f6992689.jpg'},
    { marca: 'Ferrari', modelo: '488', ano: '2021', placa: " BGE 0A34", foto: 'https://i.ytimg.com/vi/r2mWck2aLd4/maxresdefault.jpg'},
    { marca: 'Mustang', modelo: 'GT500', ano: '2020', placa: " BGE 0A34", foto: 'https://cdn.motor1.com/images/mgl/mZWNq/s1/hennessey-shelby-mustang-gt500-venom.jpg'},
    { marca: 'Chevrollet', modelo: 'Corvette', ano: '2020', placa: " BGE 0A34", foto: 'http://www.planetcarsz.com/assets/uploads/e0ba891069308164eca4c9085b3909e8.jpg'}, 
    { marca: 'Lamborghini', modelo: 'Aventador', ano: '2021', placa: " BGE 0A34", foto: 'https://s2.glbimg.com/MlIkc9CxksMrBHJV0l1QAoREaaE=/0x0:1280x853/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/X/S/SSjzBeSoaAQessJx6xJg/lambofrente.jpg'},  
         
    ]
   

    return (
        <>

            <h1>Objetos de Carros</h1>


          <Row>

          { carros.map(carro => (
              <Col md={3} classeName="mb-3">
                <Card>
                    <Card.Img variant="top" src={carro.foto} />
                    <Card.Body>
                      <Card.Title>{carro.marca}-{carro.modelo}</Card.Title>
                      <hr />
                      <Card.Text>
                        <p>Placa: {carro.placa}</p>
                        <p>Ano de Fabricação: {carro.ano}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>            
               </Col> 
          ))}
          </Row>  

           
        </>
    )
}

export default Objetos
