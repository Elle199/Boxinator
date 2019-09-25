'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {boxes: []};
	}

	componentDidMount() {
		client({method: 'GET', path: '/api/boxes'}).done(response => {
			console.log(response.entity._embedded.boxes);
			this.setState({boxes: response.entity._embedded.boxes});
		});
	}

	render() {
		return (
			<BoxList boxes={this.state.boxes}/>
		)
	}
}

class BoxList extends React.Component{
	render() {
		const boxes = this.props.boxes.map(box =>
			<Box key={box._links.self.href} box={box}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>Receiver</th>
						<th>Weight</th>
						<th>Color</th>
						<th>Destination</th>
						<th>Shipping cost</th>
					</tr>
					{boxes}
				</tbody>
			</table>
		)
	}
}

class Box extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.box.receiverName}</td>
				<td>{this.props.box.weight}</td>
				<td>{this.props.box.color}</td>
				<td>{this.props.box.destination}</td>
				<td>{this.props.box.shippingCost}</td>
			</tr>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('react')
)

