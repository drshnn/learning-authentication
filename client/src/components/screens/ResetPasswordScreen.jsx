import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "./Spinner";
import axios from "axios";

function ResetPasswordScreen(props) {
  const [pwd, setPwd] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const { resetToken } = useParams();
  useEffect(() => {
    console.log(resetToken);
  }, []);
  const sendEmail = async () => {
    try {
      setLoading(true);
      const response = await axios.put(
        `http://localhost:5000/api/auth/resetpassword/${resetToken}`,
        { password: pwd }
      );
      setLoading(false);
      console.log(response);
      if (response.data.success) {
        setSuccess(true);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    sendEmail();
  };
  if (loading) {
    return (
      <div className="container">
        <Spinner />
      </div>
    );
  }
  if (success) {
    return (
      <div className="container ">
        <div className="bg-green-200 h-6 px-16 py-10 flex justify-center items-center border-black border-2">
          <h1 className="text-lg font-bold">Password Successfully Changed✅</h1>
        </div>
        <div className="pt-4">
          <p>
            Go to
            <span className="text-blue-600 font-bold">
              <Link to="/login"> Login </Link>
            </span>
            to continue
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div>
        <p className="font-bold text-4xl mb-10">Reset Password</p>
        <form onSubmit={submitHandler}>
          <div className="field">
            <label htmlFor="password">
              New Password
              <span className="text-red-800 font-bold text-xl">*</span>
            </label>
            <input
              type="password"
              className="input"
              name="password"
              placeholder="Password"
              onChange={(e) => setPwd(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="p-3 bg-blue-500 mt-10 w-full text-white rounded-sm"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordScreen;
