import React from 'react'

function Message(props) {
    return (
        <div>
            <h2>
                {props.username}:
            </h2>
            <p>{props.text}</p>
        </div>
    )
}

export default Message
