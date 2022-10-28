import React, { useState } from 'react';
import { Link } from "react-router-dom";


function User({user}){
  const [active, setActive] = useState(user.is_active)
  function clickEvent(e){
    setActive(!active);
  }

  function clickProfile(e){
    
  }
  return(
    <a href="#" className={"list-group-item list-group-item-action" +(active ? " active" : "")} aria-current="true" key = "{user.name}" >
        <div className="d-flex w-100 justify-content-between">
            <h6 className="mb-1">{user.name}</h6>
            <small>{active ? "Active": "Inactive"}</small>
          
          </div>
          <p className="mb-1">{user.email}</p>
          <button onClick={clickEvent} type="button" className={active ? "btn btn-light": "btn btn-outline-primary"}>{active ? "Deactivate" : "Activate"} </button>    

          <br></br>
          </a>
          
    )
  }
    
  


function UserList({users}){
  const [active, setActive] = useState()
  return <div className="list-group">
    {users.map((user) => <User user = {user} key = {user.name} ></User> )}
    <br></br>
  </div>
  
}


const userList =[
  { name:"Paola",
  is_active: true,
  email:"paola@tec.mx"
  }, 
  { name:"Hector",
  is_active: false,
  email:"hector@tec.mx"
  }, 
  { name:"Vanessa",
  is_active: true,
  email:"vanessa@tec.mx"
  }
]

function UserPage() {
  return (
    <>
    <nav className="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Web App</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample02">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/users">Users</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/profile">Profile</a>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
  <br></br>
  
    <h1>User List</h1>
    <UserList users={userList}></UserList>
    
    </>
  );
}

export default UserPage;