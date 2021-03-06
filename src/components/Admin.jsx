import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { withRouter } from "react-router-dom";

const Admin = ({ history: { push } }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (auth.currentUser) {
      console.log("existe un usuario");
      setUser(auth.currentUser);
    } else {
      console.log("No existe usuario");
      push("/login");
    }
  }, [push]);
  return (
    <div>
      <h2>Ruta protegida</h2>
      {user && <h3>{user.email}</h3>}
    </div>
  );
};

export default withRouter(Admin);
