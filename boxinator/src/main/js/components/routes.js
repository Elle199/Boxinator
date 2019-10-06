/**
 * @author max.angman
 */

import CreateBox from '../components/addbox';
import NotFound from './notfound';
import { Route, NavLink, Link, HashRouter as Router, Switch } from 'react-router-dom';
import { BoxList } from './listboxes';

const React = require('react');

class RouteLinks extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navigation">
                        <ul className="navList">
                            <li className="navItem">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="navItem">
                                <NavLink activeClassName="active" to="/addbox/">Add new box</NavLink>
                            </li>
                            <li className="navItem">
                                <NavLink activeClassName="active" to="/listboxes/">List boxes</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={BoxList} />
                        <Route exact path="/listboxes/" component={BoxList} />
                        <Route exact path="/addbox/" component={CreateBox} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default RouteLinks