import React,{useState} from 'react'
import { useNavigate, Link } from 'react-router'
import "../auth.form.scss"
import { useAuth } from '../hooks/useAuth'
import LoadingPage from '../components/LoadingPage'

const Login = () => {

    const { loading, handleLogin} = useAuth()
    const navigate = useNavigate()

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [invalidCredentials, setInvalidCredentials] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
         const user = await handleLogin({email,password})

        if (user === undefined) {
            return setInvalidCredentials(true)
        }

        navigate('/')
    }

    if(loading){
        return <LoadingPage />
    }


    return (
        <main>
            {/* Page Header */}
            <div className="auth-header">
                <h1>Welcome Back</h1>
                <p>Sign in to access your personalized interview preparation tools</p>
            </div>

            {/* Auth Card */}
            <div className="form-container">
                {invalidCredentials? <p style={{color: "red"}}>Invalid Credentials</p> : null}
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={(e) => { 
                                setEmail(e.target.value) 
                                setInvalidCredentials(false) 
                            }}
                            type="email" id="email" name='email' placeholder='Enter email address' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            onChange={(e) => { 
                                setPassword(e.target.value)
                                setInvalidCredentials(false)
                             }}
                            type="password" id="password" name='password' placeholder='Enter password' />
                    </div>
                    <button className='button primary-button' >Login</button>
                </form>
                <p>Don't have an account? <Link to={"/register"} >Register</Link> </p>
            </div>
        </main>
    )
}

export default Login
