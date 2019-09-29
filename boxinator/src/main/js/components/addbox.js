/**
 * @author max.angman
 */

/*
import RouteLinks from '../components/routes';
*/

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('../client');

class CreateBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onCreate = this.onCreate.bind(this);
        this.state = {attributes: [] };
    }

    componentDidMount() {
		client({ method: 'GET', path: '/api/boxes' }).done(response => {
			this.setState({attributes: Object.keys(response.entity._embedded.boxes[0])});
			this.state.attributes.pop();
			console.log(this.state.attributes);
		});
	}

    handleSubmit(e){
        const weight = ReactDOM.findDOMNode(this.refs["weight"]).value;
        const destination = ReactDOM.findDOMNode(this.refs["destination"]).value;
        let cost = 0;
        
        switch(destination.toLowerCase()){
            case "sweden": cost = weight * 1.3; break;
            case "china": cost = weight * 4; break;
            case "brazil": cost = weight * 8.6; break;
            case "austria": cost = weight * 7.2; break;
        }

        ReactDOM.findDOMNode(this.refs["shippingCost"]).value = cost;
        
        e.preventDefault();
        const newBox = {};
        this.state.attributes.forEach(attribute => {
            newBox[attribute] = ReactDOM.findDOMNode(this.refs[attribute]).value.trim();
        });

        this.onCreate(newBox);
    }

    onCreate(newBox){
        let r,g,b;
        r = parseInt(newBox.color.substring(1,3), 16);
        g = parseInt(newBox.color.substring(3,5), 16);
        b = parseInt(newBox.color.substring(5,7), 16);

        const newColor = "(" + r + ", " + g + ", " + b + ")";
        newBox.color = newColor;
        
        client({
                method: 'POST',
                path: "/api/boxes",
                entity: newBox,
                headers: { 'Content-Type': 'application/json' }
        }).done(response => {
            window.location = "#/listboxes";
        });
        
    }

    render() {
        return (
            <div className="main">
                <div className="formController">
                    <form>
                        <div className="inputBox">
                            <label htmlFor="receiverName">Reciver name</label>
                            <input type="text" ref="receiverName" required />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="weight">Weight</label>
                            <input type="text" ref="weight" pattern="[0-9]+" min="0" title="Must the only whole numbers" required/>
                        </div>
                        <div className="inputBox">
                            <label htmlFor="color">Color</label>
                            <input type="color" ref="color" required />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="rdestination">Destination</label>
                            <select ref="destination">
                                <option>Sweden</option>
                                <option>China</option>
                                <option>Brazil</option>
                                <option>Austria</option>
                            </select>
                        </div>
                        <input type="text" className="noDisplay" ref="shippingCost"></input>
                        <input type="submit" value="Save" onClick={this.handleSubmit} />
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateBox