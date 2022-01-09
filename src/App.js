import {Switch, Route} from 'react-router-dom';
import * as styles from '@material-ui/styles';
import Home from './views/home/Home';
import Contact from './views/contato/Contact';
import About from './views/sobre/About';
import Drawer from './components/sidebar/Drawer';
import {blue} from '@material-ui/core/colors';
import bg from './assets/images/bg.png';

const drawerWidth = 300;
const m3ReadOnlyLightSurface2 = `rgba(251,253,255,1)`;
const transparentBlack2 = `rgba(0,0,0,0.25)`;
const transparentMidnightBlue = `rgba(5, 21, 63, 0.55)`;
const transparentSlateBlue = `rgba(103,80,164,0.03)`;

const useStyles = styles.makeStyles({
  container: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    color: blue,
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',

  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Drawer/>
      {/* <Switch>
        <Route exact from="/" render={(props) => <Home {...props} />} />
        <Route path="/contact" render={(props) => <Contact {...props} />} />
        <Route path="/about" render={(props) => <About {...props} />} />
      </Switch> */}
    </div>
  );
}

export default App;

