import React, { Component } from 'react'

import './pokemon-details.css';
import PokeapiService from '../../services/pokeapi-service';
import Spinner from '../spinner'
import PokemonView from './pokemon-view'
import ErrorIndicator from '../error-indicator/'
export default class ItemDetails extends Component {

    pokeapiservice = new PokeapiService()

    state = {
        item: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        
        
        this.updateItem();
    }
    componentDidUpdate(prevProps) {
        if(this.props.itemId !== prevProps.itemId) {
            this.updateItem()
        } 
        
    }
    onItemLoading = () => {
        this.setState({
            loading: true
        })
    }
    onItemLoaded = (item) => {   
        this.setState({
            item,
            loading: false})
    }
    updateItem() {
        const {itemId} = this.props;
        if(!itemId) {
            return;
        }
        this.onItemLoading();
        this.pokeapiservice
            .getPokemon(itemId)
            .then(this.onItemLoaded)
            .catch(this.onError) 
    }
    onError = () => {
        this.setState({error: true, loading: false});
    }

    render() {
        
        
        const {item, loading, error} = this.state;

        const hasData = !(loading || error)

        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null
        const content = hasData ? <PokemonView pokemon={item}/> : null

        if(!item) {
            return (
                <Spinner />
            )
        }
        return(
            <div className="item-details bg-primary d-flex">
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
   
}
