import React from "react";

function LoginScreen() {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <div>
        <p className="font-bold text-4xl mb-10">Log In to Your Account</p>
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
            />
          </div>
          <div className="field">
            <label htmlFor="password">
              Password<span className="text-red-800 font-bold text-xl">*</span>
            </label>
            <input
              type="password"
              className="input"
              name="password"
              placeholder="Password"
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

export default LoginScreen;
