
import React from 'react'
import ItemDetails, {Record} from '../item-details/';
import {withPokeapiService} from '../hoc-helpers/'
const LocationDetails = ({itemId, pokeapiService}) => {
    const {getLocation} = pokeapiService
    return (
                <ItemDetails 
                    itemId={itemId} 
                    getData={getLocation}>
                    <Record field="area" label="Area" />
                    <Record field="region" label="Region" />  
                </ItemDetails>
                )
};

export default withPokeapiService(LocationDetails)