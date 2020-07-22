import React from 'react'
import {NavLink} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Toolbar from '@material-ui/core/Toolbar'


const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  sharp: {
    marginRight: 8,
    fontSize: 16,
  },
  navLink: {
    color: 'inherit',
    textDecoration: 'none',
  },
  active: {
    color: 'red',
  }
}));

const drawerWidth = 240

const LeftSidebar = props => {
  const classes = useStyles()

  const { channels, people } = props.data

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          <ListSubheader component="div" id="nested-list-subheader">
            Channels
          </ListSubheader>

          {channels.map((channel, index) => (
            <ListItem button key={channel.name}>
              <div className={classes.sharp}>#</div>
              <NavLink to={`/build/channel/${channel.url}`} className={classes.navLink}><ListItemText primary={channel.name} /></NavLink>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List dense>
          <ListSubheader component="div" id="nested-list-subheader">
            People
          </ListSubheader>
          {
            people.map(({userName, name, avatar, myProfile}, index) => {
              return (
                !myProfile
                ? <NavLink to={`/build/user/${userName}`} className={classes.navLink} key={name + index}>
                    <ListItem button>
                      <ListItemAvatar>
                        <Avatar
                          alt={name}
                          src={process.env.PUBLIC_URL + avatar}
                        />
                      </ListItemAvatar>
                      <ListItemText id={name} primary={name} />
                    </ListItem>
                  </NavLink>
                : null
              )
            })
          }
        </List>
      </div>
    </Drawer>
  )
}

export default LeftSidebar