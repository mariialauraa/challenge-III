import GlobalHero from '../../assets/hero_shop.png'
import Logo from '../../assets/logo.png'

type HeroProps = {
    title: string;
    firstPath: string;
    secondPath: string;
}

const Hero = ({
    title,
    firstPath,
    secondPath
}: HeroProps ) => {

  return (
    <div className='relative h-80 flex justify-center items-center'>
        <img 
            src={GlobalHero} 
            alt="Background" 
            className="absolute w-full h-full object-cover"
        />
        <div className='relative flex flex-col justify-center items-center text-center'>
            <img src={Logo} alt="Logo" className='mb-2'/>
            <h1 className='text-4xl font-poppins font-medium'>
                {title}
            </h1>
            <p className='mt-2 font-poppins font-medium'>
                {firstPath} {'>'} <span className='font-normal'>{secondPath}</span>
            </p>
        </div>
    </div>
  )
}

export default Hero