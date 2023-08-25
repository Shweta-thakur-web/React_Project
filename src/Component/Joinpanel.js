import React, { Component } from "react";
class Joinpanel extends Component {
    render() {
        return (
            <div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-8 mt-5">
                            <p class="join_p">Invest your time and creativity with us to enhance your income. Aspects Fieldwork & Research, a globally leading market research organisation, needs your valuable opinion. Join our panel to influence the end consumer with your viewpoint and get rewarded for the same.</p>
                        </div>
                        <div class="col-4"></div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <b class="join_b">As a member of our panel, you will be participating in research studies in the form of:</b>
                            <ul class="join_ul">
                                <li>An online survey</li>
                                <li>Through telephone/internet</li>
                                <li>Personal interviews or focused group discussions</li>
                                <li>A member of an online community</li>
                                <li>Product reviewing</li>
                            </ul>
                            <form action="#">
                                <div class="mb-3 mt-3">
                                    <label for="Name" class="form-label">Enter name</label>
                                    <input type="text" class="form-control" id="email" placeholder="Enter name" name="email" required />
                                </div>
                                <div class="mb-3 mt-3">
                                    <label for="email" class="form-label">Enter Email</label>
                                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" required />
                                </div>
                                <div class="mb-3">
                                    <label for="phone" class="form-label">Enter Phone:</label>
                                    <input type="number" class="form-control" id="pwd" placeholder="Enter Contact with Country Code for eg.+91" name="phone" required />
                                </div>
                                <div class="mb-3">
                                    <label for="industry" class="form-label">Enter Industry</label>
                                    <input type="text" class="form-control" id="pwd" placeholder="Enter Industry" name="Industry" required />
                                </div>
                                <div class="mb-3">
                                    <label for="country" class="form-label">Enter Country</label>
                                    <input type="text" class="form-control" id="pwd" placeholder="Enter Country" name="Industry" required />
                                </div>
                                <div class="mb-3">
                                    <label for="Speailization" class="form-label">Enter Specialization</label>
                                    <input type="text" class="form-control" id="pwd" placeholder="Enter Specialization" name="Speailization" required />
                                </div>
                                <div class="form-check mb-3">
                                    <label class="form-check-label">
                                        <input class="form-check-input" type="checkbox" name="remember" /> Remember me
                                    </label>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <div class="col-6 col-lg">
                            <img src="Images/joinUs.jpg" width="60%" height="50%" class="joinImg" />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default Joinpanel;