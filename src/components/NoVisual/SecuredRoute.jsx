import { useContext, useEffect } from "react"
import { UserContext } from "../NoVisual/UserContext"

const SecuredRoute = ({children}) => {
    const {RedirectToLogin, Token} = useContext(UserContext)
    useEffect(()=>{RedirectToLogin()},[RedirectToLogin,Token])

    if(Token)
        return <>{children}</>
}

export default SecuredRoute