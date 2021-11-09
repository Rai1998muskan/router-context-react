// import logo from './logo.svg';
import './App.css';
import { Route , Switch } from 'react-router';
import {AllMeetups} from './Pages/AllMeetups';
import {Favorites} from './Pages/Favorites';
import {NewMeetups} from './Pages/NewMeetups'
import { Layout } from './Components/layout/Layout';
 
function App() {
  return (
   <Layout>
    
    <Switch>
    <Route path="/all">
       <AllMeetups/>
    </Route>
    <Route path="/fav">
       <Favorites/>
    </Route>
    <Route path="/new">
       <NewMeetups/>
    </Route>
    </Switch>
   </Layout>
   
   

  );
}

export default App;
