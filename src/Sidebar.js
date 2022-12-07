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
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import KeyIcon from '@mui/icons-material/Key';
// import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ReportIcon from '@mui/icons-material/Report';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CategoryIcon from '@mui/icons-material/Category';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PublicIcon from '@mui/icons-material/Public';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import StyleIcon from '@mui/icons-material/Style';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { Link } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Color from './Page/Color';
import City from './Page/City';
import Tags from './Page/Tags';
import Country from './Page/Country';
import Products from './Page/Products';
import DashBoard from './Page/DashBoard';
import ChangePassward from './Page/ChangePassward';
// import Avatar from '@material-ui/core/Avatar';
import pro1 from './Image/pro1.png'

const drawerWidth = 240;

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
export default function MiniDrawer() {
  const [title, setTitle] = React.useState("");
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const clickHandler = (val) => {
    setTitle(val);
  };
  const itamsList = [
    {
      name: 'DashBoard',
      icon: <DashboardIcon />,
      path: "/"
    },

    {
      name: 'New Profile',
      icon: <PersonAddIcon />,
      path: "/newprofile"
    },
    {
      name: 'Change Passward',
      icon: <KeyIcon />,
      path: "/changepassword"
    },
    {
      name: 'Reports',
      icon: <ReportIcon />,
      path: "/reports"
    },
    {
      name: 'Products',
      icon: <ProductionQuantityLimitsIcon />,
      path: "/products"
    },
    {
      name: 'Brand',
      icon: <BrandingWatermarkIcon />,
      path: "/brand"
    },
    {
      name: 'Category',
      icon: <CategoryIcon />,
      path: "/category"
    },
    {
      name: 'City',
      icon: <LocationCityIcon />,
      path: "/city"
    },
    {
      name: 'Country',
      icon: <PublicIcon />,
      path: "/country"
    },
    {
      name: 'Customer',
      icon: <SupportAgentIcon />,
      path: "/customer"
    },
    {
      name: 'Tags',
      icon: <StyleIcon />,
      path: "/tags"
    },
    {
      name: 'Color',
      icon: <ColorLensIcon />,
      path: "/color"
    }

  ]

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {title}
            <img style={{width:'40px',height:'40px',borderRadius:'25px'}} alt="Remy Sharp" src={pro1} />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {itamsList.map((itam) => {
            const { name, icon, path } = itam;
            return (

              <Link to={path} onClick={() => clickHandler(name)}>
                <ListItem key={name} disablePadding sx={{ display: 'block' }}>

                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}

                  >
                    {icon && <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      {icon}
                    </ListItemIcon>}
                    <ListItemText primary={name} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>

                </ListItem>
              </Link>
            )
          })}
        </List>
        <Divider />
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
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
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>
          <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/changepassword" element={<ChangePassward />} />
          <Route path="/products" element={<Products />} />
          <Route path="/city" element={<City />} />
          <Route path="/country" element={<Country />} />
          <Route path="/tags" element={<Tags />} />
            <Route path="/color" element={<Color />} />
          </Routes>
        </Typography>
        {/* <Typography paragraph>
         <h1>SAURABH SINGH</h1>
        </Typography> */}
      </Box>
    </Box>
  );
}