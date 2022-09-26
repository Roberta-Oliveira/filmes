import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { FaRegHandPointLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import apiFilmes from '../services/apiFilmes';


const FilmesDetalhes = (props) => {

    const [filme, setFilme] = useState({})
    const [creditos, setCreditos] = useState({})
    /**const [imagens, setImagens] = useState([])*/

    useEffect(()=>{
        const id = props.match.params.id

        apiFilmes.get(`/movie/${id}?language=pt-BR`).then((resultado) => {
            setFilme(resultado.data);
        })

        apiFilmes.get(`/movie/${id}/credits?language=pt-BR`).then((resultado) => {
            setCreditos(resultado.data);
        })

      /**  apiFilmes.get(`/movie/${id}/images?language=en`).then((resultado) => {
            setImagens(resultado.data);
        })*/

    }, [props])

console.log();


    return (
        <>
            
           {filme.id &&

                <>
                    <Row>
                        <Col md={3} className="mb-3">
                            <Card>
                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} />
                            </Card>
                        </Col>
                        <Col md={9}>
                            <h1>{filme.title}</h1>
                            <p>Título Original: {filme.original_title}</p>
                            <p>{filme.overview}</p>
                            <p>Popularidade {filme.popularity}</p>
                            <p>Lançamento {filme.release_date}</p>
                            <p>Gêneros:
                                {filme.genres.map(genre=>(
                                    <span> {genre.name} | </span>
                                ))}
                            </p>
                            <p>Empresas:
                                {filme.production_companies.map(company => (
                                    <span key={company.id}>
                                        
                                        <img height="30px" 
                                        src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
                                        alt={company.name}
                                        title={company.name} /> 
                                    </span>
                                ))}
                            </p>
                        </Col>
                    </Row>
                </>
            }

                <h1>Atores</h1>
             
                {creditos.id && (
                        <Row>
                            {creditos.cast.map((credito) => (
                            <Col key={credito.id} md={1}>
                                {credito.profile_path && (
                                <Link to={`/atores/${credito.id}`}>
                                    <Card.Img
                                    src={`https://image.tmdb.org/t/p/w500/${credito.profile_path}`}
                                    alt={credito.name}
                                    />
                                </Link>
                                )}
                            </Col>
                            ))}
                        </Row>
                )}
                        
                
                    <hr />
                    <Link className="btn btn-danger" to="/filmes/populares">
                        <FaRegHandPointLeft />
                        Voltar
                    </Link>
                    <hr />
                
        </>
            
        )
    }

export default FilmesDetalhes
