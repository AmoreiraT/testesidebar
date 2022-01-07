import './App.css';
import {Switch, Route} from 'react-router-dom';
import * as styles from '@material-ui/styles';
import Home from './views/home/Home';
import Contact from './views/contato/Contact';
import About from './views/sobre/About';
import Drawer from './components/sidebar/Drawer';
import {blue} from '@material-ui/core/colors';

const useStyles = styles.makeStyles({
  container: {
    display: 'flex',
    color: blue,
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Drawer/>
      <Switch>
        <Route exact from="/" render={(props) => <Home {...props} />} />
        <Route path="/contact" render={(props) => <Contact {...props} />} />
        <Route path="/about" render={(props) => <About {...props} />} />
      </Switch>
    </div>
  );
}

export default App;

