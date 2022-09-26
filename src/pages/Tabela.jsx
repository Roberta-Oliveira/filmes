import React from 'react'
import { Table } from 'react-bootstrap'

const Tabela = () => {
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
            <h1>Objetos de Carro</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Ano</th>
                        <th>Placa</th>
                    </tr>
                </thead>
                <tbody>
                    {carros.map((carro,i) => (
                        <tr key={i}>
                            <td>{i}</td>
                            <td>{carro.marca}</td>
                            <td>{carro.modelo}</td>
                            <td>{carro.ano}</td>
                            <td>{carro.placa}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default Tabela
