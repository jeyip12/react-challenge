import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './components/home';
import Movies from './components/movies';
import Series from './components/series';


class App extends Component {
    render () {
      return (
        <Router>
          <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/series' component={Series} />
            <Route exact path='/movies' component={Movies} />
          </div>
        </Router>
      )
    }
  }

export default App;
