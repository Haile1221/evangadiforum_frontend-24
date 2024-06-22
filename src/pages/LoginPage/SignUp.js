// import React, { useRef, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "../../axios/axiosConfig";
// import "./account.css";

// function SignUp() {
//   const navigate = useNavigate();
//   // from comment
//   const [error, seterror] = useState(false);
//   const userNameRef = useRef();
//   const firstNameRef = useRef();
//   const lastNameRef = useRef();
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const [agree, setAgree] = useState(false);
//   const [Response, setResponse] = useState("");
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const username = userNameRef.current.value.trim();
//     const firstname = firstNameRef.current.value.trim();
//     const lastname = lastNameRef.current.value.trim();
//     const email = emailRef.current.value.trim();
//     const password = passwordRef.current.value.trim();

//     if (!username || !firstname || !lastname || !email || !password) {
//       alert("Please provide all required information");
//       return;
//     }

//     if (!agree) {
//       alert("You must agree to the privacy policy and terms of service.");
//       return;
//     }

//     try {
//       await axios.post("/users/register", {
//         username,
//         firstname,
//         lastname,
//         email,
//         password,
//       });
//       .then((res) => {
//         setResponse(res);
//       });
//       // alert("Registered successfully. Please login.");
//       // navigate("/login");
//     } catch (error) {
//       alert("Something went wrong. Please try again.");
//       console.error(error);
//     }
//   };

//   // checking fistName
//   let rregXName= /[A-Za-z]/
//   if(!rregXName.test(firstName)){
//     seterror(false)

//   }else{
//     seterror(true)
//   }

//   return (
//     <div className="container">
//       {error ? "frist name ..." : "suc..."}
//       <div className="row justify-content-center align-items-center vh-100">
//         <div className="col-md-6 col-12 col-sm-6">
//           <div className="authfy-login">
//             <div className="authfy-panel panel-signup text-center active">
//               <div className="authfy-heading">
//                 <h3 className="auth-title">Join the network</h3>
//                 <p>
//                   Already have an account?
//                   <Link
//                     className="lnk-toggler small-text"
//                     data-panel=".panel-login"
//                     to="/login">
//                     Sign in
//                   </Link>
//                 </p>
//               </div>
//               <div className="ajax-return"></div>
//               <form
//                 onSubmit={handleSubmit}
//                 name="signupForm"
//                 className="signupForm"
//                 action=""
//                 method="POST">
//                 <div className="form-group wrap-input mb-2">
//                   <input
//                     ref={emailRef}
//                     type="email"
//                     className="form-control eva_email"
//                     name="eva_email"
//                     placeholder="Email address"
//                   />
//                   <span className="focus-input"></span>
//                 </div>

//                 <div className="row">
//                   <div className="col-lg-6 no-padding">
//                     <div className="form-group wrap-input mb-2">
//                       <input
//                         ref={firstNameRef}
//                         type="text"
//                         className="form-control eva_firstname"
//                         name="eva_firstname"
//                         placeholder="First name"
//                       />
//                       <span className="focus-input"></span>
//                     </div>
//                   </div>
//                   <div className="col-lg-6 no-padding">
//                     <div className="form-group wrap-input mb-2">
//                       <input
//                         ref={lastNameRef}
//                         type="text"
//                         className="form-control eva_lastname"
//                         name="eva_lastname"
//                         placeholder="Last name"
//                       />
//                       <span className="focus-input"></span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="form-group wrap-input mb-2">
//                   <input
//                     ref={userNameRef}
//                     type="text"
//                     className="form-control eva_"
//                     name="eva_username"
//                     placeholder="Username"
//                   />
//                   <span className="focus-input"></span>
//                 </div>

//                 <div className="form-group wrap-input mb-2">
//                   <div className="pwdMask">
//                     <input
//                       ref={passwordRef}
//                       type="password"
//                       className="form-control eva_password"
//                       name="eva_password"
//                       placeholder="Password"
//                     />
//                     <span className="focus-input"></span>
//                     <span
//                       className="fa fa-eye-slash pwd-toggle"
//                       aria-hidden="true"></span>
//                   </div>
//                 </div>
//                 <div className="form-group mb-1">
//                   <div className="form-check">
//                     <input
//                       type="checkbox"
//                       className="form-check-input"
//                       id="agreeCheck"
//                       checked={agree}
//                       onChange={(e) => setAgree(e.target.checked)}
//                     />
//                     <label className="form-check-label" htmlFor="agreeCheck">
//                       I agree to the{" "}
//                       <Link
//                         to="/legal/privacy/"
//                         target="_blank"
//                         className="small-text">
//                         privacy policy
//                       </Link>{" "}
//                       and{" "}
//                       <Link
//                         to="/legal/terms/"
//                         target="_blank"
//                         className="small-text">
//                         terms of service
//                       </Link>
//                       .
//                     </label>
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <button
//                     className="btn btn-lg btn-primary btn-block"
//                     type="submit">
//                     Agree and Join
//                   </button>
//                 </div>
//               </form>{" "}
//               <Link
//                 className="lnk-toggler small-text"
//                 data-panel=".panel-login"
//                 to="/login">
//                 Already have an account?
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-6 d-none d-md-block">
//           <div className="padd-text fadeInLeft">
//             <small className="small-text">About</small>
//             <h2 className="title-h2">Evangadi Networks Q&A</h2>
//             <p className="font-p mg-bt-10">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//               condimentum mauris at libero lobortis, sed placerat magna
//               vulputate.
//             </p>
//             <p className="font-p mg-bt-10">
//               Phasellus nec risus at ligula volutpat eleifend. Donec in ligula
//               nulla. Nullam sit amet turpis nec ante congue rhoncus non vitae
//               ex. Aenean at arcu dapibus, gravida tortor id,
//             </p>
//             <p className="font-p mg-bt-10">
//               Maecenas tristique eleifend efficitur. Quisque egestas turpis non
//               purus gravida, id euismod odio efficitur. Fusce non velit non
//               nulla dictum tincidunt.
//             </p>
//             <a href="/explained/" className="btn btn-blue">
//               How it works
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignUp;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axios/axiosConfig";
import "./account.css";

