// import React, { Component } from "react";
// import { connect } from "react-redux";
// import * as actionCreators from "../../store/actions";

// class Transfer extends Component {
//   state = {
//     id: null,
//     user: null,
//     is_alerted: false
//   };

//   componentDidMount() {
//     const device = this.props.getParam("device");
//     this.setState({ id: device.id });

//     handleChange = e => {
//       this.setState({ user: e.target.value });
//     };

//     handleSubmit = deviceID => {
//       this.props.transferOwnership(this.state, deviceID, this.props);
//     };

//     render();
//     // const transferOwnership = async () => {
//     //   await this.props.transferOwnership(this.state);
//     // };
//     const device = device.getParam("device");

//     return (
//       <div>
//         <div>
//           {/* change ownerShip
//           username
//           <input type="text" onChange={this.userChange.bind(this)} />
//           IEMI
//           <input type="text" onChange={this.idChange.bind(this)} />
//           <button onClick={() => this.props.transferOwnership(this.state)}>
//             Transfer Ownership
//           </button> */}
//           here we are!!!!
//           <label> NEW OWNER</label>
//           <input type="text" onChange={this.handleChange.bind(this)} />
//           <button onClick={() => this.handleSubmit(device.id)}>
//             Transfer Ownership
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   user: state.authReducer.user,
//   devices: state.devicesReducer.devices
// });
// const mapDispatchToProps = dispatch => {
//   return {
//     // transferOwnership: user => dispatch(actionCreators.transferOwnership(user)),
//     transferOwnership: (user, deviceID) =>
//       dispatch(actionCreators.transferOwnership(user, deviceID))
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Transfer);
