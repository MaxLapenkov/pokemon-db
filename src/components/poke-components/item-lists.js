import React from 'react'
import ItemList from '../item-list'
import {withData} from '../hoc-helpers/'
import PokeapiService from '../../services/pokeapi-service'

const pokeapiService = new PokeapiService();

const {
    getAllPokemons,
    getAllItems,
    getAllLocations
} = pokeapiService

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (    
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}

const renderName = ({name}) => <span>{name}</span>;

const PokemonList = withData(
    withChildFunction(ItemList, renderName),
     getAllPokemons)

const ThingList = withData(
    withChildFunction(ItemList, renderName),
     getAllItems)

const LocationList = withData(
    withChildFunction(ItemList, renderName),
     getAllLocations)


export {
    PokemonList,
    ThingList,
    LocationList
}