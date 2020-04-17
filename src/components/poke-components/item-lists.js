import React from 'react'
import ItemList from '../item-list'
import {withData, withPokeapiService, compose, withChildFunction} from '../hoc-helpers/'


const renderName = ({name}) => <span>{name}</span>;

const mapPokemonMethodsToProps = (pokeapiService) => {
    return {
        getData: pokeapiService.getAllPokemons
    }
}
const mapItemMethodsToProps = (pokeapiService) => {
    return {
        getData: pokeapiService.getAllItems
    }
}
const mapLocationMethodsToProps = (pokeapiService) => {
    return {
        getData: pokeapiService.getAllLocations
    }
}



const PokemonList = compose(
    withPokeapiService(mapPokemonMethodsToProps),
    withData,
    withChildFunction(renderName)
)(ItemList);

const ThingList = compose(
    withPokeapiService(mapItemMethodsToProps),
    withData,
    withChildFunction(renderName)
)(ItemList);

const LocationList = compose(
    withPokeapiService(mapLocationMethodsToProps),
    withData,
    withChildFunction(renderName)
)(ItemList);

export {
    PokemonList,
    ThingList,
    LocationList
}