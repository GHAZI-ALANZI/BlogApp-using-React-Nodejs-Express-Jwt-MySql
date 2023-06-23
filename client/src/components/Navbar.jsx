import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";


const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div>
<nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
  <Link to="/"> <h1 className="me-5 ">ModernBlog</h1> </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item me-3">
        <Link className="link" to="/?cat=art">
            <h6>ART</h6>
          </Link>
        </li>
        <li class="nav-item me-3">
        <Link className="link" to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
        </li>
        <li class="nav-item me-3">
        <Link className="link" to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
        </li>
        <li class="nav-item me-3">
        <Link className="link" to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
        </li>
        <li class="nav-item me-3">
        <Link className="link" to="/?cat=design">
            <h6>DESIGN</h6>
          </Link>
        </li>
        <li class="nav-item me-3">
        <Link className="link" to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
        </li>
        <li class="nav-item mt-4 me-3">
        <i class="bi bi-person-fill text-success"><span className=" me-4">{currentUser?.username}</span></i>
          {currentUser ? (
            
            <span className="btn btn-danger" onClick={logout}>Logout</span>
          ) : (
            <Link className="link btn btn-info" to="/login">
              Login
            </Link>
          )}
        </li>
        <li class="nav-item mt-4">
         <span className="write">
            <Link className="link btn btn-info " to="/write">
              Write
            </Link>
          </span>
        </li>
        
        
        
        
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  );
};

export default Navbar;
