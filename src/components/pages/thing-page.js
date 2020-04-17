import React, {Component} from 'react'
import './pages.css'
import ErrorIndicator from '../error-indicator/'
import PokeapiService from '../../services/pokeapi-service'
import ErrorBoundary from '../error-boundary/'
import Row from '../row/'
import  {
    ThingDetails,
    ThingList,
} from '../poke-components/'


export default class ThingPage extends Component {

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

            <ThingList  onItemSelected = {this.onThingSelected}/>
            
            </ErrorBoundary>
        )
        
        

        const thingDetails = (
            <ErrorBoundary>

            <ThingDetails itemId={this.state.selectedThing}/>
                
            </ErrorBoundary>
        )
        if(!this.state.selectedThing) {
            return <Row left ={itemList} right = {<span>Choose item</span>} />
        }  
        return (
            
            <Row left ={itemList} right = {thingDetails} />
            
        )
    }
}