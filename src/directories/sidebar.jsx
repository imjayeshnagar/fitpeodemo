import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
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
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import config from '../coreFiles/config';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

// ---------icons----------------
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2Icon from '@mui/icons-material/Person2';
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Face2Icon from '@mui/icons-material/Face2';
import PaidIcon from '@mui/icons-material/Paid';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';


import { Link } from 'react-router-dom';

const drawerWidth = 240;

const menuList = [
  {
    name: 'Dashboard',
    icon: <DashboardIcon />,
    link: 'dashboard',
  },
  {
    name: 'Teachers',
    icon: <Person2Icon />,
    link: 'teacher',
  },
  {
    name: 'Students',
    icon: <GroupIcon />,
  },
  {
    name: 'Courses',
    icon: <SchoolIcon />,
  },
  {
    name: 'Library',
    icon: <AutoStoriesIcon />,
  },
  {
    name: 'Department',
    icon: <ApartmentIcon />,
  },
  {
    name: 'Staff',
    icon: <Face2Icon />,
  },
  {
    name: 'Fees',
    icon: <PaidIcon />,
  }
]
// ========== Dropdown menus==============
const ArrowDropDown = [
  {
    menu1: "All teacher",
    // menu2 : "add teacher",
    // menu3 : "edit teacher",
  },
  {
    menu1: "All student",
    // menu2 : "add teacher",
    // menu3 : "edit teacher",
  },
  

]
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
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
  ...(!open && {
    width: "95.8%",
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
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
  }),
);

export default function Sidebar(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openmenu = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  }
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [openMenu, setOpenMenu] = React.useState(false);

  const handleClick = (index) => () => {
    setOpenMenu(state => ({
      ...state,
      [index]: !state[index]
    }))
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} className='header'>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              color: "#000",
              ...(open && { display: 'block' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="h2" className='header-title'>
            {props.title}
          </Typography>
          <div className='right-side'>
            <NotificationsActiveOutlinedIcon />
              <Button id="fade-button" aria-controls={openmenu ? 'fade-menu' : undefined}  aria-haspopup="true"
               aria-expanded={openmenu ? 'true' : undefined}
                onClick={handleMenu}
                className='my-profile-icon'
                >
                  <img src='images/avatar4.png'/>
                  kratika singh
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={openmenu}
                onClose={handleCloseMenu}
                TransitionComponent={Fade}
                className='profile-menu'
              >
                <MenuItem onClick={handleCloseMenu}><PersonOutlineOutlinedIcon/>Account</MenuItem>
                <MenuItem onClick={handleCloseMenu}><EmailOutlinedIcon/>Inbox</MenuItem>
                <MenuItem onClick={handleCloseMenu}><SettingsOutlinedIcon/>Setting</MenuItem>
                <MenuItem onClick={handleCloseMenu}><LogoutOutlinedIcon/> Logout</MenuItem>
              </Menu>
            </div>
        </Toolbar>

      </AppBar>
      <Drawer variant="permanent" open={open} className='sidebar'>
        <div className='schl-logo'>
          <ListItem key="Dashboard" disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}>
              <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </div>
        {/* <div className='profile-section'>
          <img src='images/avatar4.png' />
          <Typography component="h2" variant='h5'>
            kratika singh
          </Typography>
          <Typography component="p" variant='h5'>
            Admin
          </Typography>
        </div> */}
        {/* <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader> */}
        <Divider />
        <List>
          {menuList.map((lists, index) => (
            <ListItem key={lists.name} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  onClick={handleClick(index)}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color: '#ffffffc7',
                    }}
                  >
                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                    {lists.icon}
                  </ListItemIcon>
                  <ListItemText primary={lists.name} sx={{ opacity: open ? 1 : 0 }} className='side-menu' />
                </ListItemButton>
                {openMenu[index] ?
                  <div className='dropdown'>
                    {ArrowDropDown.map((list) => (
                      <ul>
                        <li><Link to={`${config.baseUrl}` + lists.link}>{list.menu1}</Link></li>
                        {/* <li>{list.menu2}</li>
                        <li>{list.menu3}</li> */}
                      </ul>
                    ))}

                  </div>
                  :
                  ""
                }
            </ListItem>
          ))}
        </List>
      </Drawer>

    </Box>
  );
}
