import { StarIcon } from '@heroicons/react/solid';


const ProductItem = ({ body, category, img, price, quantity, rating, title }) => {

        return (
            <>
                <div className="ml-[200px]">
                <div className="ml-[-140px]">
                    <div className="h-[400px] w-[276px] border border-gray-400 flex flex-wrap mt-[80px] p-[2x] rounded-md">
                        <img 
                            className="h-[190px] w-[260px] items-center p-[20px] pr-[20px]"
                            src={img}
                            alt=''
                        /> 
                        <h3 className="body truncate max-w-[10rem] ml-[9px] mt-[-24px]">{body.slice(0, 40)}</h3>
                        <h3 className="ml-[24px] mt-[-24px] font-thin">Category: {category}</h3>
                        
                        <div className="">
                            <div className="ml-[24px]  mt-[-24px]">
                                <h3 className="mr-2 font-thin">Price:{price}</h3>
                            </div>
                            <div className="ml-[24px]  mt-[0px]">
                                <div>
                                   <h3 className="mr-2 font-thin">Quantity:{quantity}</h3>
                                </div>
                            </div>

                            
                        </div>
        
                        <div className='flex flex-wrap items-center mt-[-45px]'>
                            <h3 className="ml-[24px]  mt-[1px] font-thin">{rating.rate}</h3>
                            <StarIcon className="w-5 h-5 ml-[5px] text-red-500" />
                            <h3 className="ml-[5px] pl-[90px] font-thin">{rating.count} Ratings</h3>
                        </div>


                        <div className='h-[44px] w-[100px] bg-purple-500  ml-[19px] rounded-md'>
                            <button className='h-[14px] text-lg mt-[6px] ml-[6px] text-white'>Add to Bag</button>
                        </div>
                    </div>
                </div>
                </div>  
            </>        
        )        
    };


export default ProductItem;