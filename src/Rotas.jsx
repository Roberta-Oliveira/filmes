import React from 'react'
import { Switch, Route } from 'react-router-dom';
import HelloWorld from './pages/HelloWorld';
import Roberta from './pages/Roberta';
import PaginaInicial from './pages/PaginaInicial';
import Arrays from './pages/Arrays';
import Objetos from './pages/Objetos';
import Estados from './pages/Estados';
import Tabela from './pages/Tabela';
import FilmesPopulares from './Filmes/FilmesPopulares';
import FilmesDetalhes from './Filmes/FilmesDetalhes';
import AtoresDetalhes from './pages/atores/AtoresDetalhes';

const Rotas = () => {
    return (
        <Switch>
            <Route exact path="/" component={HelloWorld} />
            <Route exact path="/hello-world" component={HelloWorld} />
            <Route exact path="/inicial" component={PaginaInicial} />
            <Route exact path="/page2" component={Roberta} />
            <Route exact path="/arrays" component={Arrays} />
            <Route exact path="/objetos" component={Objetos} />
            <Route exact path="/tabela" component={Tabela} />
            <Route exact path="/estados" component={Estados} />
            <Route exact path="/filmes/populares" component={FilmesPopulares} />
            <Route exact path="/filmes/:id" component={FilmesDetalhes} />
            <Route exact path="/atores/:id" component={AtoresDetalhes} />
        </Switch>
    )
}

export default Rotas