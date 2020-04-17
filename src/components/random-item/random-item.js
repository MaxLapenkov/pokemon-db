import React, {Component} from 'react'
import PropTypes from 'prop-types'
import PokeapiService from '../../services/pokeapi-service'
import Spinner from '../spinner'
import ItemView from './item-view'
import ErrorIndicator from '../error-indicator/'
import './random-item.css';

export default class RandomItem extends Component {

    swapiService = new PokeapiService();

    static defaultProps = {
        updateInterval: 3000
    }
    static propTypes = {
        updateInterval: PropTypes.number
    }
    state = {
        item: {},
        loading: true,
        error: false
    }
    componentDidMount() {
        const {updateInterval} = this.props
        this.updateItem();
        this.interval = setInterval(this.updateItem, updateInterval)  
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onItemLoaded = (item) => {
        this.setState({
            item,
            loading: false})
    }

    onError = () => {
        this.setState({error: true, loading: false});
    }

    updateItem = () => {   
        const id = Math.floor(Math.random()*20) + 2;
        this.swapiService
            .getItem(id)
            .then(this.onItemLoaded) 
            .catch(this.onError)      
    }

    
    render() {
        const {item, loading, error} = this.state;

        const hasData = !(loading || error)

        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null
        const content = hasData ? <ItemView item={item}/> : null
        
        if(loading) {
            return <Spinner />
        }
        
        return(
            <div className="random-item bg-primary ">
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
    
    
}



