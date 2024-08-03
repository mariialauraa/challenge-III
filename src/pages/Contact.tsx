import HeroContact from "../components/Contact/HeroContact"
import { FaLocationDot, FaClock } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import FormContact from "../components/Contact/FormContact";
import Banner from "../components/Global/Banner";

const Contact = () => {
  return (
    <div>
        <HeroContact />
        <div className="my-12 font-poppins">
            <h1 className='font-semibold text-black text-4xl mb-3 text-center'>
                Get In Touch With Us
            </h1>
            <p className="text-center text-gray-400 px-4">
                For More Information About Our Product & Services. Please Feel Free To Drop Us <br/> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
            </p>
            <section className="flex flex-col md:flex-row justify-center items-start mt-20 space-y-10 md:space-y-0 md:space-x-10">
                <ul className="w-full max-w-md px-4">
                    <li className="flex mb-10 gap-7">
                        <FaLocationDot className="w-6 h-6"/>
                        <div>
                            <h2 className="font-medium text-xl">Address</h2>
                            <p className="text-base">236 5th SE Avenue, New <br/>York NY10000, United States</p>
                        </div>
                    </li>
                    <li className="flex mb-10 gap-7">
                        <FaPhoneAlt className="w-6 h-6"/>
                        <div>
                            <h2 className="font-medium text-xl">Phone</h2>
                            <p className="text-base">Mobile: +(84) 546-6789<br/>
                            Hotline: +(84) 456-6789</p>
                        </div>
                    </li>
                    <li className="flex gap-7">
                        <FaClock className="w-6 h-6"/>
                        <div>
                            <h2 className="font-medium text-xl">Working Time</h2>
                            <p className="text-base">Monday-Friday: 9:00 - <br/>22:00<br/>
                            Saturday-Sunday: 9:00 - <br/>21:00</p>
                        </div>
                    </li>
                </ul>
                <FormContact />
            </section>
        </div>
        <Banner />
    </div>
  )
}

export default Contact