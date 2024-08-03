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
            src='https://desafio3mlr.s3.us-east-2.amazonaws.com/assets/hero_shop.png'
            alt="Background" 
            className="absolute w-full h-full object-cover"
        />
        <div className='relative flex flex-col justify-center items-center text-center'>
            <img 
                src='https://desafio3mlr.s3.us-east-2.amazonaws.com/assets/logo.png'
                alt="Logo" 
                className='mb-2'
            />
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