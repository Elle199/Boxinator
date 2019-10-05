/**
 * @author max.angman
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
        if(this.validateInputs(e)) {
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
    }

    validateInputs(e){
        let passed = {}; // Store boolean values for each evaluation

        const weight = ReactDOM.findDOMNode(this.refs["weight"]).value; // Get weight value
        const receiverName = ReactDOM.findDOMNode(this.refs["receiverName"]).value; // Get receiver value
        const color = ReactDOM.findDOMNode(this.refs["color"]).value; // Get color value

        // Make sure that the box has a weight and that it's not negative
        const weightWarn = ReactDOM.findDOMNode(this.refs["weightWarn"]);
        
        if(weight > 0){ // Values over 0 counts as a valid weight
            passed["weight"] = true;
            weightWarn.innerHTML = "";

            //Toggle active class for the error info
            if(Array.from(weightWarn.classList).includes("active")) {
                weightWarn.classList.remove("active");
            }
        } else {
            passed["weight"] = false;

            // Check what information should be shown to the user
            if(weight == ""){
                weightWarn.innerHTML = "Please add a weight.";
            } else if (weight <= 0) {
                weightWarn.innerHTML = "The weight must above 0.";
            }

            //Toggle active class for the error info
            if(!Array.from(weightWarn.classList).includes("active")){
                weightWarn.classList.add("active");
            }
        }

        // Make sure that a name for the receiver is entered
        const receiverNameWarn = ReactDOM.findDOMNode(this.refs["receiverNameWarn"]);
        
        // Make sure that the input has a value
        if(receiverName !== undefined && receiverName !== null && receiverName !== ""){
            passed["receiver"] = true;
            receiverNameWarn.innerHTML = "";

            if(Array.from(receiverNameWarn.classList).includes("active")){
                receiverNameWarn.classList.remove("active");
            }
        } else {
            passed["receiver"] = false;
            receiverNameWarn.innerHTML = "Please add a receiver for the box.";
            
            if(!Array.from(receiverNameWarn.classList).includes("active")){
                receiverNameWarn.classList.add("active");
            }
        }

        // Make sure color is at least changed
        const colorWarn = ReactDOM.findDOMNode(this.refs["colorWarn"]);

        // Default color is black, if it's not black the user has changed the color
        if(color != "#000000"){
            passed["color"] = true;
            colorWarn.innerHTML = "";

            if(Array.from(colorWarn.classList).includes("active")){
                colorWarn.classList.remove("active");
            }
        } else {
            passed["color"] = false;
            colorWarn.innerHTML = "Please select a color.";

            if(!Array.from(colorWarn.classList).includes("active")){
                colorWarn.classList.add("active");
            }
        }
        
        return !JSON.stringify(passed).includes("false");
    }

    onCreate(newBox){
        // Format color in Hex to be in RGB
        let r,g,b;
        r = parseInt(newBox.color.substring(1,3), 16);
        g = parseInt(newBox.color.substring(3,5), 16);
        b = parseInt(newBox.color.substring(5,7), 16);

        // Update box color value to be RGB instead of Hex
        const newColor = "(" + r + ", " + g + ", " + b + ")";
        newBox.color = newColor;
        
        // Send POST request to add to Db
        client({
                method: 'POST',
                path: "/api/boxes",
                entity: newBox,
                headers: { 'Content-Type': 'application/json' }
        }).done(response => {
            // Update which view the user sees

            // TODO: Add validation to POST request
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
                            <p className="inputWarning" ref="receiverNameWarn">Error</p>
                        </div>
                        <div className="inputBox">
                            <label htmlFor="weight">Weight</label>
                            <input type="text" ref="weight" pattern="[0-9]+" min="0" title="Must the only whole numbers" required/>
                            <p className="inputWarning" ref="weightWarn">Error</p>
                        </div>
                        <div className="inputBox">
                            <label htmlFor="color">Color</label>
                            <input type="color" ref="color" required />
                            <p className="inputWarning" ref="colorWarn">Error</p>
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