import { useContext, useEffect } from "react";
import { UserContext } from "../NoVisual/UserContext";

const ProfileView = () => {

    const {RedirectToLogin, RemoveToken, navigate, Token} = useContext(UserContext);

    const Logout = () => RemoveToken()

    useEffect(()=>{RedirectToLogin()},[RedirectToLogin, navigate])

    if(Token)
    return <div className="bg-dark text-center text-light p-3 border rounded shadow-lg">
        <div className="p-3">
            <h1 className="m-0">Hello User</h1>
            <button onClick={Logout} className="btn btn-outline-danger">Logout</button>
        </div>
    </div>
}

export default ProfileView