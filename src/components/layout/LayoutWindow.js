import React, { Component } from 'react';

export default class LayoutWindow extends Component {
    render() {
        return (
            <div class={'window' + this.props.dynamicHigh?"DyanmicHigh":""}>
                {this.props.children}
            </div>
        );
    }
}