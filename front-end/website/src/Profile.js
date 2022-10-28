import { Link } from "react-router-dom";

function Profile(){
    const name="Paola Gómez"
    const email="paola@tec.mx"

    return(
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

        <div class="px-4 py-5 my-5 text-center">
            
            <h1 class="display-5 fw-bold">{name}</h1>
            <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">Contact Info: {email}</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">                
                <Link to = "/">
                <button type="button" class="btn btn-outline-secondary btn-lg px-4">Go Back</button>
                </Link>
            </div>
            </div>
        </div>
        </>
    )   
}

export default Profile;