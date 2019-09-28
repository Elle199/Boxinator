/**
 * @author max.angman
 */

const React = require('react');
const client = require('../client');

class BoxList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { boxes: [] };
	}

	componentDidMount() {
		client({ method: 'GET', path: '/api/boxes' }).done(response => {
			this.setState({ boxes: response.entity._embedded.boxes });
		});
	}

	render() {
		const boxes = this.state.boxes.map(box =>
			<Box key={box._links.self.href} box={box} />
		);
		
		return (
			<table>
				<thead>
					<tr>
						<th>Receiver</th>
						<th>Weight</th>
						<th>Color</th>
						<th>Destination</th>
						<th>Shipping cost</th>
					</tr>
				</thead>
				<tbody>
					{boxes}
				</tbody>
			</table>
		)
	}
}

class Box extends React.Component {
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

export default BoxList