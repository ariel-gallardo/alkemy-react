import '../Styles/Login.css' 
import UserValidator from '../../helpers/UserValidator'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const LoginView = () => {

    const {CheckEmail, CheckPassword} = UserValidator

    const handleSubmit = (e) => {
        e.preventDefault()
        const {emailInput, passInput} = e.target
        const email = emailInput.value; const password = passInput.value
        
        const checkEmail = CheckEmail(email)
        const checkPassword = CheckPassword(password)

        MySwal.fire({
            title: <p>{checkEmail.isGood && checkPassword.isGood ? 'Welcome Again' : 'Error'}</p>,
            html: <p>{!checkEmail.isGood ? checkEmail.messages[0]
            : !checkPassword.isGood ? checkPassword.messages[0]
            : 'Login Sucessfully'}</p>
            ,icon: checkEmail.isGood && checkPassword.isGood ? 'success' : 'error'
          }).then(() => {
                if(checkEmail.isGood && checkPassword.isGood){
                    
                }
          })

    }

    return <>
        <div>
            <h3 className="text-center welcomeText">WELCOME AGAIN</h3>
            <form className="d-flex flex-column" method="post" onSubmit={handleSubmit}>
                <input name="emailInput" className='form-control' type='text'/>
                <input name="passInput" className="my-lg-2 form-control" type='password'/>
                <button className="btn btn-outline-dark" type="submit">Login</button>
            </form>
        </div>

    </> 
}

export default LoginView