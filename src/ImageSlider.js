import React, { Component } from 'react';

export default class ImageSlider extends Component {
    constructor(props) {
        super()
        this.state = {
            currentSlideIndex: props.currentSlideIndex
        }
    }


    render() {
        // console.log(this.state.currentSlideIndex)
        // This has the same result as the test but does not pass???
        return <span>I am on slide {this.state.currentSlideIndex}</span>
    }

}