import React from 'react'
import lottie from "lottie-web";
import './loader.scss'
class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.animationContainer = React.createRef();
    }
    componentDidMount() {
        const anim = lottie.loadAnimation({
            container: this.animationContainer.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/LEGO_loader.json'
        })
        anim.setSpeed(3.4);
    }
   
    render() {
        return (
            <div className='loader' style={{}} ref={this.animationContainer}></div> 
        )
    }
}
export default Loader

