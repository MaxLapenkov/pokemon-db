import React, {Component} from 'react';
import './app.css'
import Header from '../header/'
import RandomItem from '../random-item/'
import ErrorIndicator from '../error-indicator/'
import PokemonPage from '../pokemon-page/'
// import ItemList from '../item-list/'
// import PokemonDetails from '../pokemon-details/'
import PokeapiService from '../../services/pokeapi-service';
export default class App extends Component {

    pokeapiService = new PokeapiService();
    state = {
        toggle: true,
        hasError: false,
        selectedPokemon: 1
    }
    toggleItem = () => {
        let newState = !this.state.toggle;
        this.setState({
            toggle: newState
        })
    }
    onPokemonSelected = (id) => {
        this.setState ({
            selectedPokemon: id
        })
    }

    componentDidCatch() {
        this.setState({hasError: true})    
    }

    render() {

        if(this.state.hasError) {
            return <ErrorIndicator />
        }

        const {toggle} = this.state;
        const randItem = toggle ? <RandomItem /> : null;

            return(
                <div className="star-db">
                    <Header />
                    {randItem}
                    <button className="toggle" onClick={this.toggleItem}>Toggle random item</button>     
                    <PokemonPage />

                    {/* <div className="row mb2">
                        <div className="col-md-6">
                            <ItemList 
                            onItemSelected = {this.onPokemonSelected}
                            getData = {this.pokeapiService.getAllItems}
                            renderItem = {(item) => (
                                <h3>{item.name}</h3>
                                )}/>
                        </div>
                         <div className="col-md-6">
                            <PokemonDetails pokemonId = {this.state.selectedPokemon}/>
                        </div>
                    </div>
                    <div className="row mb2">
                        <div className="col-md-6">
                            <ItemList 
                            onItemSelected = {this.onPokemonSelected}
                            getData = {this.pokeapiService.getAllLocations}
                            renderItem = {(item) => (
                                <h3>{item.name}</h3>
                                )}/>
                        </div>
                         <div className="col-md-6">
                            <PokemonDetails pokemonId = {this.state.selectedPokemon}/>
                        </div>
                    </div> */}
                    
                    
                    
                </div>
            )
        
        
        
    }
}