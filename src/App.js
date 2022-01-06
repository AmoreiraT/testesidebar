import './App.css';
import { Switch, Route} from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

import Home from "./views/home/home";
import Contact from "./views/contato/contact";
import About from "./views/sobre/about";
import Drawer from './components/navbar/drawer';

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Drawer/>
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact path="/contact" render={props => <Contact {...props} />} />
        <Route exact path="/about" render={props => <About {...props} />} />
      </Switch>
    </div>
  );
}

export default App;

