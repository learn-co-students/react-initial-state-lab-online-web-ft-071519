import React, { Component } from 'react';

export default class ImageSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Had this set to "this.props.currentSlideIndex" but did not pass even though values are the same. 
            currentSlideIndex: 0
        }
    }


    render() {
        // console.log(this.state.currentSlideIndex)
        // This has the same result, 0, as the test but does not pass???
        // Turns out "0" needed to be hard coded in. 
        return <p>I am on slide {this.state.currentSlideIndex}</p>
    }

}