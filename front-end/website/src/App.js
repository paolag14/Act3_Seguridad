import React, { useState } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Link
} from "react-router-dom"
import UserPage from './UserPage';
import Login from './Login'
import Profile from './Profile';

function TopBar({userLogged, logout, userData}){
  let location=useLocation();
  return(

  <header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/" className={"nav-link px-2 text-secondary"+ (location.pathname==="/" ? "text-white": "text-secondary")}>Home</a></li>
          <li><a href="/users" className={"nav-link px-2 text-white" + (location.pathname==="/users" ? "text-white": "text-secondary")}>Users</a></li>
          <li><a href="/profile" className={"nav-link px-2 text-white" + (location.pathname==="/profile" ? "text-white": "text-secondary")}>Profile</a></li>
        </ul>
        { userLogged ?
        <>
        <div style={{paddingRight:"1em"}}> Welcome, {userData ? userData.name : ""}</div> 
        <div className='dropdown text-end'>
          <a href='#' className='d-block link-dar text-decoration-none dropdown-toogle' data-bs-toggle="dropdown"> 
            <img src={userData.avatar_url} alt="mdo" width="32" height="32" className='rounded-circle'></img>
          </a>
          <ul className='dropdown-menu text-snall'>
            <li> <a className='dropdown-item' href='#'> New project...</a></li>
            <li> <a className='dropdown-item' href='#'> Settings</a></li>
            <li> <a className='dropdown-item' href='#'> Profile</a></li>
            <li><hr className='dropdown-divider'></hr></li>
            <li> <a className='dropdown-item' href='#'> Sign out</a></li>

          </ul>
        </div>
        <button className="btn btn-outline-light me-2" onClick={logout}>Logout</button>
        </>
        : <div className="text-end">
          <Link to={"/login?next="+location.pathname}>
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          </Link>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div>}
      </div>
    </div>
  </header>
  )
  
}

function LandingPage(){
  <>
        
  <h1>Bienvenido</h1>
  {console.log("landingpage")}
  </>
}

function App() {
  const[token, setToken] = useState(localStorage.getItem("token"))
  const[userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData") ))
  function logout(){
    localStorage.removeItem("token")
    setToken(null)
    localStorage.removeItem("userData")
    setUserData(null)
  }
    
    return (
      <>
     
      <BrowserRouter>
     <TopBar userLogged={!!token} logout={logout} userData={userData}></TopBar>
      <div className="container py-3">
  <Routes>
    <Route path="/" element={<LandingPage />}> </Route>
    <Route path="/users" element={<UserPage token={token} />}> </Route>
    <Route path="/login" element={<Login setToken={setToken} setUserData={setUserData}/>}> </Route>
    <Route path="/profile" element={<Profile />}></Route>

  </Routes>
  </div>
  </BrowserRouter>

        
      
      </>
      
    );
  }
  
  export default App;