import { useNavigate } from "react-router-dom";
import Background from '../../assets/hero.png'

const Hero = () => {
    const navigate = useNavigate()

    function redirectShop() {
        navigate('/shop')
    }

  return (
    <div className="relative h-[715px] flex items-center justify-start">
        <img 
            src={Background} alt="living room" 
            className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative max-w-[643px] w-full flex items-center justify-end pt-24 ml-auto mr-14 font-poppins">
            <div className="bg-[#FFF3E3] p-8 rounded-lg">
                <span className="block text-base font-semibold mb-1">New Arrival</span>
                <h1 className="text-5xl font-bold text-[#B88E2F]">Discover Our <br/> New Collection</h1>
                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br/> elit tellus, luctus nec ullamcorper mattis.</p>
                <button onClick={redirectShop} className="w-56 h-16 mt-11 bg-[#B88E2F] text-white text-base font-bold rounded-md">
                    BUY NOW
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero