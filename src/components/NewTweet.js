import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddTweet } from '../store/actions/tweets';

class NewTweet extends Component {
    state = {
        text: ""
    };

    handleChange = e => {
        const textDigitado = e.target.value;
        this.setState(() => ({
            text: textDigitado
        }));
    };

    handleSubmit = e => {
        e.preventDefault();
        const { text } = this.state;
        const { dispatch, id } = this.props;
        dispatch(handleAddTweet({ text, id }));
        this.setState(() => ({
            text: ""
        }));
        // In case of NewTweet, id is undefined and go to /
        if (!id) this.props.history.push('/')
    };

render() {

        const { text } = this.state;
        const charLeft = 280 - text.length;

        return (
            <div>
                <h3 className="center">Compose New Tweet</h3>
                <form className="new-tweet" onSubmit={this.handleSubmit}>
                    <textarea placeholder="What's happening?"
                        value={text} onChange={this.handleChange}
                        className="textarea" maxLength={280} />
                    {charLeft <= 100 && <div className="tweet-length">{charLeft}</div>}
                    <button className="btn" type="submit" disabled={!text.length}>
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default connect()(NewTweet);