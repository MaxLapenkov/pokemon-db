import React from 'react'
import './random-item.css'

const ItemView = ({item}) => {
    const {name, cost, category, sprite} = item;
    return (
            <React.Fragment>
                <img className="item-image" alt="Item" src={sprite}/>
                <div className="item-description">
                    <h2 className="description-title">{name}</h2>
                    <ul className="description-list">
                        <li><span className="term">Cost: </span> <span>{cost}</span></li>
                        <li><span className="term">Category: </span> <span>{category}</span></li>
                        
                        {/* <li><span className="term">Diameter</span> <span>{diameter}</span></li> */}
                    </ul>
                </div>
            </React.Fragment>
    );
}

export default ItemView;