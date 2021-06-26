// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends React.Component {

    // we use the constructor to set the INITIAL STATE
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    // our decrement method makes use of the 'setState' method, which is what we use to alter state
    decrement = () => {
        const newCount = this.state.secondsLeft - 1
        this.setState({
            secondsLeft: newCount
        })
    }

    statement = () => {
        if(this.state.secondsLeft === 0) {
            return 'Boom!'
        } else {
            return `${this.state.secondsLeft} seconds left before I go boom!`
        }
    };


    render() {
        return (
            <div>
                {this.statement()}
            </div>
        )
    }
}
