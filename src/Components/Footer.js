import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <div className="h-[200px] w-full border-t mt-[-8px] border-black flex">
            <div>
                <img 
                className="h-[60px] w-[200px] mt-[30px] ml-[100px]"
                src="https://image3.mouthshut.com/images/imagesp/925660627s.png"
                alt=""
                />
                <p className="ml-[100px] mt-[9px]">© 2022 bigbasket . All rights reserved</p>
            </div>
            <div className="h-[160px] mt-[30px] pl-[80px]">
                <h1 className="text-lg">Company</h1>
                <div className='mt-[6px]'>
                  <Link className='font-thin' to='/'>About Us</Link>
                </div>
                <div className='mt-[6px]'>
                 <Link  className='font-thin' to='/'>Blog</Link>
                </div>
                <div className='mt-[6px]'>
                <Link  className='font-thin' to='/'>Contact Us</Link>
                </div>
            </div>

            <div className="h-[160px] mt-[30px] pl-[140px]">
                <h1 className="text-lg">Support</h1>
                <div className='mt-[6px]'>
                  <Link  className='font-thin' to='/'>Help Center</Link>
                </div>
                <div className='mt-[6px]'>
                 <Link  className='font-thin' to='/'>Terms of Service</Link>
                </div>
                <div className='mt-[6px]'>
                <Link  className='font-thin' to='/'>Legal</Link>
                </div>
                <div className='mt-[6px]'>
                <Link  className='font-thin' to='/'>Privacy Policy</Link>
                </div>
            </div>
            <div className="h-[160px] mt-[30px] pl-[80px]">
                <h1 className="text-lg">Stay up to date</h1>
                <div className='mt-[30px] flex'>
                  <input
                    className='h-[36px] w-[350px] border border-black rounded-md'
                    type='text'
                    placeholder=''
                    required
                  />
                  <button className='mt-[10px] pl-[20px] mt-[2px]'>
                      <img 
                      className='h-[30px] w-[30px]'
                      src='https://img.icons8.com/?size=100&id=W_wmdihKCiFx&format=png'
                      alt=''
                      />
                  </button>
                </div>
            </div>
        </div>
    )
};


export default Footer;