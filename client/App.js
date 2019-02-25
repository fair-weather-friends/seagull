import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/actions';

import WeatherComponent from './components/weather';

class App extends Component {

    componentDidMount() {
        this.props.getWeather(this.props.currentCity);
    }

    render() {
        const backgroundStyle = {
            background: `${this.props.gradientStart}`,
            background: `-moz-linear-gradient(45deg, ${this.props.gradientStart} 0%, ${this.props.gradientEnd} 100%)`,
            background: `-webkit-linear-gradient(45deg, ${this.props.gradientStart} 0%,${this.props.gradientEnd} 100%)`,
            background: `linear-gradient(45deg, ${this.props.gradientStart} 0%,${this.props.gradientEnd} 100%)`,
            filter: `progid:DXImageTransform.Microsoft.gradient( startColorstr=${this.props.gradientStart}
                    ,endColorstr=${this.props.gradientEnd},GradientType=1 )`
        }
        return (
            <div>
                {!this.props.loggedIn &&
                    <div className="signup-wrapper">
                        <form id='signUpForm' onSubmit={this.props.signUp}>
                            <input name='name' placeholder='first name' />
                            <input name='username' placeholder='username' />
                            <input name='password' placeholder='password' />
                            <button onClick={this.props.signUp}>signup</button>
                        </form>
                    </div>
                }
                {this.props.loggedIn &&
                    <div className='wrapper' style={backgroundStyle}>
                        <WeatherComponent
                            user={this.props.user}
                            currentTemp={this.props.currentTemp}
                            currentCity={this.props.currentCity}
                            updateCurrentCity={this.props.updateCurrentCity}
                            getWeather={this.props.getWeather}
                        />
                    </div>
                }
            </div>
        )
    }

}

const mapStateToProps = ({ reducer }) => ({
    currentCity: reducer.currentCity,
    currentTemp: reducer.currentTemp,
    gradientStart: reducer.gradientStart,
    gradientEnd: reducer.gradientEnd,
    loggedIn: reducer.loggedIn,
    user: reducer.user,
});

const mapDispatchToProps = dispatch => ({
    getWeather: (city) => dispatch(actions.getWeather(city)),
    updateCurrentCity: (e) => dispatch(actions.updateCurrentCity(e.target.value)),
    signUp: (e) => {
        e.preventDefault();
        const signUpForm = document.getElementById('signUpForm');
        dispatch(actions.signUp(signUpForm.elements))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);