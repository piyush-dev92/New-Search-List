import React from 'react';
class SearchInput extends React.Component{
	state = {term:'demo'}
	handleSubmit=(event)=>{
		event.preventDefault();
		this.props.onSubmit(this.state.term)
	}
	render(){
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.handleSubmit} >
					<div className="field">
						<h1 align="center">Search</h1>
						
						<input type="text" onChange={e=>this.setState({term:e.target.value})} />
					
					<button style={{marginTop:'10px'}} className="ui secondary button" type="submit" >Search</button>
					</div>
				</form>
			</div>
		)
	}
}
export default SearchInput;
