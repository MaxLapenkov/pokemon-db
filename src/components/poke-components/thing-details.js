
import React from 'react'
import ItemDetails, {Record} from '../item-details/';
import {withPokeapiService} from '../hoc-helpers/'
const ThingDetails = ({itemId, pokeapiService}) => {
    const {getItem} = pokeapiService
    return (
                <ItemDetails 
                    itemId={itemId} 
                    getData={getItem}>
                    <Record field="cost" label="Cost" />
                    <Record field="category" label="Category" />  
                </ItemDetails>
                )
};

export default withPokeapiService(ThingDetails)