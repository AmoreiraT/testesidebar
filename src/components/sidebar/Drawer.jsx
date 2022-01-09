import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {blue} from '@mui/material/colors';
import Blueminiicon from '../../assets/images/svg/BlueminiIcon';
import SignificationFlag from '../../assets/images/svg/siginificon';
import MyAppBar from '../navbar/Appbar';
import {transparent} from 'material-ui/styles/colors';
import {blue700} from 'material-ui/styles/colors';
import UltimosAcessadosComponent from './Button';
import {TableRow} from 'material-ui';

const drawerWidth = 300;
const m3ReadOnlyLightSurface2 = `rgba(251,253,255,1)`;
const transparentBlack2 = `rgba(0,0,0,0.25)`;
const transparentMidnightBlue = `rgba(5, 21, 63, 0.55)`;
const transparentSlateBlue = `rgba(103,80,164,0.03)`;

const openedMixin = (theme) => ({
  width: drawerWidth,


  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,


  }),
  overflowX: 'hidden',
  color: m3ReadOnlyLightSurface2,
  backgroundColor: transparentMidnightBlue,

});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',

  color: m3ReadOnlyLightSurface2,
  backgroundColor: transparentMidnightBlue,

  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',


  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),

  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {

  color: m3ReadOnlyLightSurface2,
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

  color: m3ReadOnlyLightSurface2,
  backgroundColor: transparentMidnightBlue,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp:
    (prop) => prop !== 'open',
})(
    ({theme, open}) => ({
      width: drawerWidth,

      backgroundColor: transparentMidnightBlue,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',

      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
      backgroundColor: transparentMidnightBlue,
      color: m3ReadOnlyLightSurface2,

    }),

);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (

    <Box sx={{display: 'flex'}}>

      <CssBaseline />
      {myAppBar(open, handleDrawerOpen)}
      {/* <MyAppBar open={open} handleDrawerOpen={handleDrawerOpen} /> */}

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          {open === true ?
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ?
                          <ChevronRightIcon htmlColor='rgba(251,253,255,1)' /> :
              <ChevronLeftIcon htmlColor='rgba(251,253,255,1)' />}
          </IconButton> : <ChevronLeftIcon htmlColor='rgba(251,253,255,0)' />

          }
        </DrawerHeader>
        <Divider />
        {/* <UltimosAcessadosComponent /> */}
        <List>


          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>

              <ListItemIcon>
                {index % 4 === 0 ? <SignificationFlag /> : <Blueminiicon />

                }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" style={{
        paddingTop: '80px',

        backgroundColor: `rgba(251,253,255,0.05)`,
      }} sx={{flexGrow: 1, p: 3}}
      >
        {/* <DrawerHeader /> */}
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consebi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue n
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}


function myAppBar(open, handleDrawerOpen) {
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

