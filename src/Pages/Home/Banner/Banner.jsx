import { Carousel } from 'flowbite-react';

const Banner = () => {
  return (
    <div className="h-[50rem] sm:h-64 xl:h-80 2xl:h-96">
      <Carousel pauseOnHover className='h-[30rem]'>
        <img className='object-fill h-full w-full' src="https://i.ibb.co/YcM565b/banner5.webp" alt="..." />
        <img className='object-fill h-full w-full' src="https://i.ibb.co/sb7JL2m/banner2.webp" alt="..." />
        <img className='object-fill h-full w-full' src="https://i.ibb.co/LQJqGFK/banner6.jpg" alt="..." />
        <img className='object-fill h-full w-full' src="https://i.ibb.co/6nNvcPM/banner3.webp" alt="..." />
        <img className='object-fill h-full w-full' src="https://i.ibb.co/F7dKxFx/banner7.jpg" alt="..." />
        <img className='object-fill h-full w-full' src="https://i.ibb.co/8rRGpj4/banner4.webp" alt="..." />
      </Carousel>
    </div>
  );
};

export default Banner;