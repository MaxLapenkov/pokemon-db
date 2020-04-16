import React from 'react'
import {PokeapiServiceConsumer} from '../pokeapi-service-context/'

const withPokeapiService = (Wrapped) => {
    return (props) => {
        return (
        <PokeapiServiceConsumer>
            {
                (pokeapiService) => {
                    return (
                        <Wrapped {...props} pokeapiService={pokeapiService}/>
                    )
                }
            }
        </PokeapiServiceConsumer>
        );
    }
}

export default withPokeapiService