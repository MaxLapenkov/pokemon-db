 export default class PokeapiService {

    _apiBase = 'https://pokeapi.co/api/v2'
  
     async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
      
        if(!res.ok) {
          throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await res.json()
        
     }
  
      getAllPokemons = async () =>  {
       const res = await this.getResource(`/pokemon/`);
       return res.results.map(this._transformPokemons);
     }
      getPokemon = async (id) =>   {
       const pokemon = await this.getResource(`/pokemon/${id}/`)
       
       
       
       return this._transformPokemon(pokemon);
       
     }
     getAllItems = async () => {
       
       
      const res = await this.getResource(`/item/`);
     
      
      return res.results.map(this._transformItems);
    }
     getItem = async (id) => {
      const item = await this.getResource(`/item/${id}/`) 
      return this._transformItem(item);
    }
    getAllLocations = async () => {
      const res = await this.getResource(`/location/`);
      return res.results.map(this._transformLocations)
    }
    getLocation = async (id) => {
      const loc = this.getResource(`/location/${id}/`)
      return this._transformLocation(loc);
    }
    _extractId = (item) =>  {
      const idRegExp = /\/([0-9]*)\/$/;
      return item.url.match(idRegExp)[1];
    }

    _transformItem = (item) =>  {      
      return {
        id: item.id,
        name: item.name,
        cost: item.cost,
        category: item.category.name,
        sprite: item.sprites.default
        
    }
    }
    _transformItems = (item) => {      
      return {
        id: this._extractId(item),
        name: item.name,
    }
    }
    _transformLocation = (starship) => {      
      return {
        id: this._extractId(starship),
        name: starship.name,
        model: starship.model,
        manufacturer: starship.manufacturer,
        costInCredits: starship.costInCredits,
        length: starship.length,
        crew: starship.crew,
        passangers: starship.passangers,
        cargoCapacity: starship.cargoCapacity
    }   
    }
    _transformLocations = (loc) => {      
      return {
        id: this._extractId(loc),
        name: loc.name,
    }
    }
    _transformPokemons = (pokemon) => {      
      return {
        id: this._extractId(pokemon),
        name: pokemon.name,
    }
    }
    _transformPokemon = (pokemon) => {
      return {
        id: pokemon.id,
        name: pokemon.name,
        experience: pokemon.base_experience,
        weight: pokemon.weight,
        height: pokemon.height,
        sprite: pokemon.sprites.front_default
      }
    }
  }