import { Link } from 'react-router-dom';
import Body from './Body';
import Products from './Products';

const Header = () => {
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
                    <Link className='text-white pl-[20px]' to='/products'><Products/></Link>
                </div>
            </div>
            <div className='right-container flex'>
               <Link to='/login' className='mt-[36px] mr-[40px] text-white'>Login</Link>
               <img 
               className='h-[45px] w-[45px] mt-[26px] mr-[12px]'
               src="https://img.icons8.com/external-flaticons-flat-circular-flat-icons/64/external-cart-web-flaticons-flat-circular-flat-icons.png" alt="external-cart-web-flaticons-flat-circular-flat-icons"
               />
            </div>
        </div>
    )
};


export default Header;