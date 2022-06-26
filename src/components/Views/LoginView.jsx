import '../Styles/Login.css' 
import UserValidator from '../../helpers/UserValidator'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useContext, useEffect } from 'react'
import { UserContext } from '../NoVisual/UserContext'

const MySwal = withReactContent(Swal)

const LoginView = () => {
    
    const {RedirectToProfile, SaveToken, navigate} = useContext(UserContext);

    const {CheckEmail, CheckPassword} = UserValidator

    const drawSwal = (title, htmlContent, icon) => {
        MySwal.fire({
            title: title,
            html: htmlContent
            ,icon: icon
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const {emailInput, passInput} = e.target
        const email = emailInput.value; const password = passInput.value
        
        const checkEmail = CheckEmail(email)
        const checkPassword = CheckPassword(password)

        let title = !checkEmail.isGood || !checkPassword.isGood ? 'Error' : 'Welcome'
        let htmlContent = !checkEmail.isGood ? checkEmail.messages[0]
        : !checkPassword.isGood ? checkPassword.messages[0]
        : '';
        let icon = checkEmail.isGood && checkPassword.isGood ? 'success' : 'error'

        title = <p>{title}</p>
        htmlContent = <p>{htmlContent}</p>
        
        if(checkEmail.isGood && checkPassword.isGood)
            fetch('http://challenge-react.alkemy.org',{
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password
                })
            }).then((data) => {
                const {status} = data

                if(status === 401){
                    htmlContent = <p>Check credentials.</p>
                    icon = 'error'
                    title = 'Error'
                }else{
                    data.json().then((d)=> SaveToken(d.token))
                }

                drawSwal(title, htmlContent, icon)
            })
        else{
            drawSwal(title, htmlContent, icon)
        }

    }

    useEffect(()=>{RedirectToProfile()},[RedirectToProfile,navigate])
    
    return <>
        <div>
            <h3 className="text-center welcomeText">WELCOME AGAIN</h3>
            <form className="d-flex flex-column" method="post" onSubmit={handleSubmit}>
                <input name="emailInput" className='form-control' type='text'/>
                <input autoComplete='true' name="passInput" className="my-lg-2 form-control" type='password'/>
                <button className="btn btn-outline-dark" type="submit">Login</button>
            </form>
        </div>

    </> 
}

export default LoginView