import React, { Component } from "react";

class Service extends Component {
    render() {
        return (
            <div>
                <div class="container-fluid">
                    <div class="row bg-primary pb-5">
                        <h3 class="pt-5" style={{textAlign: "center"}}> Our Services</h3>
                        <div class="col-md-4">
                            <div class="card" style={{fontSize:"small", height:"17.1em"}}>
                                <div class="card-body">
                                    <h4 class="card-title">Qualitative</h4>
                                    <p class="card-text">Also known as primary research, qualitative analysis demands interaction and real-time
                                        data. This is the process of collating data that hasn’t been out there yet. Interviews, market research
                                        surveys, questionnaires, and more fall under qualitative or primary research.</p>
                                    <a href="#" class="btn btn-success" style={{alignItems: "center",marginTop: "20px"}}>view more</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card" style={{fontSize: "small"}}>
                                <div class="card-body">
                                    <h4 class="card-title">Quantitative</h4>
                                    <p class="card-text">When numbers and figures come together to form a proper analysis, it is called
                                        quantitative research. It is majorly used to find patterns and averages, make predictions, and generalize
                                        results to a wider population.Quantitative research is widely used in understanding customer psychology.
                                    </p>
                                    <a href="#" class="btn btn-success">view more</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card" style={{fontSize: "small"}}>
                                <div class="card-body">
                                    <h4 class="card-title">Other Services</h4>
                                    <p class="card-text">Aspects Fieldwork & Research is known for its dedication and competency to do
                                        comprehensive research for any industry across the country. This not only gives you a wide coverage, but
                                        also assures you of realistic data, statistics, and information to kickstart your business or launch a new
                                        product.</p>
                                    <a href="#" class="btn btn-success">view more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Service;