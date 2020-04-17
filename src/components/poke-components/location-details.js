
import React from 'react'
import ItemDetails, {Record} from '../item-details/';
import {withPokeapiService} from '../hoc-helpers/'
const LocationDetails = (props) => {
    return (
                <ItemDetails {...props}>
                    <Record field="area" label="Area" />
                    <Record field="region" label="Region" />  
                </ItemDetails>
                )
};

const mapMethodsToProps = (pokeapiService) => {
    return {
        getData: pokeapiService.getLocation
    }
}

export default withPokeapiService(mapMethodsToProps)(LocationDetails)