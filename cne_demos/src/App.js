// import './App.css';
import './Resources/CSS/Todo.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './Components/08-Routing/About';
import Shop from './Components/08-Routing/Shop';
import Nav from './Components/08-Routing/Nav';
import Users from './Components/08-Routing/Users';
import Tesco from './Components/09-Data-requests/Tesco';
import SearchableList from './Components/06-Lifting-State/SearchableList';

function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Tesco/>
        <Switch>
          <div>
            {/* <Route path="/" exact component={Home}/> */}
            <Route 
              path="/about" 
              component={About}/>
            <Route path="/shop">
              <Shop info="Sav says hi"/>
            </Route>
            {/* <Route path="/users" component={ListAll}/> */}
            <Route path="/users/:id" component={Users}/>
            <Route path="/tesco" component={Tesco}/>
          </div>
        </Switch>
      </Router>
    </>
  );
}
export default App;

// to run - in the terminal navigate to the same
// location as your package.json
// run npm start