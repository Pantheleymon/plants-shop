import { FC } from "react";

import { PiPottedPlant } from "react-icons/pi";
import { BsBoxSeam, BsTelephoneOutbound } from "react-icons/bs";

const AboutUs:FC = () => {
    return (
        <section className="mt-28 text-center pb-16">
            <h2 className="text-3xl font-bold">About us</h2>
            <p className="text-lg font-medium text-[#8E8E8E]">Order now and appreciate the beauty of nature</p>

            <div className="flex gap-6 justify-center mt-12">
                <div className="max-w-md">
                    <div className="rounded-full w-24 h-24 bg-[#C1DCDC] flex justify-center items-center mx-auto mb-6">
                        <PiPottedPlant className="w-10 h-10" />
                    </div>
                    <h4 className="text-lg font-bold">Large Assortment</h4>
                    <p className="mt-3 text-lg font-medium text-[#8E8E8E]">we offer many different types of products with fewer variations in each category.</p>
                </div>

                <div className="max-w-md">
                    <div className="rounded-full w-24 h-24 bg-[#C1DCDC] flex justify-center items-center mx-auto mb-6">
                        <BsBoxSeam className="w-10 h-10" />
                    </div>
                    <h4 className="text-lg font-bold">Fast & Free Shipping</h4>
                    <p className="mt-3 text-lg font-medium text-[#8E8E8E]">4-day or less delivery time, free shipping and an expedited delivery option.</p>
                </div>

                <div className="max-w-md">
                    <div className="rounded-full w-24 h-24 bg-[#C1DCDC] flex justify-center items-center mx-auto mb-6">
                        <BsTelephoneOutbound className="w-10 h-10" />
                    </div>
                    <h4 className="text-lg font-bold">24/7 Support</h4>
                    <p className="mt-3 text-lg font-medium text-[#8E8E8E]">answers to any business related inquiry 24/7 and in real-time.</p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;