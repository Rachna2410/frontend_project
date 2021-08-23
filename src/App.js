import React from "react";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddUser from './pages/AddUser';
import Users from './pages/Users';
import Weather from './pages/Weather';
import Sidebar from './components/Sidebar';
function App() {
  return (
<>

    <Router>
      <Sidebar />
      <Switch>
       
        <Route path='/adduser'  component={AddUser} />
        <Route path='/users' component={Users} />
        <Route path='/weather' component={Weather} />
        
      </Switch>
    </Router>
  
   </> 
  );
}

export default App;
