import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import apiFilmes from '../services/apiFilmes'
import { Card, Button, Row, Col } from 'react-bootstrap';

const FilmesPopulares = () => {

    const [filmes, setFilmes] = useState([])

    useEffect(()=>{

        apiFilmes.get('/movie/popular?language=pt-BR').then( resultado => {
            setFilmes(resultado.data.results)
        })

    }, [])


    
    return (
        <>
    <Row>
      {filmes.map((data, index) => (
        <Col md={3}>
          <Card key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt={data.title} /> 
              <Card.Body>
            
                <Card.Title>{data.title}</Card.Title>
                <hr />
                
                </Card.Body>
                <Link to={`/filmes/${filmes[index].id}`}>
                <Button variant="danger">Detalhes</Button>
              </Link>
          
          </Card>
          
        </Col>
        
      ))}
      </Row>
    </>
    )
}

export default FilmesPopulares

