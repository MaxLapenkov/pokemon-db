import React, { Component } from 'react'

import './item-details.css';
import PokeapiService from '../../services/pokeapi-service';
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator/'

const Record = ({item, field, label}) => {
    return ( 
           <li>{label}: {item[field]}</li>
    );
}
export {
    Record
}
export default class ItemDetails extends Component {

    pokeapiservice = new PokeapiService()

    state = {
        item: null,
        hasData: false,
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
        const {itemId, getData} = this.props;
        if(!itemId) {
            return;
        }
        this.onItemLoading();
        getData(itemId)
            .then(this.onItemLoaded)
            .catch(this.onError) 
    }
    onError = () => {
        this.setState({error: true, loading: false});
    }

    render() {
        
        
        const {item, loading, error} = this.state;

        // const hasData = !(loading || error)

        // const errorMessage = error ? <ErrorIndicator /> : null;
        // const spinner = loading ? <Spinner /> : null
        // const content = hasData ? <PokemonView pokemon={item}/> : null

        if(!item || loading) {
            return (
                <Spinner />
            )
        }
        if(error) {
            return(
                <ErrorIndicator />
            )
        }
        const {name, sprite} = item
        return(
            <div className="item-details bg-primary d-flex">
                {/* {errorMessage}
                {spinner} */}
            
            <div className="item-image">
                <img alt="item" width="150" height ="150" src={sprite}/>
            </div>
            <div className="item-description">
                <h2 className="description-title">{name}</h2>
                <ul className="description-list">
                {
                React.Children.map(this.props.children, (child) => {
                    return React.cloneElement(child,{ item })
                    })
                }
                </ul>
            </div>
            </div>
        )
    }
   
}
