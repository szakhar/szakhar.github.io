import React, {Component} from 'react'
import {Route} from 'react-router-dom'
// import { makeStyles } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/styles'
import deepPurple from '@material-ui/core/colors/deepPurple'
import Header from '../../components/Header/Header'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import Chat from '../Chat/Chat'


const styles = () => ({
  root: {
    display: 'flex',
    '& label.Mui-focused': {
      color: deepPurple[700],
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: deepPurple[700],
      },
      '&:hover fieldset': {
        borderColor: deepPurple[700],
      },
    },
  },
})


class Messenger extends Component {

  state = {
    channels: [
      {id: 1, name: 'Blood', url: 'blood'},
      {id: 2, name: 'Transylvania', url: 'transylvania'},
      {id: 3, name: 'Gothic horror', url: 'gothic-horror'},
      {id: 4, name: 'Vampire literature', url: 'vampire-literature'},
    ],
    people: [
      {id: 1, userName: 'frederick-aguirre', name: 'Frederick Aguirre', avatar: '/images/avatar/1.jpg', myProfile: false},
      {id: 2, userName: 'lamar-boone', name: 'Lamar Boone', avatar: '/images/avatar/2.jpg', myProfile: false},
      {id: 3, userName: 'emeli-ware', name: 'Emeli Ware', avatar: '/images/avatar/3.jpg', myProfile: false},
      {id: 4, userName: 'anna-bloom', name: 'Anna Bloom', avatar: '/images/avatar/4.jpg', myProfile: false},
      {id: 5, userName: 'mark-derrick', name: 'Mark Derrick', avatar: '/images/avatar/5.jpg', myProfile: false},
      {id: 6, userName: 'sasha-zakharchuk', name: 'Sasha Zakharchuk', avatar: '/images/avatar/6.jpg', myProfile: true}
    ],
    messages: [
      {
        id: 1,
        userId: 5,
        channelId: 4,
        message: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
      },
      {
        id: 2,
        userId: 1,
        channelId: 2,
        message: `Do you have a suggestion for a good present for John on his work
          anniversary. I am really confused & would love your thoughts on it.`,
      },
      {
        id: 3,
        userId: 2,
        channelId: 1,
        message: 'I am try out this new BBQ recipe, I think this might be amazing',
      },
      {
        id: 4,
        userId: 3,
        channelId: 2,
        message: 'I have the tickets to the ReactConf for this year.',
      },
      {
        id: 5,
        userId: 4,
        channelId: 4,
        message: 'My appointment for the doctor was rescheduled for next Saturday.',
      },
      {
        id: 6,
        userId: 5,
        channelId: 2,
        message: `Menus that are generated by the bottom app bar (such as a bottom
          navigation drawer or overflow menu) open as bottom sheets at a higher elevation
          than the bar.`,
      },
      {
        id: 8,
        userId: 4,
        channelId: 1,
        message: `Who wants to have a cookout this weekend? I just got some furniture
          for my backyard and would love to fire up the grill.`,
      },
      {
        id: 9,
        userId: 1,
        channelId: 1,
        message: `What if I told you… you can break the rules?`,
      },
      {
        id: 10,
        userId: 5,
        channelId: 1,
        message: `Everybody says to “build things!” but what good is that when 
                  you’re not sure what the code is doing anyway?`,
      },
      {
        id: 11,
        userId: 3,
        channelId: 1,
        message: `You start to wish that NPM would disappear overnight.`,
      },
    ],
    privateMessages: [
      {
        id: 1,
        userId: 5,
        channelId: 5,
        message: "Hi Sasha. How are you?",
      },
      {
        id: 2,
        userId: 1,
        channelId: 1,
        message: `Do you remeber me?`,
      },
      {
        id: 3,
        userId: 6,
        channelId: 1,
        message: `Yes of course.`,
      },
      {
        id: 4,
        userId: 6,
        channelId: 5,
        message: `I'm fine.`,
      },
      {
        id: 5,
        userId: 6,
        channelId: 4,
        message: `Hey. How are you?`,
      },
      {
        id: 6,
        userId: 2,
        channelId: 2,
        message: `Hey.`,
      },
      {
        id: 7,
        userId: 6,
        channelId: 2,
        message: `Hey. How are you?`,
      },
      {
        id: 8,
        userId: 2,
        channelId: 2,
        message: `I'm pretty good. One second you’re nodding along, convinced that you understand.`,
      },
      {
        id: 9,
        userId: 6,
        channelId: 2,
        message: `The next, you’re staring at a blinking cursor wondering what to type.`,
      },
      {
        id: 10,
        userId: 2,
        channelId: 2,
        message: `You’ll be able to evaluate libraries on their merit and add them as needed.`,
      },
    ],
    inputText: ''
  }


  addMessageHandler = (activeChannel, activePrivateChat, event) => {
    if(event.key && event.key === 'Enter') {

      let channel,chat
      if (activePrivateChat) {
        channel = activePrivateChat
        chat = this.state.privateMessages
      } else {
        channel = activeChannel
        chat = this.state.messages
      }

      const messages = [ ...chat ]
      // console.log('Нажалось', event.target.value)
      const message = {
        id: chat.length + 2,
        userId: 6,
        channelId: channel,
        message: event.target.value,
      }

      messages.push(message)

      if (activePrivateChat) {
        this.setState({
          privateMessages: messages,
          inputText: ''
        })
      } else {
        this.setState({
          messages,
          inputText: ''
        })
      }
    }
  }

  inputTextChangeHandler = inputText => {
    if (inputText.trim() === '') {
      return
    }

    this.setState({
      inputText
    })
  }


  render() {
    const { classes } = this.props

    // Потрібно для того, що передати в Route компонент з параметрами
    const chatProps = () => {
      return (
        <Chat
          data={this.state}
          addMessage={this.addMessageHandler}
        />
      )
    }

    return (
      <div className={classes.root}>
        <Header
          avatarName={this.state.people[5].name}
          avatarUrl={process.env.PUBLIC_URL + this.state.people[5].avatar}
        />
        <LeftSidebar
          channels={this.state.channels}
          data={this.state}
          inputText={this.state.inputText}
          inputTextChange={event => this.inputTextChangeHandler(event.target.value)}
        />

        <Route path={process.env.PUBLIC_URL + "/"} exact component={chatProps} />
        <Route path={process.env.PUBLIC_URL + "/channel/"} exact component={chatProps} />
        <Route path={process.env.PUBLIC_URL + "/channel/:channelName"} exact component={chatProps} />
        <Route path={process.env.PUBLIC_URL + "/user/"} exact component={chatProps} />
        <Route path={process.env.PUBLIC_URL + "/user/:userName"} exact component={chatProps} />
        {/* <Chat
          data={this.state}
          addMessage={this.addMessageHandler}
        /> */}
      </div>
    )
  }
}

export default withStyles(styles)(Messenger)