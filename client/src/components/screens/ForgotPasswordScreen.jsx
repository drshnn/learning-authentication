import React, { useState } from "react";
import Spinner from "./Spinner";
import axios from "axios";

function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const sendEmail = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:5000/api/auth/forgotpassword",
        { email }
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
          <h1 className="text-lg font-bold">Email Sent✅</h1>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div>
        <p className="font-bold text-4xl mb-10">Forgot Password</p>
        <form onSubmit={submitHandler}>
          <div className="field">
            <label htmlFor="email">
              Email<span className="text-red-800 font-bold text-xl">*</span>
            </label>
            <input
              type="text"
              className="input"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
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

export default ForgotPasswordScreen;
