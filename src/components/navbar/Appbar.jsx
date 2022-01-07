import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import ResponsiveDrawer from '../sidebar/Drawer';

const drawerWidth = 300;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },


  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,

  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


function MyAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        {ResponsiveDrawer.drawerButton()}
        <Typography variant="h6" noWrap>
          Blue
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default MyAppBar;
