import React, { Component } from 'react';
import './ButtonStyles.css';

class Button extends Component {

    render() {
        return (
            <button type="submit" className={`btn ${this.props.className}`}>{this.props.text}</button>
        );
    }
}

export default Button;