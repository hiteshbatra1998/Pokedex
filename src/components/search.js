import React from 'react';
import searchcss from '../Styling/search.css';
class Search extends React.Component{
    onChangeInputField(e){
        this.props.onChange(e.target.value);
    }
    render(){
        return(<div className="search-div">
            <form>
                <input onChange={this.onChangeInputField.bind(this)} className="search-poke" type="text" placeholder="Search For Pokemon"></input>
            </form>    
        </div>);
    }
};
export default Search;