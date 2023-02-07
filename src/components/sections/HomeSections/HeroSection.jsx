import heroImage from "@/assets/images/heroImage.png";
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="md:mb-8">
      <div className="w-full lg:h-[440px] relative">
        <Image
          src={heroImage}
          alt=""
          className="w-full h-full object-cover object-left-top"
        />
        <div className="sm:absolute sm:bottom-[10%] sm: ml-6">
          <p className="hidden sm:block text-gray-900 font-Roboto font-extrabold text-3xl tracking-wide">
            Artboardz mingles digital and street art
          </p>
          <button className="bg-[#212634] text-white py-2 px-4 rounded-md text-base tracking-wide font-Montserrat font-medium mx-auto block my-6 sm:mx-0">
            Upcoming Mints
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
