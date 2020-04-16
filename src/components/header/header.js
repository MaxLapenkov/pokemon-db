import React, {Component} from 'react'

import './header.css';

export default class Header extends Component {

    changePage = (e) => {
        let pages = document.getElementsByName('page')

        const {onChangePage} = this.props

        onChangePage(e.target.value)
        

        for(let i = 0; i< pages.length; i++) {
            pages[i].className = ""
          }

        e.target.className = "active"

    }

    render() {
        return(
            <div className="header navbar-collapse d-flex flex-row justify-content-around">
                <h1>Pokemon DB</h1> 
                <ul className="navbar-nav d-flex flex-row"
                value = "ul">
                    <button
                        value="pokemon"
                        name="page"
                        onClick={this.changePage}>Pokemons</button>
                    <button
                        value="thing"
                        name="page"
                        onClick={this.changePage}>Items</button>
                    <button
                        value="location"
                        name="page"
                        onClick={this.changePage}>Locations</button>
                </ul>
            </div>
        )
    }
    
};
