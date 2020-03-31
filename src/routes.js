import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PokemonList from './PokemonList/index';


export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={PokemonList} />
            </Switch>
        </BrowserRouter>
    );
}