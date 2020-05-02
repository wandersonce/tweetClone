import React, { Component } from 'react';

import twitterLogo from '../../twitter.svg';
import './styles.css'

export default class Login extends Component {
    render() {
        return (
            <div className="login-wrapper">
                <img src={twitterLogo} alt="GoTwitter" />
                <form>
                    <input placeholder="Username" />
                    <button type="submit">Enter</button>
                </form>
            </div>
        )
    }
}