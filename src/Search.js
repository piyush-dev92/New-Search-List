import React from 'react';
import SearchInput from './SearchInput';
import List from './List';
import data from './data';
class Search extends React.Component{
	state = {content:''}
	onSearchSubmit = (term) =>{
		 this.finalresult = data.filter((resp)=>resp.name===term || resp.gender===term.toLowerCase())
		 this.setState({content:this.finalresult});
	}
	render(){
		return (
			<div className="ui container"style={{marginTop:'10px'}}>
			<SearchInput onSubmit={this.onSearchSubmit}/>
			<List viewResult={this.state.content} />
			</div>
		)
	}
}
export default Search;
