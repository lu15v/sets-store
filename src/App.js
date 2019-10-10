import React from 'react';
import {Container} from 'react-bootstrap';  
import './App.css';
import Menu from './containers/menu/Menu';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TabLogin from './components/tabLogin/TabLogin';
//import Login from './components/login/Login';
import Footer from './components/footer/Footer';
import SetPreview from './components/setPreview/SetPreview';
import Terms from './components/terms/Terms';
import Cart from './containers/cart/Cart';
import DisplayMessageWHeader from './components/utilities/DisplayMessageWHeader';
//redux
import reducer from './redux/reducers/reducer';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Router>
          <Switch>
            <Route exact path='/' component={Menu}/>
            <Route path='/login' component={TabLogin}/>
            <Route path='/set/:id' component={SetPreview}/>
            <Route path='/terms&cond' component={Terms}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/verify' render={() => <DisplayMessageWHeader header={"Just one more step...."} body={"We are very happy to have you here! But first, check your email and verify your account"}/>}/>
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
