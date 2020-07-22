import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import FastfoodIcon from '@material-ui/icons/Fastfood'
import deepPurple from '@material-ui/core/colors/deepPurple'


const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: deepPurple[700],
  },
  logoBox: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    marginRight: '10px',
  },
  topAvatar: {
    width: 40,
    height: 40,
    marginLeft: 'auto',
    marginRight: 5,
  },
  topAvatarImg: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
  }
}));


const Header = props => {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.logoBox} variant="h6" noWrap>
            <FastfoodIcon className={classes.logo} /> Dracula Messenger
          </Typography>
          <div className={classes.topAvatar}>
            <img
              className={classes.topAvatarImg}
              src={props.avatarUrl}
              alt={props.avatarName}
              title={props.avatarName}
            />
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header