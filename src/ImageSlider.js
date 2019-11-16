import React, { Component } from 'react';

export default class ImageSlider extends Component {
    constructor(props) {
        super()
        this.state = {
            currentSlideIndex: props.currentSlideIndex
        }
    }


    render() {
        console.log(this.state.currentSlideIndex)
        return <span>I am on slide {this.state.currentSlideIndex}</span>
    }

}