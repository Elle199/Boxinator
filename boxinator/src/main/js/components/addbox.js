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
        console.log("Hi from addbox.js");
        
        return (
            <div className="main">
    
                <form>
                    <input type="text" ref="receiverName" />
                    <input type="text" ref="weight" />
                    <input type="color" ref="color" />
                    <input type="text" list="destinations" ref="destination" />
                    <datalist id="destinations">
                        <option>Sweden</option>
                        <option>China</option>
                        <option>Brazil</option>
                        <option>Austria</option>
                    </datalist>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default CreateBox