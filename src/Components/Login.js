import axios from "axios";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";

function Login(props) {
  const [AdminDetails, setAdminDetails] = useState({
    username: "",
    password: "",
  });
  // console.log("props ", props);
  const [passError, setPassError] = useState("");

  const [nameerror, setnameerror] = useState("");

  let updateLoginData = (e) => {
    setAdminDetails({
      ...AdminDetails,
      [e.target.name]: e.target.value,
    });
  };

  const expr = /^[a-zA-Z_]{3,15}$/;

  const validateName = (name) => {
    if (name && expr.test(name)) {
      setnameerror(true);
      setnameerror("");
      return true;
    } else {
      setnameerror(false);
      setnameerror("Please enter the valid name");
      return false;
    }
  };

  const isPassValid = (a) => {
    let imp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    
    if (imp.test(a)) {
      setPassError("");
      return true;
    } else {
      setPassError("password must contain alphanumeric value !!!");
      return false;
    }
  };

  let loginSubmit = (e) => {
    e.preventDefault();
  };

  let login = async (e) => {
    let res = await axios.post("http://localhost:8089/admin/adminLogin", AdminDetails);
    let passValid = isPassValid(AdminDetails.password);
    let nameValid = validateName(AdminDetails.username);
    console.log(res);
    if (nameValid && passValid) {
      if (res.data.error) {
        console.log(res.data.message);
      } else {
       console.log(res.data.role);
        console.log(res.data.token);
        localStorage.setItem("jwtToken", res.data.token);
        localStorage.setItem("roles", res.data.role);

        let whichRole = localStorage.getItem("roles");
        if (whichRole === "ROLE_ADMIN") {
          console.log(props);
          alert(" admin logged in successfully");
          props.setlogout(true)
          props.history.push("/admin");
        
          // <h1>WELCOME ADMIN</h1>;
        } else if (whichRole === "ROLE_SUPERADMIN") {
          props.history.push("/superAdmin");
          alert("logged in superAdmin successfully");
          // <h1>WELCOME SUPERADMIN</h1>;
        }

        setAdminDetails({
          username: "",
          password: "",
        });
      }
    } else {
      alert("validation failed please try again");
    }
  };

  let goToSignup = (e) => {
    props.history.push("/adminSignup");
  };

  return (
    <div className='card shadow col-4 mt-5 rounded'
    style={{ marginLeft: '450px', padding: '10px' }}
   >
      <div className="form-group ">
      <h1>ADMIN LOGIN FORM</h1>
      {/* <p style={{ color: "red" }}>user please dont try to login</p> */}
      <form className="container mt-5" onSubmit={loginSubmit}>
        <div className="mb-3 text-start">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter Your Name
          </label>
          <input
            type="text"
            name="username"
            onChange={updateLoginData}
            value={AdminDetails.username}
            className="form-control"
            id="exampleInputEmail1"
          />
          {validateName ? <span id="errmsg">{nameerror}</span> : null}
        </div>
        <div className="mb-3 text-start">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            onChange={updateLoginData}
            value={AdminDetails.password}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
          {isPassValid ? <span id="errmsg">{passError}</span> : null}
        </div>
        <button
          onClick={(e) => {
            login(e);
          }}
          type="submit"
          className="btn btn-outline-primary mt-2"
        >
          Submit
        </button>
      </form>
      <hr></hr>
      <h5
        onClick={(e) => {
          goToSignup();
        }}
      >
        dont have an account? signup
      </h5>
      </div>
    </div>
  );
}

export default withRouter(Login);

