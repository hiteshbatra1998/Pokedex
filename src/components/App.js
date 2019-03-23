import React from 'react';
import Search from './search';
import PokeList from './PokeList';
import PokeApi from '../API/PokeApi';
class App extends React.Component{
    state={ poke:[] , term:''};
    async componentDidMount(){
          const res=await PokeApi.get('/pokemon/?offset=0&limit=786');
          this.setState({ poke:res.data.results});
        }; 
    onChangeInput(term){
        this.setState({term:term})
    }
    render(){
        return(
        <div>
            <Search onChange={this.onChangeInput.bind(this)}/>
            <PokeList list={this.state.poke} str={this.state.term}/>    
        </div>
        );
    }
};
export default App;
