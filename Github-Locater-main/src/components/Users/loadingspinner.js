import React, { Fragment } from "react";
import Spinner from "./spinner.gif";
const LoadingSpinner = () => {
  return (
    <Fragment>
      <img
        src={Spinner}
        alt="loading...."
        style={{ width: "50px", margin: "auto", display: "block" }}
      ></img>
    </Fragment>
  );
};
export default LoadingSpinner;
