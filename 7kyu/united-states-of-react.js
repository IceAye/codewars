import React from 'react';

export class States extends React.Component {
    constructor(props) {
        super(props);
        this.unite = this.unite.bind(this);
        this.state = {
            united: false
        }
    }

    unite () {
        this.setState({united: !this.state.united})
    };

    render() {
        return <div className="status">
            {!this.state.united ? "Make America code again":"Code for everyone"}</div>
    }
}