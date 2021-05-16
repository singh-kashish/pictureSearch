import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

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
        const response = await unsplash.get('/search/photos',{
            params:{query:term}            
        });
        this.setState({images:response.data.results});
    }
    render(){
        return <div className="ui container"><SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
        </div>    
        }
    }
















export default App;