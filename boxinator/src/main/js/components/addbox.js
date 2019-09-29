/**
 * @author max.angman
 */

/*
import RouteLinks from '../components/routes';
*/

const React = require('react');

class CreateBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main">
                <div className="formController">
                    <form>
                        <div className="inputBox">
                            <label htmlFor="receiverName">Reciver name</label>
                            <input type="text" ref="receiverName" />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="weight">Weight</label>
                            <input type="text" ref="weight" pattern="[0-9]+" title="Must the only whole numbers"/>
                        </div>
                        <div className="inputBox">
                            <label htmlFor="color">Color</label>
                            <input type="color" ref="color" />
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
                        <input type="submit" value="Save" />
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateBox