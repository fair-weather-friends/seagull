import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from '../components/message';
import * as actions from '../actions/actions';
import io from 'socket.io-client';


class Messenger extends Component {
    constructor(props) {
        super(props);
        this.socket = io('http://192.168.0.219:3000')
    }

    connectToSocket = () => {
        this.socket.on('connect', () => {
            console.log(`Connected. ID: ${this.socket.id}`)
            this.socket.emit('client-connect', 'hey from client')
            this.socket.on('server-connect', (data) => {
                console.log(data)
            })
        })
    }

    componentDidMount(){
        console.log('mounted');
        this.props.getMessages();
        this.connectToSocket();
    }

    componentDidUpdate(){
        const messagesWrapper = document.getElementById('messagesWrapper')
        messagesWrapper.scrollTop = messagesWrapper.scrollHeight
    }

    render() {
        const messages = this.props.messages.map((message, i) => <Message key={i} message={message}/> )
        return (
            <div className='half'>
                <div className='inner'>
                    <div id="messagesWrapper">
                        {messages}
                    </div>
                    <form className="formBox" onSubmit={(e) => e.preventDefault()}>
                        <input id='messageInput' type='text'/>
                        <button className='messageButton' onClick={this.props.addMessage} >+</button>
                    </form>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (store) => ({
    messages: store.messageReducer.messages
});

const mapDispatchToProps = (dispatch) => ({
    getMessages: () => dispatch(actions.getMessages()),
    addMessage: () => {
        const input = document.getElementById('messageInput');
        dispatch(actions.addMessage(input.value))
        input.value = "";
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Messenger);