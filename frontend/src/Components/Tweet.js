import React, { Component } from 'react';

import './styles.css'
import Like from '../like.svg';

export default class Tweet extends Component {
    render() {
        const { tweet } = this.props
        return (
            <li className="tweet">
                <strong>{tweet.author}</strong>
                <p>{tweet.content}</p>
                <button type="button">
                    <img src={Like} alt="Like" />
                    {tweet.likes}
                </button>
            </li>
        )
    }
}