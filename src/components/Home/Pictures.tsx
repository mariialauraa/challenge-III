import ShareSetup from '../../assets/share_setup.png'

const Pictures = () => {
  return (
    <div className='mt-10 px-6 text-center font-poppins'>
        <p className='font-semibold text-base md:text-xl text-gray-500'>
            Share your setup with
        </p>
        <h2 className='text-black mt-2 font-bold text-3xl md:text-4xl'>
            #FuniroFurniture
        </h2>
        <img src={ShareSetup} alt="Home Pictures" className='mx-auto w-full'/>
    </div>
  )
}

export default Pictures