import React, { Component } from 'react';
import api from '../service/api';

import './styles.css'
import Like from '../like.svg';

export default class Tweet extends Component {
    handleLike = async () => {
        const { _id } = this.props.tweet;

        await api.post(`likes/${_id}`)
    };

    render() {
        const { tweet } = this.props
        return (
            <li className="tweet">
                <strong>{tweet.author}</strong>
                <p>{tweet.content}</p>
                <button type="button" onClick={this.handleLike} >
                    <img src={Like} alt="Like" />
                    {tweet.likes}
                </button>
            </li>
        )
    }
}