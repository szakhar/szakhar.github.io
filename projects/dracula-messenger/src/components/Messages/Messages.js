import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Typography from '@material-ui/core/Typography'


const Messages = props => {
  const {classes, countMessage, messages, activeChannel, people} = props

  return (
    <List className={classes.list}>
      {
        countMessage > 0
        ? messages.map(({ id, userId, channelId, message }) => (
            activeChannel === channelId
            ? <React.Fragment key={id + Date.now().toString()}>
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar alt={people[userId - 1].name} src={process.env.PUBLIC_URL + people[userId - 1].avatar} />
                  </ListItemAvatar>
                  <ListItemText primary={people[userId - 1].name} secondary={message} />
                </ListItem>
              </React.Fragment>
            : null
          ))
        : <Typography className={classes.secondaryHeading}>В даному каналі нема повідомлень.</Typography>
      }
    </List>
  )
}

export default Messages