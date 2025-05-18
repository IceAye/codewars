import React from 'react';

export class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        };
        this.decrement = this.decrement.bind(this);
        this.increment = this.increment.bind(this);
    }

    // Your event handlers
    decrement() {
        this.setState(prevState => ({
            counter: prevState.counter - 1
        }));
    }

    increment() {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }));
    }
    render() {
        return (
            <div>
                <h1 id={'counter'}>{this.state.counter}</h1>
                <button type="button" id={'decrement'} onClick={this.decrement}>
                    Decrement
                </button>
                <button type="button" id={'increment'} onClick={this.increment}>
                    Increment
                </button>
            </div>
        )
    }
}