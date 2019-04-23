import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Input } from "react-input-component";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import "../../assets/css/Auth.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
    loginalertUsername: false,
    loginalertPassword: false
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = async e => {
    e.preventDefault();
    if (this.state.username && this.state.passsword) {
      await this.setState({
        loginalertUsername: false,
        loginalertPassword: false
      });
    } else {
      if (!this.state.username) {
        this.setState({ loginalertUsername: true });
        if (!this.state.password) {
          this.setState({ loginalertPassword: true });
        }
      }
    }
    this.props.login(this.state, this.props.history);
  };

  render() {
    return (
      // <div className="create_account_screen">
      //   <div className="create_account_form">
      //     <h3>Login</h3>
      //     <form onSubmit={this.submitHandler}>
      //       {this.state.loginalertUsername ? (
      //         <div className="col-12 alert alert-danger" role="alert">
      //           Wrong Username
      //         </div>
      //       ) : (
      //         <></>
      //       )}
      //       <label htmlFor="userName">User Name</label>
      //       <Input
      //         text="User Name"
      //         name="username"
      //         value={this.state.username}
      //         className="form-control"
      //         onChange={this.changeHandler}
      //         //   emptyMessage="User Name can't be empty"
      //       />
      //       {this.state.loginalertPassword ? (
      //         <div
      //           style={{ marginTop: 20 }}
      //           className="col-12 alert alert-danger"
      //           role="alert"
      //         >
      //           Wrong Password
      //         </div>
      //       ) : (
      //         <></>
      //       )}

      //       <div className="password">
      //         <label htmlFor="Password">Password</label>
      //         <Input
      //           text="Password"
      //           type="password"
      //           name="password"
      //           value={this.state.passsword}
      //           //   emptyMessage="Password is invalid"
      //           className="form-control"
      //           onChange={this.changeHandler}
      //         />
      //       </div>
      //       <div className="col-12">
      //         <button
      //           style={{ padding: 9 }}
      //           type="submit"
      //           className="btn btn-success col-12"
      //         >
      //           Login
      //         </button>
      //       </div>
      //     </form>
      //   </div>
      // </div>
      <div className="container">
        <div className="row justify-content-center" style={{ marginTop: 125 }}>
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">
                          Shop Dashboard
                        </h1>
                      </div>
                      <form onSubmit={this.submitHandler}>
                        <div
                          className="form-group col-12"
                          style={{ padding: 0 }}
                        >
                          <Input
                            name="username"
                            className="form-control form-control-user"
                            onChange={this.changeHandler}
                            value={this.state.username}
                            placeholder="Commercial ID"
                          />
                        </div>
                        <div
                          className="form-group col-12"
                          style={{ padding: 0 }}
                        >
                          <Input
                            type="password"
                            className="form-control form-control-user"
                            name="password"
                            value={this.state.passsword}
                            onChange={this.changeHandler}
                            placeholder="Password"
                          />
                        </div>

                        <button
                          style={{ padding: 9 }}
                          type="submit"
                          className="btn btn-primary col-12"
                        >
                          Login
                        </button>

                        <hr />
                        {/* <a
                          href="index.html"
                          className="btn btn-google btn-user btn-block"
                        >
                          <i className="fab fa-google fa-fw" /> Login with
                          Google
                        </a>
                        <a
                          href="index.html"
                          className="btn btn-facebook btn-user btn-block"
                        >
                          <i className="fab fa-facebook-f fa-fw" /> Login with
                          Facebook
                        </a> */}
                      </form>
                      <hr />
                      {/* <div className="text-center">
                        <a className="small" href="//">
                          Forgot Password?
                        </a>
                      </div> */}
                      <div className="text-center">
                        <a className="small">
                          <NavLink to={`/signup`}>Create an Account!</NavLink>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (userData, history) =>
      dispatch(actionCreators.login(userData, history))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
