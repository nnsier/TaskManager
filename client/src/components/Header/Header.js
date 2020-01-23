import React, { useState } from "react";

import { Link } from "react-router-dom";
import Auth from "../Auth/Auth";

const Header = () => {
  const [authenticated, setAuthentication] = useState(false);

  const login = () => {
    Auth.authenticate(() => {});
  };

  const logout = () => {
    Auth.signout(() => {});
  };

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="Public">Public</Link>
      <Link to="Protected">Protected</Link>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Header;
