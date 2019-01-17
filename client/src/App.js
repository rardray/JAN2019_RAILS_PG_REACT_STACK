import React, { Component } from 'react';
import Dash from './Dash';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route exact path = '/' component = {Dash} />
                </Router>
            </div>
        )
    }
};

export default App;