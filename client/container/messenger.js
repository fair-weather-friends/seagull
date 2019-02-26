import React, { Component } from 'react';

class Messenger extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='half'>
                <div className='inner'>
                    messages!
                </div>
            </div>
        );
    }
};

export default Messenger;