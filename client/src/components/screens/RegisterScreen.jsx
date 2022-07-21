import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset } from "../../features/auth/authSlice";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function RegisterScreen() {
  // for focust on username field when load, for focus on error field when error
  const userRef = useRef();
  const errRef = useRef();
  // states
  const [username, setUsername] = useState("");
  // const [validName, setValidName] = useState(false);
  // const [userFocus, setUserFocus] = useState(false);
  const [email, setEmail] = useState("");

  const [pwd, setPwd] = useState("");
  // const [validPwd, setValidPwd] = useState(false);
  // const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  // const [validMatchPwd, setValidMatchPwd] = useState(false);
  // const [matchPwdFocus, setMatchPwdFocus] = useState(false);

  // const [errMessage, setErrMessage] = useState("");
  // const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   userRef.focus();
  // }, []);
  // to validate username
  // useEffect(() => {
  //   setValidName(USER_REGEX.test(username));
  //   console.log("hi");
  // }, [username]);

  // //validating password and matching confirm pass
  // useEffect(() => {
  //   const result = PWD_REGEX.test(pwd);
  //   setValidPwd(result);
  //   const match = pwd === matchPwd;
  //   setValidMatchPwd(match);
  // }, [pwd, matchPwd]);

  // useEffect(() => {
  //   setErrMessage("");
  // }, [username, pwd, matchPwd]);

  // to handle submit
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ username, email, pwd });
  };
  return (
    <div className="container">
      <div>
        <p className="font-bold text-4xl mb-10">Create Your Account</p>
        <form onSubmit={submitHandler}>
          <div className="field">
            <label htmlFor="username">
              Username<span className="text-red-800 font-bold text-xl">*</span>
            </label>
            <input
              type="text"
              className="input"
              name="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
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
      </div>
    </div>
  );
}

export default RegisterScreen;
