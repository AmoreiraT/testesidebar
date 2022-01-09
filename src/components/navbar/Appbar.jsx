import React from 'react';
import {styled} from '@mui/material/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import AppBar from '@material-ui/core/AppBar';
import Blueminiicon from '../../assets/images/svg/BlueminiIcon';
import MuiAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const drawerWidth = 300;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,

    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function MyAppBar(open, handleDrawerOpen) {
  return <AppBar position="fixed" open={open}>
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{
          marginRight: '36px',
          ...(open && {display: 'none'}),
        }}
      >
        <MenuIcon />
      </IconButton>
      <Blueminiicon />
      <Typography variant="h5" noWrap component="div">
        blue projects
      </Typography>
    </Toolbar>
  </AppBar>;
}


export default MyAppBar;
