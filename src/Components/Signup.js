import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from 'axios'

function Signup(props) {
  const [AdminDetails, setAdminDetails] = useState({
    username: "",
    password: "",
    role: "",
  });

  const [passError, setPassError] = useState("");

  const [nameerror, setnameerror] = useState("");

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

  let validateClick=(e)=>{
    setAdminDetails({...AdminDetails,role:e.target.value})
  }

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

  let updateSignupData = (e) => {
    setAdminDetails({
      ...AdminDetails,
      [e.target.name]: e.target.value,
    });
  };
  let signupSubmit = (e) => {
    e.preventDefault();
  };

  let signup = async (e) => {
    let res = await axios.post("http://localhost:8089/admin/adminSignup",AdminDetails);
    console.log(res);
    let passValid = isPassValid(AdminDetails.password);
    let nameValid = validateName(AdminDetails.username);

    if (res.data.error) {
      console.log(res.data.message);
    } else {
      console.log(res.data.message);
      alert("signedup  successfully");
      props.history.push("/adminLogin");
      setAdminDetails({
        username: "",
        password: "",
        role: "",
      });
    }
  };

  let goToLogin = (e) => {
    props.history.push("/adminLogin");
  };
  return (
    <div className='card col-4 mt-5 rounded shadow-lg p-3 mb-5 bg-white rounded'
    style={{ marginLeft: '450px', padding: '10px' }}>
      <h1>SIGNUP FORM</h1>
      <form className="container mt-4" onSubmit={signupSubmit}>
        <div className="mb-3 text-start">
          <label htmlFor="exampleInputPassword1" className="form-label ">
            Full Name
          </label>
          <input
            value={AdminDetails.username}
            onChange={updateSignupData}
            name="username"
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
          {validateName ? <span id="errmsg">{nameerror}</span> : null}
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            value={AdminDetails.password}
            onChange={updateSignupData}
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
          {isPassValid ? <span id="errmsg">{passError}</span> : null}
        </div>
        <div className="mb-3 text-start">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Enter your role :
          </label>
         
          {/* <input
            value={AdminDetails.adminRoles}
            onChange={updateSignupData}
            name="adminRoles"
            type="text"
            className="form-control"
          /> */}


          <select className="form-control" onClick={validateClick}>
            <option value="select">select</option>
            <option value="ROLE_ADMIN">Admin</option>
            <option value="ROLE_ADMIN">SUPERADMIN</option>

          </select>
        </div>
        <button
          onClick={(e) => {
            signup();
          }}
          type="submit"
          className="btn btn-outline-primary"
        >
          Submit
        </button>
      </form>
      <hr></hr>
      <h5
        onClick={(e) => {
          goToLogin();
        }}
      >
        Already have an account login
      </h5>
    </div>
  );
}

export default withRouter(Signup);
