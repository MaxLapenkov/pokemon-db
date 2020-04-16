import React, {Component} from 'react'
import './location-page.css'
import ErrorIndicator from '../error-indicator/'
import PokeapiService from '../../services/pokeapi-service'
import ErrorBoundary from '../error-boundary/'
import Row from '../row/'
import  {
    LocationDetails,
    LocationList,
} from '../poke-components/'


export default class LocationPage extends Component {

    pokeapiService = new PokeapiService()

    state = {
        selectedThing: null,
    }

    onThingSelected = (id) => {
        this.setState ({
            selectedThing: id
        })
    }

    render() {
        
        if(this.state.hasError) {
            return <ErrorIndicator />
        }

        const itemList = (
            <ErrorBoundary>

            <LocationList  onItemSelected = {this.onThingSelected}/>
            
            </ErrorBoundary>
        )
        
        

        const thingDetails = (
            <ErrorBoundary>

            <LocationDetails itemId={this.state.selectedThing}/>
                
            </ErrorBoundary>
        )
        if(!this.state.selectedThing) {
            return <Row left ={itemList} right = {<span>Выберите предмет</span>} />
        }  
        return (
            
            <Row left ={itemList} right = {thingDetails} />
            
        )
    }
}