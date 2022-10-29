import { Link } from "react-router-dom";

function Profile(){
    const name="Paola Gómez"
    const email="paola@tec.mx"

    return(
        <>
       
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