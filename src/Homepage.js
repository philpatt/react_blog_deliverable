import React, {Component} from 'react';

class Homepage extends Component {
	constructor(props){
		super(props)
		this.state = {
			shakeSpeare:''
		}
	}
	componentDidMount(){
		var base = this
		let poemApi = 'http://ShakeItSpeare.com/api/poem'

		fetch(poemApi)
		.then((response) => {
			return response.json()
		}).then((json) => {
			base.setState({ shakeSpeare: json.poem });
		}).catch((ex) => {
			console.log('An error occured while parsing!', ex);
		})
	}

  render () {
  	let poetry = this.state.shakeSpeare;
  	if(!this.state.shakeSpeare){
  		return (
  			<div>
  				<h1>Loading.... </h1>
  			</div>
  			)
  	}
    return (
    	<div>
      		<h1>'Home Is Where You Make It'</h1>

      		<h3>J.Dirt</h3>
      		<p>This is my favorite Shakespeare Poem: </p>
      		{poetry}
      	</div>

    )
  }
}

export default Homepage;
