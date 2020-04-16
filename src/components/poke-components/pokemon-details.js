
import React from 'react'
import ItemDetails, {Record} from '../item-details/';
import {withPokeapiService} from '../hoc-helpers/'
const PokemonDetails = ({itemId, pokeapiService}) => {
    const {getPokemon} = pokeapiService
                return (
                    <ItemDetails 
                        itemId={itemId}
                        getData={getPokemon}>
                        <Record field="name" label="Name" />
                        <Record field="height" label="Height" />
                        <Record field="weight" label="Weight" />
                        <Record field="experience" label="Experience" />
                    </ItemDetails>
                )
};

export default withPokeapiService(PokemonDetails)