import React, { Component } from 'react';
import './ButtonStyles.scss';

class Button extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.props.onClick
    }

    render() {
        return (
            <button onClick={this.props.onClick} className={`btn ${this.props.className}`}>{this.props.text}</button>
        );
    }
}

export default Button;