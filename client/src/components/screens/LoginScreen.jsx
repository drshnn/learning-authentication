import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../../features/auth/authSlice";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);
  const submitHandler = (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: pwd,
    };

    dispatch(login(userData));
  };
  if (isLoading) {
    return (
      <div className="container">
        <Spinner />
      </div>
    );
  }
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
              onChange={(e) => setEmail(e.target.value)}
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
        <Link to="/forgotpassword">Forgot Password</Link>
      </div>
    </div>
  );
}

export default LoginScreen;
