import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import MomentUtils from '@date-io/moment';
import "moment/locale/es";
import moment from 'moment';

// Routes
import { Progress, Inputs } from './routes'

// Components
import Navigation from './components/Navigation';

ReactDOM.render(
  <MuiPickersUtilsProvider utils={MomentUtils} locale={moment.locale("es")}>
    <Router>
      <Switch>
        <Navigation />
        <Route path='/progress' component={Progress} />
        <Route path='/inputs' component={Inputs} />
      </Switch>
    </Router>
  </MuiPickersUtilsProvider>,
  document.getElementById('root')
);


