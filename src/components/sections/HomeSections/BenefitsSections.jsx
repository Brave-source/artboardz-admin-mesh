import CBImg1 from "@/assets/images/CB1.png";
import CBImg2 from "@/assets/images/CB2.png";
import CBImg3 from "@/assets/images/CB3.png";
import CBImg4 from "@/assets/images/CB4.png";
import Image from 'next/image'

const DUMMY_INFO = [
  {
    image: CBImg1,
    description: "Adorning cities with art not advertising",
  },
  {
    image: CBImg2,
    description: "Personalized physical tag on the mural",
  },
  {
    image: CBImg3,
    description: "Personalized digital tag on collection page",
  },
  {
    image: CBImg4,
    description: "Tactfully promoting Cardan",
  },
];

const BenefitsSections = () => {
  return (
    <section className="tracking-wide mb-8 text-white w-8/12 sm:w-10/12 lg:w-full mx-auto font-medium space-y-6 sm:p-4">
      <h1 className="text-2xl text-center md:text-4xl">Collectors Benefits</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-3">
        {DUMMY_INFO.map((info, index) => {
          return (
            <article
              key={index}
              className="w-full h-full flex flex-col justify-around"
            >
              <Image
                src={info.image}
                alt="/"
                className="w-full aspect-square object-cover"
              />
              <p className="text-xl text-center md:text-xl">
                {info.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default BenefitsSections;
