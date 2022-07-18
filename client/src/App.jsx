import { Routes, Route } from "react-router-dom";
import "./App.css";

//Routing
// import PrivateRoute from "./components/routing/PrivateRoute";
import PrivateScreen from "./components/screens/PrivateScreen";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen";
import Layout from "./components/screens/Layout";
import MissingScreen from "./components/screens/MissingScreen";
function App() {
  return (
    <div className="w-screen">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* private route */}
          <Route path="/" element={<PrivateScreen />} />

          {/* public routes */}
          <Route path="register" element={<RegisterScreen />} />
          <Route path="login" element={<LoginScreen />} />
          <Route path="forgotpassword" element={<ForgotPasswordScreen />} />
          <Route
            path="passwordreset/:resetToken"
            element={<ResetPasswordScreen />}
          />

          {/* catch all : path mismatch */}
          <Route path="*" element={<MissingScreen />} />
        </Route>
      </Routes>
    </div>
    // <Router>
    //   <div className="App">
    //     <Switch>
    //       <PrivateRoute exact path="/" component={PrivateScreen} />
    //       <Route exact path="/login" component={LoginScreen} />
    //       <Route exact path="/register" component={RegisterScreen} />
    //       <Route
    //         exact
    //         path="/forgotpassword"
    //         component={ForgotPasswordScreen}
    //       />
    //       <Route
    //         exact
    //         path="/passwordreset/:resetToken"
    //         component={ResetPasswordScreen}
    //       />
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
