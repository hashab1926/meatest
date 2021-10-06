import React, { Component } from 'react';
import ControllerItem from './ControllerItem';
import EventHandlerItem from './EventHandlerItem';

class Navigation extends Component {
    render() {
        return (
            <nav className="navigation-login">
                <ul>
                    {this.props?.children}
                </ul>
            </nav>
        );
    }
}

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleItem: false
        }
        this.itemClick = this.itemClick.bind(this);
    }

    render() {
        return (
            <li className="item" onClick={this.itemClick}>{this.props.itemName}</li>
        );
    }

}

// merge prototype item and controller item
Object.assign(Item.prototype, ControllerItem, EventHandlerItem);

export {
    Navigation,
    Item
};