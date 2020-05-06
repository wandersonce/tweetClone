import React, { Component } from 'react';
import api from '../../service/api';

import Tweet from '../../Components/Tweet';
import twitterLogo from '../../twitter.svg';
import './styles.css';

export default class Timeline extends Component {
    state = {
        tweets: [],
        newTweet: '',
    };

    async componentDidMount() {
        const res = await api.get('tweets');

        this.setState({ tweets: res.data });
    };

    handleInputChange = (e) => {
        this.setState({ newTweet: e.target.value });
    };

    handleNewTweet = async (e) => {
        if (e.keyCode != 13) return;

        const content = this.state.newTweet;
        const author = localStorage.getItem("@GoTwitter:username");

        await api.post('tweets', { content, author })

        this.setState({ newTweet: '' });

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
                <ul className="tweet-list">
                    {this.state.tweets.map(tweet => (
                        <Tweet Key={tweet._id} tweet={tweet} />
                    ))}
                </ul>
            </div>
        )
    }
}