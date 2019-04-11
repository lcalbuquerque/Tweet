import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddTweet } from '../store/actions/tweets';

class NewTweet extends Component {
    state = {
        textoTweet: ""
    };

    handleChange = e => {
        const textDigitado = e.target.value;
        this.setState(() => ({
            textoTweet: textDigitado
        }));
    };

    handleSubmit = e => {
        e.preventDefault();
        const { textoTweet } = this.state;
        const { dispatch, id } = this.props;
        dispatch(handleAddTweet({ textoTweet, id }));
        this.setState(() => ({
            textoTweet: ""
        }));
        // In case of NewTweet, id is undefined and go to /
        if (!id) this.props.history.push('/')
    };

render() {

        const { textoTweet } = this.state;
        const charLeft = 280 - textoTweet.length;

        return (
            <div>
                <h3 className="center">Compose New Tweet</h3>
                <form className="new-tweet" onSubmit={this.handleSubmit}>
                    <textarea placeholder="What's happening?"
                        value={textoTweet} onChange={this.handleChange}
                        className="textarea" maxLength={280} />
                    {charLeft <= 100 && <div className="tweet-length">{charLeft}</div>}
                    <button className="btn" type="submit" disabled={!textoTweet.length}>
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default connect()(NewTweet);