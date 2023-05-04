import React from "react";
import UserItem from "./UserItem.js";
import LoadingSpinner from "./loadingspinner.js";
const Users = ({ Users, loading }) => {
  if (loading) {
    return <LoadingSpinner />;
  } else {
    return (
      <div style={userStyle}>
        {Users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, ifr)",
  gridGap: "1rem",
};

export default Users;
