import React from "react";

function User({ name, addition }) {
  return (
    <div>
      <p>{name}</p>
      <p>{addition}</p>
    </div>
  );
}

export default User;
