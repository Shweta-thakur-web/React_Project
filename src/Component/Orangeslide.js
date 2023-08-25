import React, { Component } from "react";

class Orangeslide extends Component {
    render() {
        return (
            <div>
                <div class="container-fluid wow fadeInUp">
                    <div class="row">
                        <div class="col-md-6 p-5 " style={{backgroundColor: "rgb(50, 154, 219)", height:"33em"}}>
                            <h1 
                                style={{fontFamily:"'Source Sans Pro', sans-serif", fontSize:"55px", fontWeight:"600px", color:"#fff", paddingTop:"100px", paddingLeft: "25px"}}>
                                <b>Aspects Fieldwork & Research</b></h1>
                            <center class="wow fadeInUp"><b style={{fontSize:"20px"}}>REDIRECTING CURIOSITY IN THE RIGHT DIRECTION</b></center>
                        </div>
                        <div class="col-md-6 p-5" style={{backgroundColor:"orange"}}>
                            <h1 style={{fontSize: "60px",fontFamily:"'Source Sans Pro', sans-serif", color:"#000",paddingTop: "100px"}}>Understand
                                Audience</h1>
                            <p style={{fontSize: "18px", color: "#000", fontFamily: "'Source Sans Pro', sans-serif", color: "#222"}}>Knowing your
                                audience isn’t enough. Knowing their interests, needs, barriers, motivation elevates your brand to connect and
                                understand your targeted groups</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Orangeslide;