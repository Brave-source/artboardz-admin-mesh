import Link from "next/link";
import ArtBoardzInfo from "./ArtBoardInfo";
import Image from 'next/image'

const ArtBoardzItem = ({ image, art, location, artistName, links, id }) => {
  return (
    <li className="bg-primary-color border-2 border-light-purple">
      <Link href={`/artboardz/${id}`} className=" h-[266px] md:h-[228px] block">
        <Image src={image}  width="320" height="320" alt="/" className="w-full h-full object-cover " />
      </Link>
      <div className="p-4">
        <ArtBoardzInfo
          art={art}
          location={location}
          artist={artistName}
          links={links}
        />
      </div>
      <button className="bg-active-link rounded-md p-2 font-semibold w-11/12 mx-auto block tracking-wide text-base my-4">
        Floor: 340
      </button>
    </li>
  );
};

export default ArtBoardzItem;
