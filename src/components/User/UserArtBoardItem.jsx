import Link from "next/link";
import NewReleaseInfo from "../New Release/NewReleaseInfo";
import Image from 'next/image'

const UserArtBoardItem = ({ image, art, location, artist, links, id }) => {
  return (
    <li className="bg-primary-color border-2 border-light-purple">
      <Link href={`/artboardz/${id}`} className=" h-[266px] md:h-[228px] block">
        <Image src={image} alt="/" className="w-full h-full object-cover " />
      </Link>
      <div className="p-4">
        <NewReleaseInfo
          art={art}
          location={location}
          artist={artist}
          links={links}
        />
      </div>
    </li>
  );
};

export default UserArtBoardItem;
