import React, {Component} from 'react'
import './pokemon-page.css'
import ItemList from '../item-list/'
import PokemonDetails from '../pokemon-details/'
import ErrorIndicator from '../error-indicator/'
import PokeapiService from '../../services/pokeapi-service'
import ErrorBoundary from '../error-boundary/'

const Row = ({left, right}) => {
    return(
        <div className="row mb2">
            <div className="col-md-6">
                {left}
            </div>
            <div className="col-md-6">
                {right}
            </div>
        </div>
    )
}



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
            <ItemList 
                onItemSelected = {this.onPokemonSelected}
                getData = {this.pokeapiService.getAllPokemons}
                renderItem = {(item) => `${item.name}`}>
            </ItemList>
        )
        const pokemonDetails = (
            <ErrorBoundary>
                <PokemonDetails pokemonId = {this.state.selectedPokemon}/>
            </ErrorBoundary>
        )
        if(!this.state.selectedPokemon) {
            return <Row left ={itemList} right = {<span>Выберите покемона</span>} />
        }  
        return (
            
            <Row left ={itemList} right = {pokemonDetails} />
            
        )
    }
}