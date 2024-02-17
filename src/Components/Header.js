import { Link, Navigate, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useEffect, useState } from 'react';


const Header = () => {
    const navigate = useNavigate();
    const [btnNameReact, setBtnNameReact] = useState('login');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                setBtnNameReact('logout');
            }else{
                setBtnNameReact('login');
            }
        })
        return () => unsubscribe();
    }, [])

    const handleSignIn = () => {
        navigate('/login');
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            setBtnNameReact('login');
        })
        .catch((error) => {
            navigate('/error');
        })
    }

    return(
        <div className='h-[90px] w-full bg-green-400 flex justify-between'>
            <div className='left-container h-[80px] flex'>
                <img
                   className='h-[60px] pt-[20px] pl-[15px] text-xl'
                   src='https://image3.mouthshut.com/images/imagesp/925660627s.png'
                   alt='big-basket-icon'
                />
                <div className='flex mt-[30px] pl-[40px]'>
                    <Link className='text-white' to='/'>Home</Link>
                    <Link className='text-white pl-[20px]' to='/products'>Products</Link>
                </div>
            </div>
            <div className='right-container flex'>
               {btnNameReact === 'login' ? (
                    <button className='ml-7 mt-2' onClick={handleSignIn}>
                        <p className='font-bold text-xl mt-[-9px] mr-[36px] text-white'>Login</p>
                    </button>
               ):(
                    <button className='ml-7 mt-2' onClick={handleSignOut}>
                        <p className='font-bold text-xl mt-[-7px] mr-[18px] text-white'>Hi, Guest</p>
                        <p className='font-bold  text-xl pt-[3px] mr-[36px] text-white'>Logout</p>
                    </button>
               )}
               <img 
               className='h-[45px] w-[45px] mt-[26px] mr-[12px]'
               src="https://img.icons8.com/external-flaticons-flat-circular-flat-icons/64/external-cart-web-flaticons-flat-circular-flat-icons.png" alt="external-cart-web-flaticons-flat-circular-flat-icons"
               />
            </div>
        </div>
    )
};


export default Header;