import { useState } from 'react'
import About from '../components/main/About'
import Buttons from '../components/main/Buttons'
import LoginForm from '../components/main/forms/LoginForm'
import SignUpForm from '../components/main/forms/SignUpForm'

const Main = () => {

    const [showLogin, setShowLogin] = useState(false)

    const [showSignUp, setShowSignUp] = useState(false)

    function changeLoginState() {
        setShowLogin(!showLogin)
    }

    function changeSignUpState() {
        setShowSignUp(!showSignUp)
    }

    return (
        <div id='content' className='d-flex flex-column align-items-center justify-content-center'>
            <h1 className='logo'>More Health</h1>
            <About />
            <Buttons showLogin={changeLoginState} showSignUp={changeSignUpState} />
            {showLogin ? <LoginForm hide={changeLoginState} /> : null}
            {showSignUp ? <SignUpForm hide={changeSignUpState} /> : null}
        </div>
    )

}

export default Main