import React from 'react';
import {Container} from 'react-bootstrap';  
import './App.css';
import Menu from './containers/menu/Menu';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TabLogin from './components/tabLogin/TabLogin';
//import Login from './components/login/Login';
import Footer from './components/footer/Footer';
import SetPreview from './components/setPreview/SetPreview';

//redux
import {reducer} from './redux/reducers/reducer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
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
      <Footer/>
    </Provider>
    // <TabLogin/>
  );
}

export default App;
