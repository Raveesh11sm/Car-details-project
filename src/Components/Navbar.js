import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

function Navbar(props) {

  let logout = () => {
    // console.log(props);
    localStorage.clear();
    props.history.push("/")
    props.setlogout(false)
  }
  // let isLogin;
  //   useEffect(()=>{`  `
  // const isLogin = localStorage.getItem("roles")
  //   },[])

  return (
    // .../public/fourWheels.png
    <div>
      <nav className="navbar navbar-expand-lg  navbar-light" style={{ background: 'linear-gradient(45deg, #87f3ed9c, #ffeb00)' }}>
        <div className="container-fluid">
          <img className='img' src='/fourtrans.png'></img>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/adminLogin">LOGIN</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/adminSignup">Signup</Link>
              </li>


            </ul>
            <form className="d-flex">
              <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>


           {props.logout?<h4 className="nav-link" onClick={() => { logout() }}>LOGOUT</h4>:""}

          </div>
        </div>
      </nav>


    </div>
  )
}

export default withRouter(Navbar)