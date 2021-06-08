import React, { Component } from 'react';

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div
                style={{
                    margin:"0",
                    padding:"0",
                    position:"fixed",
                    right:"0px",
                    top:"0px",
                    width:"100%",
                    height:"100%",
                    zIndex:"30001",
                    filter:"alpha(opacity=50)",
                    opacity:"0.5",
                    display: this.props.loading ? "block" : "none",
                    backgroundColor: "#EAEAEA"
                }}
            >
            </div>
         );
    }
}
 
export default Loading;