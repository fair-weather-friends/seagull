import React from 'react';

const MessageComponent = (props) => {
    return (
       <div className={props.message.author === 'Rob' ? 'mine': 'theirs'}>
            <div className='messageAuthor'>
                {props.message.author === 'Rob'? '': props.message.author}
                {props.message.time}
            </div>
            <div className='messageBubble'>
                {props.message.content}
            </div>
       </div>
    );
};

export default MessageComponent;