import React, {Component} from 'react';
import './app.css'
import Header from '../header/'
import RandomItem from '../random-item/'
import ErrorIndicator from '../error-indicator/'
import ErrorBoundary from '../error-boundary/'
import{
    PokemonPage,
    ThingPage,
    LocationPage
} from '../pages/'
import {PokeapiServiceProvider} from '../pokeapi-service-context/'
import PokeapiService from '../../services/pokeapi-service';

export default class App extends Component {

    pokeapiService = new PokeapiService();
    state = {
        toggle: true,
        hasError: false,
        page: ''
    }
    toggleItem = () => {
        let newState = !this.state.toggle;
        this.setState({
            toggle: newState
        })
    }
    componentDidCatch() {
        this.setState({hasError: true})    
    }

    changePage = (page) => {
        this.setState({page});
      }
    render() {

        if(this.state.hasError) {
            return <ErrorIndicator />
        }

        const {toggle, page} = this.state;
        const randItem = toggle ? <RandomItem updateInterval={5000}/> : null;

        let content = null;
       
        if(page === 'pokemon') {
            content = <PokemonPage /> 
        } else if (page === 'thing') {
            content = <ThingPage />
        } else if (page === 'location') {
            content = <LocationPage />
        } else {
            content = null
        }
       
       


            return(
                <ErrorBoundary>
                <PokeapiServiceProvider value={this.pokeapiService}>
                <div className="star-db">
                    <Header 
                    onChangePage = {this.changePage}/>
                    {randItem}
                    <button className="toggle" onClick={this.toggleItem}>Toggle random item</button>
                    {content}     
                </div>
                </PokeapiServiceProvider>
                </ErrorBoundary> 
            )
        
        
        
    }
}