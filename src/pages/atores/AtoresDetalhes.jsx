import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import apiFilmes from '../../services/apiFilmes';

const AtoresDetalhes = (props) => {
  const [ator, setAtor] = useState({});
  const [filmes, setFilmes] = useState({});

  useEffect(() => {
    const id = props.match.params.id;

    apiFilmes.get(`/person/${id}?language=pt-BR`).then((resultado) => {
      setAtor(resultado.data);
    });

    apiFilmes
      .get(`/person/${id}/movie_credits?language=pt-BR`)
      .then((resultado) => {
        setFilmes(resultado.data);
      });
  }, [props]);

  console.log(filmes);

  return (
    <>
      {ator.id && (
        <>
          <Row>
            <Col md={3}>
              <Card>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${ator.profile_path}`}
                />
              </Card>
            </Col>
            <Col md={9}>
              <h1>{ator.name}</h1>
              {ator.birthday && <p>Dt. Nascimento: {ator.birthday}</p>}
              {ator.place_of_birth && (
                <p>Local de Nascimento: {ator.place_of_birth}</p>
              )}
              {ator.deathday && <p>Data de Morte: {ator.deathday}</p>}
              <p>{ator.biography}</p>
            </Col>
          </Row>

          <hr />
          <h1>Filmes que atuou</h1>
          {filmes.id && (
            <Row>
              {filmes.cast.map((filme) => (
                <React.Fragment key={filme.id}>
                  {filme.poster_path && (
                    <Col md={1}>
                      <Link to={`/filmes/${filme.id}`}>
                        <Card title={filme.title}>
                          <Card.Img
                            variant="top"
                            src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}
                          />
                        </Card>
                      </Link>
                    </Col>
                  )}
                </React.Fragment>
              ))}
            </Row>
          )}

          <Button variant="danger" onClick={() => props.history.goBack()}>
            voltar
          </Button>
          <hr />
        </>
      )}
    </>
  );
};

export default AtoresDetalhes;

