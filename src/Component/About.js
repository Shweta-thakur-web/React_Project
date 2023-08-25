import React, { Component } from "react";

class About extends Component {
    render() {
        return (
            <div>
                <div class="container-fluid wow fadeInUp">
                    <div class="row m-4 ">
                        <div class="col-md-6">
                            <img src="Images\about.png" style={{width: "92.5%"}} />
                        </div>
                        <div class="col-md-6">
                            <span class="badge mt-2 mx-3" style={{width: "90%", height:"4em", background:"rgb(64, 4, 176)", border:"balck 5px"}}>
                                <h3>About Aspects Fieldwork & Research</h3>
                            </span>
                            <h5 class=" mx-4 mt-2 px-5">REDIRECTING CURIOSITY IN THE RIGHT DIRECTION</h5>

                            <p class="mt-4" style={{textAlign: "justify"}}>Aspects Fieldwork & Research is a leading market research,
                                analytics, and consulting firm that helps curate and extract the information you need to make accurate
                                business decisions and track your competitive environment. Headquartered in Mumbai, India, Aspects Fieldwork &
                                Research has a strong international presence spread across several other countries.</p>
                            <p class="mt-4" style={{textAlign: "justify"}}>Our products and services are designed to help organizations
                                everywhere redirect their curiosity in the right direction. Everyday people around the globe use Aspects
                                Fieldwork & Research to find answers to millions of questions. These answers compile to become an evaluation
                                that drives companies to grow, succeed, and formulate to solve today’s most compelling challenges.
                            </p>
                            <p class="mt-4" style={{textAlign: "justify"}}>We thrive to develop new ways to innovate new ways for people to
                                amplify their share of voices and opinions. Our research funnel is strategically divided as per the
                                enterprise-grade format, focusing on small to large size organizations.
                            </p>
                            <p class="mt-4" style={{textAlign: "justify"}}>Empowering millions of active users to bring better products and
                                services to the market by doing intricate and authentic details, delight their website and app users, promote
                                customer loyalty, encourage their employees, and much more.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default About;