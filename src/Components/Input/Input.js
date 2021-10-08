import React, { Component } from 'react';
import './InputStyles.scss';

class Input extends Component {
    render() {
        return (
            <>
                <label className="label-input" htmlFor={`for-${this.props.name}`}>{this.props.label}</label>
                <input type={this.props.type ?? 'text'} onChange={this.props.onChange} name={this.props.name} placeholder={this.props.placeholder} className="form-input" />
            </>
        );
    }
}

export default Input;