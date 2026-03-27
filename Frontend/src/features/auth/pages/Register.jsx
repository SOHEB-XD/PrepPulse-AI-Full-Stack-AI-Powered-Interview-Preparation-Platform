import React,{useState} from 'react'
import { useNavigate, Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import LoadingPage from '../components/LoadingPage'

const Register = () => {

    const navigate = useNavigate()
    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [isUserAlreadyExist, setIsUserAlreadyExist] = useState(false)

    const {loading,handleRegister} = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = await handleRegister({username,email,password})

        if (user === undefined) {
            setIsUserAlreadyExist(true)
            setTimeout(() => {
                navigate("/login")
            }, 1000)  
            return
        }
        
        navigate("/")
    }

    if(loading){
        return <LoadingPage />
    }

    return (
        <main>
            {/* Page Header */}
            <div className="auth-header">
                <h1>Join PrepPulse An Interview AI</h1>
                <p>Create your account to start building personalized interview strategies</p>
            </div>

            {/* Auth Card */}
            <div className="form-container">
                { isUserAlreadyExist ? <p style={{color: "red"}}>User already exists, Navigating to the Login page...</p> : null}
                <h1>Register</h1>

                <form onSubmit={handleSubmit}>

                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            onChange={(e) => { setUsername(e.target.value) }}
                            type="text" id="username" name='username' placeholder='Enter username' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={(e) => { setEmail(e.target.value) }}
                            type="email" id="email" name='email' placeholder='Enter email address' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            onChange={(e) => { setPassword(e.target.value) }}
                            type="password" id="password" name='password' placeholder='Enter password' />
                    </div>

                    <button className='button primary-button' >Register</button>

                </form>

                <p>Already have an account? <Link to={"/login"} >Login</Link> </p>
            </div>
        </main>
    )
}

export default Register
