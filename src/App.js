import React from 'react';
import {Container} from 'react-bootstrap';  
import './App.css';
import Menu from './containers/menu/Menu';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TabLogin from './components/tabLogin/TabLogin';
import Login from './components/login/Login';
import SetPreview from './components/setPreview/SetPreview';

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path='/' component={Menu}/>
          <Route exact path='/login' component={TabLogin}/>
          <Route exact path='/set/:id' component={SetPreview}/>
          {/*<Route component={DefaultPage} />*/}
        </Switch>
      </Router>
    </Container>
    // <TabLogin/>
  );
}

export default App;
