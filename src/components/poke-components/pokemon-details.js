
import React from 'react'
import ItemDetails, {Record} from '../item-details/';
import {withPokeapiService} from '../hoc-helpers/'
const PokemonDetails = (props) => {
                return (
                    <ItemDetails {...props}>
                        <Record field="name" label="Name" />
                        <Record field="height" label="Height" />
                        <Record field="weight" label="Weight" />
                        <Record field="experience" label="Experience" />
                    </ItemDetails>
                )
};

const mapMethodsToProps = (pokeapiService) => {
    return {
        getData: pokeapiService.getPokemon
    }
}

export default withPokeapiService(mapMethodsToProps)(PokemonDetails)