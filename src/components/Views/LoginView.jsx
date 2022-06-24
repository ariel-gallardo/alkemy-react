import '../Styles/Login.css' 
import UserValidator from '../../helpers/UserValidator'

const LoginView = () => {

    const {CheckEmail, CheckPassword} = UserValidator

    const handleSubmit = (e) => {
        e.preventDefault()
        const {emailInput, passInput} = e.target
        const email = emailInput.value; const password = passInput.value
        
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