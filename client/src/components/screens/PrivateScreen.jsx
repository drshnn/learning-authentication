import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";

function PrivateScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const logoutHandler = () => {
    localStorage.removeItem("user");
    dispatch(logout());
  };
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }
  }, [user, isError, isSuccess, message, navigate, dispatch]);
  return (
    <div className="flex flex-col gap-5">
      <p>PrivateScreen</p>
      <button onClick={logoutHandler} className="">
        Logout
      </button>
    </div>
  );
}

export default PrivateScreen;
