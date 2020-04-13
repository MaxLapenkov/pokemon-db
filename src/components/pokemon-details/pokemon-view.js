import React from 'react'
import './pokemon-details.css'

const PokemonView = ({pokemon}) => {
    const {id, name, weight, height, experience, sprite} = pokemon
    return (
        <div className="pokemon-details bg-primary d-flex">
        <div className="pokemon-image">
        <img alt="pokemon" width="150" height ="150" src={sprite}/>
        </div>
        <div className="pokemon-description">
            <h2 className="description-title">{name}</h2>
            <ul className="description-list">
                <li>id {id}</li>
                <li>experience: {experience}</li>
                <li>height: {height}</li>
                <li>weight: {weight}</li>
            </ul>
        </div>
    </div>
    );
}

export default PokemonView;