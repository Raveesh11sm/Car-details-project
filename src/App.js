import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { useState } from 'react';
import Signup from './Components/Signup';
// import "bootstrap/dist/css/bootstrap.min.css"
import Admin from './Components/Admin';
import SuperAdmin from './Components/SuperAdmin';
function App() {
 const [logout, setlogout] = useState(false)
//  console.log(logout);

  return (
    <BrowserRouter>
  <div className="App">
   <Navbar logout={logout} setlogout={setlogout}/>
   <Switch>
   <Route path="/adminLogin">
        <Login setlogout={setlogout}  />
        </Route>
        <Route path="/adminSignup">
          <Signup />
        </Route> 
        <Route path="/admin">
       <Admin />
        </Route> 
        <Route path="/superAdmin">
       <SuperAdmin />
        </Route> 
        <Route exact path="/">
          <Home />
        </Route> 
    
      </Switch>
           
     
    </div>
    </BrowserRouter>
  
  );
}

export default App;
