import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Landing from './pages/Landing/Landing'
import Visualize from './pages/Visualize/Visualize'
import '../assets/style/global.scss'



const App = () => (
      <div id='global'>
         <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/home' component={Home}/>
            <Route exact path='/visualize' component={Visualize} />
         </Switch>
      </div>
);

export default App;
