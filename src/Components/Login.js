import { useState, useRef } from 'react';
import { checkValidData } from '../utils/validate';
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const navigate = useNavigate();

    const getUser = {
        name: 'Test1',
        email: 'test12345@gmail.com',
        password: 'Test@1234'
    }

    const guestUserHandler = ( event ) => {
        event.preventDefault();
        email.current.value = getUser.email;
        password.current.value = getUser.password;
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
   

    const toggleLoginStatus = () => {
        setIsLoggedIn(!isLoggedIn);
    }

    const handleButtonClick = () => {
        // valiadte the data
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if(message){
            return;
        }

        if(!isSignInForm){
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value,
            )
            .then((userCredential) => {
                const user = userCredential.user;
                // .then(() => {
                //     toggleLoginStatus();
                //     const { uid, email, displayName, photoURL } = auth.currentUser;
                //     navigate('/');
                // })
                // .catch((error) => {
                //     setErrorMessage(error.message);
                // });
            })
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
            });
        }else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                toggleLoginStatus(); 
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
            })
        }
    }


    return (
        <div>
            <div className='absolute'>
                <img 
                 className='h-screen w-screen object-cover mt-[-90px]'
                 src='https://img.freepik.com/free-vector/realistic-style-technology-particle-background_23-2148426704.jpg'
                 alt='bg-img'
                />
            </div>
            <form
             onSubmit={(e) => e.preventDefault()}
             className='absolute left-0 right-0 mt-[-22px] w-[70%] md:w-[70%] xl:w-[25%] p-4 md:p-8 mx-auto text-white bg-violet-900 rounded-lg my-36 bg-opacity-888 '
            >
             <h1 className="py-4 text-3xl font-bold">
                    {isLoggedIn ? 'Logout' : (isSignInForm ? 'Sign In' : 'Sign Up')}
            </h1>
            {!isSignInForm && (
                <input
                  ref={name}
                  type='text'
                  placeholder='Full Name'
                  className='p-4 rounded-md my-2 w-full bg-violet-600 border-b-2  border-transparent  focus:border-b-2 focus:outline-0'
                />
            )}
            <input
                ref={email}
                type='email'
                placeholder='Full Email'
                className='p-4 rounded-md my-2 w-full bg-violet-600 border-b-2  border-transparent  focus:border-b-2 focus:outline-0'
            />
            <input
                ref={password}
                type='password'
                placeholder='Full Password'
                className='p-4 rounded-md my-2 w-full bg-violet-600 border-b-2  border-transparent  focus:border-b-2 focus:outline-0'
            />
            <p className='text-[#e50914]'>{errorMessage}</p>
            <button className='p-4 my-6 rounded-md bg-[#e50914] hover:bg-[#d6180b] w-full font-medium' onClick={guestUserHandler}>
               Add Guest Credentials
            </button>
            <button className='p-4 my-6 rounded-md bg-[#e50914] hover:bg-[#d6180b] w-full font-medium' onClick={handleButtonClick}>
                {isSignInForm ? 'Sign In' : 'Sign Up'}
            </button>
            <p  
                className="my-4 cursor-pointer opacity-100  hover:opacity-100 hover:underline"
                onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix ? Sign Up Now' : 'Already registered? Sign In Now'}
            </p>
            </form>
        </div>
    )
};


export default Login;