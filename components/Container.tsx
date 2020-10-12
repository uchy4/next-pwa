import { FunctionComponent, useState } from "react";
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
  IconButton
} from "@material-ui/core";

// import Link from "next/link";
import { IsOnline } from "./IsOnline";
import { MdxTagParse } from "./MdxTagParse";

import PagesIcon from "@material-ui/icons/Pages";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";

const pages = ["about", "list", "material-theme", "my-mdx", "client", "admin", "employee"];
const drawerWidth = 8 * 29;

export const Container: FunctionComponent = ({ children }) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const content = (
    <>
      <List>
        <a href="/">{/*was Link*/}
          <ListItem button component="a">
            <ListItemIcon children={<HomeIcon />} />
            <ListItemText primary="Home" />
          </ListItem>
        </a>
      </List>
      <Divider />
      {/* <List> */}
        {pages.map(text => (
          <a key={text} href={`/${text}`}>{/*was Link*/}
            <ListItem button>
              <ListItemIcon children={<PagesIcon />} />
              <ListItemText primary={text} />
            </ListItem>
          </a>
        ))}
      {/* </List> */}
    </>
  );

  return (
    <div className={clsx(classes.container, !mobileOpen && classes.paperShift)}>
      <CssBaseline />
      <AppBar position="fixed" className={clsx(classes.appBar, {
        [classes.appBarShift]: mobileOpen,
      })}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => setMobileOpen(!mobileOpen)}
            children={<MenuIcon />}
            className={clsx(classes.menuButton, mobileOpen && classes.hide, classes.icon)}
          />
          <Typography variant="h6" children="Next PWA" />
        </Toolbar>
      </AppBar>

      <nav className={classes.nav}>
        <Hidden smUp>
          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={() => setMobileOpen(!mobileOpen)}
            classes={{ paper: classes.drawer }}
            ModalProps={{
              keepMounted: true
            }}
            children={content}
          />
        </Hidden>

        <Hidden xsDown>
          <Drawer
            open
            variant="permanent"
            anchor="left"
            classes={{ paper: classes.drawer }}
            children={content}
          />
        </Hidden>
      </nav>

      <Paper className={clsx(classes.paper, !mobileOpen && classes.paperShift)}>
        <main
          className={clsx(classes.content, !mobileOpen && classes.contentShift)}>
          <MdxTagParse children={children} />
        </main>
        <IsOnline />
      </Paper>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      marginTop: theme.spacing(8)
    },
    toolbar: {
      justifyContent: "space-between"
    },
    paper: {
      flexGrow: 1,
      padding: theme.spacing(2),
      margin: theme.spacing(3)
    },
    paperShift: {
      // width: `calc(100% - ${drawerWidth}px)`,
      // marginLeft: 0,
      display: "flex",
      justifyContent: "end",
      // margin: theme.spacing(3)
    },
    nav: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth
      }
    },
    icon: {
      color: theme.palette.common.white
    },
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
      padding: theme.spacing(1),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      marginLeft: 0,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  })
);
