import React from 'react'
import {withRouter} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import TextField from '@material-ui/core/TextField'
import Messages from '../../components/Messages/Messages'
import PrivateMessages from '../../components/PrivateMessages/PrivateMessages'


const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    position: 'relative',
  },
  contentBox: {
    paddingBottom: 40,
  },
  contentBody: {
    
  },
  sendMessageBox: {
    background: '#fafafa',
    padding: '20px 0 10px 0',
    borderTop: '1px solid #eee',
    position: 'fixed',
    bottom: 0, right: '15px',
    width: 'calc(100% - 220px)',
    paddingLeft: 50,
  },
  sendMessage: {
    
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    paddingLeft: 15,
    paddingTop: 15,
  },
}))


const Chat = props => {
  const classes = useStyles()

  const { channels, people, messages, privateMessages } = props.data

  // ID active channel
  let activeChannel = channels.find(channel => {
    return channel.url === props.match.params.channelName
  })
  if (activeChannel !== undefined) {
    activeChannel = activeChannel.id
  } else {
    activeChannel = 1
  }

  // ID active private chat
  let activePrivateChat = people.find(user => {
    return user.userName === props.match.params.userName
  })
  if (activePrivateChat !== undefined) {
    activePrivateChat = activePrivateChat.id
  } else {
    activePrivateChat = 0
  }

  const countMessage = messages.filter(message => message.channelId === activeChannel).length
  const countPrivateMessage = privateMessages.filter(message => message.channelId === activePrivateChat).length

  return (
    <main className={classes.content}>
      <div className={classes.contentBox}>
        <div className={classes.contentBody}>
          <Toolbar />
          {
            props.match.params.hasOwnProperty('userName')
            ? <PrivateMessages
                classes={classes}
                countMessage={countPrivateMessage}
                messages={privateMessages}
                activePrivateChat={activePrivateChat}
                people={people}
              />
            : <Messages
                classes={classes}
                countMessage={countMessage}
                messages={messages}
                activeChannel={activeChannel}
                people={people}
              />
          }
        </div>
        <div className={classes.sendMessageBox}>
          <TextField
            className={classes.sendMessage}
            fullWidth
            id="outlined-search"
            label="Send message"
            type="input"
            variant="outlined"
            value={props.inputText}
            onChange={props.inputTextChange}
            onKeyPress={event => props.addMessage(activeChannel, activePrivateChat, event)}
          />
        </div>
      </div>
    </main>
  )
}

export default withRouter(Chat)