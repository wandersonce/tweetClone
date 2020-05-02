import React, { Component } from 'react';

import twitterLogo from '../../twitter.svg';
import './styles.css';

export default class Timeline extends Component {
    state = {
        newTweet: '',
    };

    handleInputChange = (e) => {
        this.setState({ newTweet: e.target.value });
    };

    handleNewTweet = (e) => {
        if (e.keyCode != 13) return;

        const content = this.state.newTweet;
        const author = localStorage.getItem("@GoTwitter:username")
        console.log(content);

    };

    render() {
        return (
            <div className="timeline-wrapper">
                <img height={24} src={twitterLogo} alt="GoTwitter" />

                <form>
                    <textarea
                        value={this.state.newTweet}
                        onChange={this.handleInputChange}
                        onKeyDown={this.handleNewTweet}
                        placeholder={"What is Happening " + localStorage.getItem("@GoTwitter:username") + "?"}
                    />
                </form>
            </div>
        )
    }
}