/**
 * @author max.angman
 */

const React = require('react');
const client = require('../client');

class BoxList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { boxes: [], attributes: [] };
	}

	componentDidMount() {
		client({ method: 'GET', path: '/api/boxes' }).done(response => {
			this.setState({ boxes: response.entity._embedded.boxes });

			this.setState({ attributes: Object.keys(response.entity._embedded.boxes[0]) });
			this.state.attributes.pop();
		});
	}

	render() {
		const boxes = this.state.boxes.map(box =>
			<Box key={box._links.self.href} box={box} />
		);

		return (
			<div className="displayTable">
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
			</div>
		)
	}
}

class Box extends React.Component {
	constructor(props) {
		super(props);
		this.props.box.color = this.deciToHex(this.props.box.color);
	}

	deciToHex(color) {
		color = color.replace(/[\(\)]/g, "");

		let splitColors = color.split(',');
		for (let i = 0; i < splitColors.length; i++) {
			splitColors[i] = (+splitColors[i].trim()).toString(16);

			if (splitColors[i].length < 2) {
				splitColors[i] = "0" + splitColors[i];
			}
		}

		return "#" + splitColors.join('');
	}

	render() {
		return (
			<tr>
				<td>{this.props.box.receiverName}</td>
				<td>{this.props.box.weight + " kg"}</td>
				<td><input type="color" value={this.props.box.color} disabled /></td>
				<td>{this.props.box.destination}</td>
				<td>{this.props.box.shippingCost + " SEK"}</td>
			</tr>
		)
	}
}

export {
	BoxList,
	Box
};