import React, { Component } from 'react'

import './pokemon-details.css';
import PokeapiService from '../../services/pokeapi-service';
import Spinner from '../spinner'
import PokemonView from './pokemon-view'
import ErrorIndicator from '../error-indicator/'
export default class PokemonDetails extends Component {

    pokeapiservice = new PokeapiService()

    state = {
        pokemon: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        
        
        this.updatePokemon();
    }
    componentDidUpdate(prevProps) {
        if(this.props.pokemonId !== prevProps.pokemonId) {
            this.updatePokemon()
        } 
        
    }
    onPokemonLoading = () => {
        this.setState({
            loading: true
        })
    }
    onItemLoaded = (pokemon) => {   
        this.setState({
            pokemon,
            loading: false})
    }
    updatePokemon() {
        const {pokemonId} = this.props;
        if(!pokemonId) {
            return;
        }
        this.onPokemonLoading();
        this.pokeapiservice
            .getPokemon(pokemonId)
            .then(this.onItemLoaded)
            .catch(this.onError) 
    }
    onError = () => {
        this.setState({error: true, loading: false});
    }

    render() {
        
        
        const {pokemon, loading, error} = this.state;

        const hasData = !(loading || error)

        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null
        const content = hasData ? <PokemonView pokemon={pokemon}/> : null

        if(!this.state.pokemon) {
            return (
                <Spinner />
            )
        }
        return(
            <div className="pokemon-details bg-primary d-flex">
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
   
}
