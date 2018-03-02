import React, { Component } from 'react';

export default class Background extends Component {
    render() {
        return (
            <div class="full">
                <div class="full backgroundImage backgroundImageFix" style={{backgroundImage: this.props.img}}></div>
                {this.props.children}
            </div>
        );
    }
}