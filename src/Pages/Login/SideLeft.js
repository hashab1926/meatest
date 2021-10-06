import React, { Component } from 'react';

class SideLeft extends Component {
    constructor(props) {
        super(props);
        this.styleLeftSection = {
            backgroundImage: `url(${window.location.origin}/img/image-001.png)`
        }
    }

    render() {
        return (
            <section className="left" style={this.styleLeftSection}>
                <h2>{this.props.title}</h2>
                <div>{this.props.subtitle}</div>
            </section>
        );
    }
}

export default SideLeft;