function SignUp() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !firstname || !lastname || !email || !password) {
      setError("Please provide all required information");
      return;
    }

    if (!agree) {
      setError("You must agree to the privacy policy and terms of service.");
      return;
    }

    // Validate first name using regex
    const regexName = /^[A-Za-z]+$/;
    if (!regexName.test(firstname)) {
      setError("Invalid first name.");
      return;
    }

    axios
      .post("/users/register", {
        username,
        firstname,
        lastname,
        email,
        password,
      })
      .then((res) => {
        setResponse(res?.data?.msg);
        setError("");
        console.log(res.data.msg);
        navigate("/login");
      })
      .catch((err) => {
        setError("Something went wrong. Please try again.");
        console.error(err);
      });
  };

  return (
    <div className="container">
      {error && <div className="alert alert-danger">{error}</div>}
      {response && <div className="alert alert-success">{response}</div>}
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6 col-12 col-sm-6">
          <div className="authfy-login">
            <div className="authfy-panel panel-signup text-center active">
              <div className="authfy-heading">
                <h3 className="auth-title">Join the network</h3>
                <p>
                  Already have an account?
                  <Link className="lnk-toggler small-text" to="/login">
                    Sign in
                  </Link>
                </p>
              </div>
              <div className="ajax-return"></div>
              <form onSubmit={handleSubmit} className="signupForm">
                <div className="form-group wrap-input mb-2">
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                  />
                  <span className="focus-input"></span>
                </div>

                <div className="row">
                  <div className="col-lg-6 no-padding">
                    <div className="form-group wrap-input mb-2">
                      <input
                        type="text"
                        className="form-control"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        placeholder="First name"
                      />
                      <span className="focus-input"></span>
                    </div>
                  </div>
                  <div className="col-lg-6 no-padding">
                    <div className="form-group wrap-input mb-2">
                      <input
                        type="text"
                        className="form-control"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        placeholder="Last name"
                      />
                      <span className="focus-input"></span>
                    </div>
                  </div>
                </div>

                <div className="form-group wrap-input mb-2">
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                  />
                  <span className="focus-input"></span>
                </div>

                <div className="form-group wrap-input mb-2">
                  <div className="pwdMask">
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                    />
                    <span className="focus-input"></span>
                    <span
                      className="fa fa-eye-slash pwd-toggle"
                      aria-hidden="true"></span>
                  </div>
                </div>
                <div className="form-group mb-1">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="agreeCheck"
                      checked={agree}
                      onChange={(e) => setAgree(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="agreeCheck">
                      I agree to the{" "}
                      <Link
                        to="/legal/privacy/"
                        target="_blank"
                        className="small-text">
                        privacy policy
                      </Link>{" "}
                      and{" "}
                      <Link
                        to="/legal/terms/"
                        target="_blank"
                        className="small-text">
                        terms of service
                      </Link>
                      .
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-lg btn-primary btn-block"
                    type="submit">
                    Agree and Join
                  </button>
                </div>
              </form>
              <Link className="lnk-toggler small-text" to="/login">
                Already have an account?
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 d-none d-md-block">
          <div className="padd-text fadeInLeft">
            <small className="small-text">About</small>
            <h2 className="title-h2">Evangadi Networks Q&A</h2>
            <p className="font-p mg-bt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              condimentum mauris at libero lobortis, sed placerat magna
              vulputate.
            </p>
            <p className="font-p mg-bt-10">
              Phasellus nec risus at ligula volutpat eleifend. Donec in ligula
              nulla. Nullam sit amet turpis nec ante congue rhoncus non vitae
              ex. Aenean at arcu dapibus, gravida tortor id,
            </p>
            <p className="font-p mg-bt-10">
              Maecenas tristique eleifend efficitur. Quisque egestas turpis non
              purus gravida, id euismod odio efficitur. Fusce non velit non
              nulla dictum tincidunt.
            </p>
            <a href="/explained/" className="btn btn-blue">
              How it works
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
