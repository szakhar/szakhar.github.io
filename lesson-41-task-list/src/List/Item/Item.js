import React from 'react'
import classes from './Item.scss'

const Item = props => {
    // console.log(props.list)

    return (
        <React.Fragment>
            { props.list.map((item, index) => {
                const cls = [classes.Item]

                if (props.list[index].complete) {
                    cls.push(classes.Complete)
                }

                return (
                    <li
                        className={cls.join(' ')}
                        key={index}
                    >
                        <span
                            onClick={() => props.onClickComplete(index)}
                        >
                            {item.title}
                        </span>
                        <span
                            className={classes.Trash}
                            onClick={() => props.onClickDelete(index)}
                        >
                            <i className="fa fa-trash"/>
                        </span>
                    </li>
                )
            }) }
        </React.Fragment>
    )
}

export default Item