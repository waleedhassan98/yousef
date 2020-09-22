import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h2 className="form-sign">Sign Up</h2>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" /><img className="icon-email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" /><img className="icon-pass" />
                </div>

                <button type="submit" className="btn-submit">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered? <Link to="sign-in">Sign In</Link>
                </p>
            </form>
        );
    }
}