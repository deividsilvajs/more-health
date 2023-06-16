import { useState } from 'react';
import About from './content/About';
import Buttons from './content/Buttons';
import LoginForm from './content/LoginForm';
import SignUpForm from './content/SignUpForm';

function Content() {

    const [showLogin, setShowLogin] = useState(false);

    const [showSignUp, setShowSignUp] = useState(false);

    function changeLoginState() {
        setShowLogin(!showLogin);
    };

    function changeSignUpState() {
        setShowSignUp(!showSignUp);
    };

    return (
        <div id='content' className='d-flex flex-column align-items-center justify-content-center'>
            <h1>More Health</h1>
            <About />
            <Buttons showLogin={changeLoginState} showSignUp={changeSignUpState} />
            {showLogin ? <LoginForm hideLogin={changeLoginState} /> : null}
            {showSignUp ? <SignUpForm hideSignUp={changeSignUpState} /> : null}
        </div>
    );

};

export default Content;