import React from 'react'
import classes from './List.scss'
import Item from './Item/Item'
import AddItem from './AddItem/AddItem'

class List extends React.Component {

    state = {
      inputValue: '',
      list: [
          {title: 'Blueberry', complete: true},
          {title: 'Avocado', complete: false},
          {title: 'Almonds', complete: true},
          {title: 'Cherry tomatoes', complete: true},
          {title: 'Apricot', complete: false}
      ]
    }

    completeHandler = id => {
        // Клонує масив
        const list = this.state.list.concat()

        list[id].complete = !this.state.list[id].complete

        this.setState({list})
    }

    deleteHandler = id => {
        // Клонує масив
        const list = [...this.state.list]
        list.splice(id, 1)
        // console.log(id)
        this.setState({list})
    }

    changeInputHandler = event => {
        // console.log(event.target.value)
        this.setState({
          inputValue: event.target.value
        })
      }

    addItemHandler = event => {
        // console.log(event)
        if (this.state.inputValue !== '' && this.state.inputValue.length <= 20 ) {
            if ((event.key && event.key === 'Enter') || !event.key) {
                const list = [...this.state.list]
                list.push({title: this.state.inputValue, complete: false})

                this.setState({
                    list: list,
                    inputValue: ''
                })
            }
        }
    }
  
    render() {
        return (
            <React.Fragment>
                <AddItem
                    onAddItem={this.addItemHandler}
                    onChangeInput={this.changeInputHandler}
                    inputValue={this.state.inputValue}
                />
                <div className={classes.ListBox}>
                    { !this.state.list.length
                    ? <div className={classes.Empty}>Your Tasks List Empty</div> 
                    : <ul className={classes.List}>
                            <Item
                                list={this.state.list}
                                onClickComplete={this.completeHandler}
                                onClickDelete={this.deleteHandler}
                            />
                        </ul>
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default List