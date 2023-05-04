import React, {Fragment, Component } from "react";
import LoadingSpinner from "./loadingspinner";
import {Link} from 'react-router-dom'
export class User extends Component {

  render() {
    if(this.props.loading) return <LoadingSpinner/>
    return (<Fragment>
      <Link to="/" className="btn btn-light">
      Back to Home
      </Link>
    </Fragment>)
  }
}

export default User;
