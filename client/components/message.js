import React from 'react';

const MessageComponent = (props) => {
    const date = new Date(props.message.created_at);
    const createdAt = date.toLocaleString('en-US');
    return (
       <div className={props.message.name === 'Rob' || props.message.author_id === 4 ? 'mine': 'theirs'}>
            <div className='messageAuthor'>
                {props.message.name === 'Rob'? '': props.message.name}
                {createdAt}
            </div>
            <div className='messageBubble'>
                {props.message.content}
            </div>
       </div>
    );
};

// 2019-02-26T19:25:30.285Z

export default MessageComponent;