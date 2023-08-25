import React, { Component } from "react";
class Contact extends Component {
    render() {
        return (
            <div>
                <div class="container-fluid text-white pt-5 wow fadeInUp" style={{ width: "100%", height: "42em", backgroundColor: "rgb(64, 64, 161)" }}>
                    <h2 style={{textAlign: "center"}}>Contact Us</h2>
                    <div class="row">
                        <div class="col-sm-6 md-6">
                            <form action="#">
                                <input class="form-control" type="text" placeholder="Enter name" required /><br />
                                <input class="form-control" type="text" placeholder="Enter email" required /> <br />
                                <input class="form-control" type="text" placeholder="Enter contact with country code. For eg.+91"
                                    required /><br />
                                <input class="form-control" type="text" placeholder="Enter Subject" required /><br />
                                <textarea rows="10" cols="20" class="form-control" required></textarea>
                                <center><button type="submit" class="btn btn-md btn-success mt-3">Submit</button></center>
                            </form>
                        </div>
                        <div class="col-sm-6 md-6 mt-5">
                            <img src="Images\contact.png" style={{width: "95%" }} />
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}
export default Contact;