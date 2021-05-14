import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    // onSearchSubmit(term){
    //     axios.get('https://api.unsplash.com/search/photos',{
    //         ===same===
    //     }).then(response =>{
    //         console.log(response.data.results);
    //     })
    // }
    state = {images:[]};
    onSearchSubmit = async (term)=>{
        const response = await axios.get('https://api.unsplash.com/search/photos',{
            params:{
                query:term
            },
            headers:{
                Authorization: 'Client-ID mtSCZq7klbxvI4vIsqGDy89zD_gvxo6LhFyJldjAGfU'
            }
        });
        this.setState({images:response.data.results});
    }
    render(){
        return <div className="ui container"><SearchBar onSubmit={this.onSearchSubmit}/></div>    
        }
    }
















export default App;