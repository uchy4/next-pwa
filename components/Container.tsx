import React, { FunctionComponent, useState } from "react";
import clsx from 'clsx';
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper,
  makeStyles,
  Theme,
  Hidden,
  createStyles,
  IconButton,
  useTheme
} from "@material-ui/core";

// import Link from "next/link";
import { IsOnline } from "./IsOnline";

import useMediaQuery from '@material-ui/core/useMediaQuery';
import Link from "next/link";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import BuildIcon from '@material-ui/icons/Build';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NoEncryptionIcon from '@material-ui/icons/NoEncryption';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import styles from "./Container.module.css";

const main = [
  {
    text: "Dashboard",
    to: "/",
    icon: <DashboardIcon />
  }
];
const employee = [
  {
    text: "Boot",
    to: "/employee/boot",
    icon: <LockIcon />
  },
  {
    text: "Remove",
    to: "/employee/remove",
    icon: <LockOpenIcon />
  },
];
const admin = [
  {
    text: "Employees",
    to: "/admin/employees",
    icon: <SupervisorAccountIcon />
  },
  {
    text: "Complexes",
    to: "/admin/complexes",
    icon: <LocationCityIcon />
  },
  {
    text: "System",
    to: "/admin/system",
    icon: <BuildIcon />
  }
];
const client = [
  {
    text: "Exhemptions",
    to: "/client/exhemptions",
    icon: <NoEncryptionIcon />
  },
  {
    text: "Boot List",
    to: "/client/bootlist",
    icon: <DirectionsCarIcon />
  }
];
const settings = [
  {
    text: "Logout",
    to: "/logout",
    icon: <ExitToAppIcon />
  }
];

const pages = [main, admin, employee, client, settings];
const drawerWidth = 200;

const CustomLiLink: FunctionComponent<any> = (props) => {
  const { text, to, icon, handleDrawerClose } = props;
  return (
    <button onClick={handleDrawerClose} className={styles.route}>

      <Link href={to}>{/*<a href={to} className={styles.route}>*/}
        <ListItem button href={to}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      </Link>
    </button>
  );
}

export const Container: FunctionComponent = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Hidden xsDown>
        <Drawer
          className={clsx(classes.drawer, classes.drawerPaper)}
          variant="persistent"
          anchor="left"
          open={open}
          classes={
            { paper: classes.drawerPaper }
          }
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          {pages.map((item, index) =>
            (<React.Fragment key={`${index}-frag`}>
              <List key={index}>
                {item.map(i => (
                  <CustomLiLink key={i?.text} {...i} handleDrawerClose={handleDrawerClose} />
                ))}
              </List>
              {index !== pages.length && <Divider key={`${index}-divider`} />}
            </React.Fragment>))
          }
        </Drawer>
      </Hidden>
      <Hidden smUp>
        <SwipeableDrawer
          className={classes.drawer}
          anchor="left"
          open={open}
          onClose={handleDrawerClose}
          onOpen={handleDrawerOpen}
          classes={
            { paper: classes.drawerPaper }
          }
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          {pages.map((item, index) =>
            (<React.Fragment key={`${index}-frag`}>
              <List key={index}>
                {item.map(i => (
                  <CustomLiLink key={i?.text} {...i} />
                ))}
              </List>
              {index !== pages.length && <Divider key={`${index}-divider`} />}
            </React.Fragment>))
          }
        </SwipeableDrawer>
      </Hidden>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Paper className={classes.paper}>
          {children}
          <IsOnline />
        </Paper>
      </main>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
      }
    },
    contentShift: {
      [theme.breakpoints.up('sm')]: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }
    },
    paper: {
      flexGrow: 1,
      padding: theme.spacing(2),
      // margin: theme.spacing(0)
    },
  }),
);