import React, { PureComponent } from 'react';

export default class Block extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            score: 10
        };
    }

    render() {
        return (
            <>
                <button onClick={() => { this.setState({ score: this.state.score + 1 }) }}>Add score</button>
                <h1>My score: {this.state.score}</h1>
            </>
        );
    }
}