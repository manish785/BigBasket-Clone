import Footer from "./Footer";
import { useState, useEffect } from 'react';
import { firstCarousel } from "../Data/Carousel";


const Body = () => {
    const [firstImage, setFirstImage] = useState(0);

    useEffect(() => {
        const Id = setInterval(() => {
            if(firstCarousel.length - 1 === firstImage){
                setFirstImage(0);
                return;
            }
            setFirstImage(firstImage + 1);
        }, 1500);
        return () => clearInterval(Id);
    }, [firstImage]);

    return (
        <>
        <div className="main-image-container">
                <img
                src={firstCarousel[firstImage]}
                alt="carouselImage"
                width="100%"
                />
        </div>

        <div className="bank-offers-container">
            <h1 className="font-thinner text-center text-4xl">Bank Offers</h1>
            <div className="flex ml-[70px]">
                <img 
                className="h-[240px] w-[320px] p-2"
                src="https://bigbasket-apnidukan.netlify.app/assets/bo1-e7b777fc.webp"
                alt="indusland-bank"
                />
                <img 
                className="h-[240px] w-[320px] p-2"
                src="https://bigbasket-apnidukan.netlify.app/assets/bo2-3adcf4a5.webp"
                alt="paytm"
                />
                <img 
                 className="h-[240px] w-[320px] p-2"
                 src="https://bigbasket-apnidukan.netlify.app/assets/bo3-94f1ca93.webp"
                 alt="rbl-bank"
                />
                <img 
                className="h-[240px] w-[320px] p-2"
                src="https://bigbasket-apnidukan.netlify.app/assets/bo4-09d04b77.webp"
                alt="digi-bank"
                />
            </div>
        </div>
        
        <div className="most-popular">
            <h1 className="font-thinner text-center text-4xl">Most Popular</h1>
            <div className="flex ml-[70px]">
                <img 
                className="h-[240px] w-[320px] p-2"
                src="https://bigbasket-apnidukan.netlify.app/assets/mp1-53971f36.webp"
                alt="indusland-bank"
                />
                <img 
                className="h-[240px] w-[320px] p-2"
                src="https://bigbasket-apnidukan.netlify.app/assets/mp2-88ae7ec4.webp"
                alt="paytm"
                />
                <img 
                 className="h-[240px] w-[320px] p-2"
                 src="https://bigbasket-apnidukan.netlify.app/assets/mp3-f0dc3f0e.webp"
                 alt="rbl-bank"
                />
                <img 
                className="h-[240px] w-[320px] p-2"
                src="https://bigbasket-apnidukan.netlify.app/assets/mp4-4b769954.webp"
                alt="digi-bank"
                />
            </div>
        </div>

        <div className="top-offers">
        <h1 className="font-thinner text-center text-4xl">Top Offers</h1>
            <div className="flex ml-[70px]">
                <img 
                className="h-[240px] w-[320px] p-2"
                src="https://bigbasket-apnidukan.netlify.app/assets/to1-997e2957.webp"
                alt="indusland-bank"
                />
                <img 
                className="h-[240px] w-[320px] p-2"
                src="https://bigbasket-apnidukan.netlify.app/assets/to2-96f848c1.webp"
                alt="paytm"
                />
                <img 
                 className="h-[240px] w-[320px] p-2"
                 src="https://bigbasket-apnidukan.netlify.app/assets/to3-e2c0a7c8.webp"
                 alt="rbl-bank"
                />
                <img 
                className="h-[240px] w-[320px] p-2"
                src="https://bigbasket-apnidukan.netlify.app/assets/to4-df412a02.webp"
                alt="digi-bank"
                />
            </div>
        </div>

        <div className="store">
        <h1 className="font-thinner text-center text-4xl">Store</h1>
            <div className="flex ml-[70px]">
                <img 
                className="h-[240px] w-[320px] p-2"
                src="https://bigbasket-apnidukan.netlify.app/assets/ss2-5a7d6c80.webp"
                alt="indusland-bank"
                />
                <img 
                className="h-[240px] w-[320px] p-2"
                src="https://bigbasket-apnidukan.netlify.app/assets/ss3-c8ee4823.webp"
                alt="paytm"
                />
                <img 
                 className="h-[240px] w-[320px] p-2"
                 src="https://bigbasket-apnidukan.netlify.app/assets/ss4-3c5a0e0c.webp"
                 alt="rbl-bank"
                />
                <img 
                className="h-[240px] w-[320px] p-2"
                src="https://bigbasket-apnidukan.netlify.app/assets/ch1-a2be1f64.webp"
                alt="digi-bank"
                />
            </div>
        </div>

        <div className="brand-store">
        <h1 className="font-thinner text-center text-4xl">Brand Store</h1>
            <div className="flex ml-[70px]">
                <img 
                className="h-[240px] w-[320px] p-2"
                src="https://bigbasket-apnidukan.netlify.app/assets/bs1-4af2780b.webp"
                alt="indusland-bank"
                />
                <img 
                className="h-[240px] w-[320px] p-2"
                src="https://bigbasket-apnidukan.netlify.app/assets/bs2-88a6919b.webp"
                alt="paytm"
                />
                <img 
                 className="h-[240px] w-[320px] p-2"
                 src="https://bigbasket-apnidukan.netlify.app/assets/bs3-27673ad5.webp"
                 alt="rbl-bank"
                />
                <img 
                className="h-[240px] w-[320px] p-2"
                src="https://bigbasket-apnidukan.netlify.app/assets/bs6-9e8dd681.webp"
                alt="digi-bank"
                />
            </div>
        </div>
        <div>
            <Footer/>
        </div>
        </>
    )
};


export default Body;