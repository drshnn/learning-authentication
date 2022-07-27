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
    <div>
      <div className="flex justify-between py-6 ">
        <p className="font-bold text-3xl">AUTH</p>
        <button
          onClick={logoutHandler}
          className="px-5 py-2 bg-blue-600 text-white rounded-md"
        >
          Logout
        </button>
      </div>
      <div className="flex justify-center items-center pt-52">
        <p className="text-5xl font-bold">
          Welcome,{" "}
          <span className=" text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r via-purple-600 from-blue-500 to-pink-600">
            {user && user.userData.username}
          </span>
        </p>
      </div>
    </div>
  );
}

export default PrivateScreen;
