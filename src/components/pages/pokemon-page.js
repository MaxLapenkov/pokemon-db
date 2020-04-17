import React, {Component} from 'react'
import './pages.css'
import ErrorIndicator from '../error-indicator/'
import PokeapiService from '../../services/pokeapi-service'
import ErrorBoundary from '../error-boundary/'
import Row from '../row/'
import  {
    PokemonDetails,
    PokemonList,
} from '../poke-components/'


export default class PokemonPage extends Component {

    pokeapiService = new PokeapiService()

    state = {
        selectedPokemon: null,
    }

    onPokemonSelected = (id) => {
        this.setState ({
            selectedPokemon: id
        })
    }

    render() {
        
        if(this.state.hasError) {
            return <ErrorIndicator />
        }

        const itemList = (
            <ErrorBoundary>

            <PokemonList  onItemSelected = {this.onPokemonSelected}/>
            
            </ErrorBoundary>
        )
        
        

        const pokemonDetails = (
            <ErrorBoundary>

            <PokemonDetails itemId={this.state.selectedPokemon}/>
                
            </ErrorBoundary>
        )
        if(!this.state.selectedPokemon) {
            return <Row left ={itemList} right = {<span>Choose pokemon</span>} />
        }  
        return (
            
            <Row left ={itemList} right = {pokemonDetails} />
            
        )
    }
}