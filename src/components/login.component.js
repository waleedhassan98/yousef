import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>
                <h2 className="form-sign">Sign In</h2>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" /><img className="icon-email" />
                </div>

                <div className="form-group"><p />
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" /><img className="icon-pass" />
                </div>

                <div className="form-group submit-login"><p />
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="" />
                        <label className="">Remember me</label>
                    </div>
                    <button type="submit" className="btn-submit">Submit</button>
                </div>

                <p className="forgot-password text-right">
                    <a href="#"> Forgot Password?</a>
                </p>
            </form>
        );
    }
}
