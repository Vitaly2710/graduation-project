import './App.css';
import { FirstPage, } from './Pages/firstPage/StartPage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
// import { Header } from './Pages/Components/Header';
// import { Footer } from './Pages/Components/footer/Footer';
import { Redirect } from "react-router";
// import { useSelector } from 'react-redux';
import { useAppSelector } from './app/hooks';
import { selectGoogleUser } from './features/counter/counterSlice';
// import { style } from '@mui/material/node_modules/@mui/system';
import { SecondPage } from './Pages/SecondPage/SecondPage';



function App() {
  const loggedIn = useAppSelector(selectGoogleUser);
  console.log(loggedIn)
  return (
      <Router>
      <div style = {{position: "relative"}}>
        <nav style={{position: "absolute"}} >
          <ul >
            <li >
              <Link to="/"/>
            </li>
            <li>
              <Link to="/weather"/>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/weather">
          <SecondPage/>
          </Route>
          <Route path="/" exact>
            {loggedIn ? <Redirect to ="/weather"/> : <FirstPage/>}
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
