import React, { Component } from "react";

import { Input } from "react-input-component";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import "../../assets/css/Auth.css";

class RegistationForm extends Component {
  state = {
    username: "",
    firstname: "",
    lastname: "",
    phone_number: "",
    password: "",
    confirmpassword: "",
    email: "",
    alertUsername: false,
    alertPassword: false
    // alertEmail: false
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = async e => {
    e.preventDefault();
    if (
      this.state.password &&
      this.state.password === this.state.confirmpassword &&
      this.state.username
    ) {
      let userData = {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        first_name: this.state.firstname,
        last_name: this.state.lastname,
        phone_number: this.state.phone_number
      };
      await this.setState({
        alertPassword: false,
        alertUsername: false
        // alertEmail: false
      });
      this.props.signup(userData, this.props.history);
    } else {
      if (this.state.username) {
        this.setState({ alertUsername: false });
        if (this.state.password) {
          if (this.state.password !== this.state.confirmpassword) {
            this.setState({ alertPassword: true });
          }
          // if (this.state.email) {
          //   this.setState({ alertEmail: false });
          // } else {
          //   this.setState({ alertEmail: true });
          // }
        } else {
          this.setState({ alertPassword: true });
        }
      } else {
        this.setState({ alertUsername: true, alertPassword: false });
      }
    }
  };
  // HERE

  // handlePasswordInput = e => {
  //   if (this.state.confirmpassword) {
  //     this.props.passwordConfirm.isValid();
  //   }
  //   this.props.passwordConfirm.hideError();
  //   this.setState({
  //     password: e.target.value
  //   });
  // };

  // handleconfirmPassword = e => {
  //   this.setState({
  //     confirmpassword: e.target.value
  //   });
  // };

  // isConfirmedPassword = e => {
  //   return e === this.state.password;
  // };
  handleEmailInput = e => {
    this.setState({
      email: e.target.value
    });
  };

  // validateEmail = e => {
  //   let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(e);
  // };

  render() {
    return (
      // <div className="create_account_screen">
      //   <div className="create_account_form">
      //     <h1>Create account</h1>
      //     <p>YOUR INFORMATION.</p>
      //     <form onSubmit={this.submitHandler}>
      //       {this.state.alertUsername ? (
      //         <div
      //           style={{ marginTop: 20 }}
      //           className="col-12 alert alert-danger"
      //           role="alert"
      //         >
      //           Please input a username
      //         </div>
      //       ) : (
      //         <></>
      //       )}
      //       <label htmlFor="userName">User Name</label>
      //       <Input
      //         name="username"
      //         value={this.state.username}
      //         onChange={this.changeHandler}
      //         className="form-control"
      //       />

      //       <div className="firstName">
      //         <label htmlFor="firstName">First Name</label>
      //         <Input
      //           name="firstname"
      //           value={this.state.firstname}
      //           onChange={this.changeHandler}
      //           className="form-control"
      //         />
      //       </div>

      //       <div className="lastName">
      //         <label htmlFor="LastName">Last Name</label>
      //         <Input
      //           name="lastname"
      //           value={this.state.lastname}
      //           onChange={this.changeHandler}
      //           className="form-control"
      //         />
      //       </div>

      //       {/* {this.state.alertEmail ? (
      //         <div className="alert alert-danger" role="alert">
      //           Please input an Email
      //         </div>
      //       ) : (
      //         <></>
      //       )} */}

      //       <div className="phone_number">
      //         <label htmlFor="phone_number">Phone Number </label>

      //         <Input
      //           name="phone_number"
      //           type="text"
      //           value={this.state.phone_number}
      //           onChange={this.changeHandler}
      //           className="form-control"
      //         />
      //       </div>

      //       <div className="email">
      //         <label htmlFor="email">Email</label>

      //         <Input
      //           name="email"
      //           type="email"
      //           value={this.state.email}
      //           onChange={this.handleEmailInput}
      //           className="form-control"
      //         />
      //       </div>
      //       {this.state.alertPassword ? (
      //         <div
      //           style={{ marginTop: 20 }}
      //           className="col-12 alert alert-danger"
      //           role="alert"
      //         >
      //           Passwords dont match or no password inputed
      //         </div>
      //       ) : (
      //         <></>
      //       )}
      //       <div className="password">
      //         <label htmlFor="password">Password</label>
      //         <Input
      //           type="password"
      //           name="password"
      //           className="form-control"
      //           // validator="true"
      //           // minCharacters="8"
      //           // requireCapitals="1"
      //           // requireNumbers="1"
      //           value={this.state.passsword}
      //           onChange={this.changeHandler}
      //         />
      //       </div>

      //       <label htmlFor="ConfirmPassword">Confirm Password</label>
      //       <Input
      //         type="password"
      //         name="confirmpassword"
      //         // validator="true"
      //         // minCharacters="8"
      //         // requireCapitals="1"
      //         // requireNumbers="1"
      //         className="form-control"
      //         value={this.state.confirmpasssword}
      //         onChange={this.changeHandler}
      //       />
      //       <div className="col-12">
      //         <button
      //           style={{ padding: 9, marginTop: 20 }}
      //           type="submit"
      //           className="btn btn-success col-12 "
      //         >
      //           CREATE ACCOUNT
      //         </button>
      //       </div>
      //     </form>
      //   </div>
      // </div>
      <div
        style={{ marginTop: "125px" }}
        className="card o-hidden border-0 shadow-lg   col-12"
      >
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-5 d-none d-lg-block bg-register-image  col-12" />
            <div className="col-lg-7  col-12">
              <div className="p-5">
                <div className="text-center  col-12">
                  <h1 className="h4 text-gray-900 mb-4  col-12">
                    Create Account
                  </h1>
                </div>
                <form onSubmit={this.submitHandler}>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <Input
                        name="username"
                        value={this.state.username}
                        onChange={this.changeHandler}
                        className="form-control form-control-user"
                        placeholder="Commercial ID"
                      />
                    </div>
                    <div className="col-sm-6">
                      <Input
                        name="phone_number"
                        value={this.state.phone_number}
                        onChange={this.changeHandler}
                        className="form-control form-control-user"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div className="form-group ">
                    <Input
                      name="email"
                      value={this.state.email}
                      onChange={this.handleEmailInput}
                      type="email"
                      className="form-control form-control-user"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <Input
                        name="password"
                        value={this.state.password}
                        onChange={this.changeHandler}
                        type="password"
                        className="form-control form-control-user"
                        placeholder="Password"
                      />
                    </div>
                    <div className="col-sm-6">
                      <Input
                        name="confirmpassword"
                        value={this.state.confirmpassword}
                        onChange={this.changeHandler}
                        type="password"
                        className="form-control form-control-user"
                        placeholder="Repeat Password"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      style={{ padding: 9, marginTop: 20 }}
                      type="submit"
                      className="btn btn-success col-12 "
                    >
                      CREATE ACCOUNT
                    </button>
                  </div>

                  <hr />
                </form>
                <hr />
                <div className="text-center">
                  <a href="/" className="small">
                    Already have an account? Login
                  </a>
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
    signup: (userData, history) =>
      dispatch(actionCreators.signup(userData, history))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(RegistationForm);
