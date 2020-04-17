
import React from 'react'
import ItemDetails, {Record} from '../item-details/';
import {withPokeapiService} from '../hoc-helpers/'
const ThingDetails = (props) => {
    
    return (
                <ItemDetails {...props}>
                    <Record field="cost" label="Cost" />
                    <Record field="category" label="Category" />  
                </ItemDetails>
                )
};

const mapMethodsToProps = (pokeapiService) => {
    return {
        getData: pokeapiService.getItem
    }
}

export default withPokeapiService(mapMethodsToProps)(ThingDetails)