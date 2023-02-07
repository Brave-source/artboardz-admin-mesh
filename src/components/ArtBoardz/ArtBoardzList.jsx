import releaseImg from "@/assets/images/new_release.png";
import { useEffect, useState } from "react";
import axios from "axios";
import ArtBoardzItem from "./ArtBoardzItem";

const DUMMY_ARTS = [
  {
    id: "R1",
    image: releaseImg,
    source: "Origin",
    location: { city: "Cape Town", country: "South Africa" },
    author: "SergeOne",
  },
  {
    id: "R2",
    image: releaseImg,
    source: "Origin",
    location: { city: "Cape Town", country: "South Africa" },
    author: "SergeOne",
  },
  {
    id: "R3",
    image: releaseImg,
    source: "Origin",
    location: { city: "Cape Town", country: "South Africa" },
    author: "SergeOne",
  },
  {
    id: "R4",
    image: releaseImg,
    source: "Origin",
    location: { city: "Cape Town", country: "South Africa" },
    author: "SergeOne",
  },
];

const ArtBoardzList = () => {
  const [collections, setCollections] = useState([]);

  useEffect(()=> {
    const getCollections =async() => {
      try {
        const res = await axios.get('http://localhost:3002/api/collections');
        setCollections(res.data)
      }catch(err) {
        console.log(err)
      }
    }
    getCollections()
  },[])
  console.log(collections)
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-2">
      {/* {DUMMY_ARTS.map((release) => {
        return (
          <ArtBoardzItem
            key={release.id}
            id={release.id}
            image={release.image}
            art={release.source}
            location={release.location}
            artist={release.author}
          />
        );
      })} */}
      {collections.map((release) => {
        return (
          <ArtBoardzItem
            key={release._id}
            id={release._id}
            image={release.artImg}
            location={release.location}
            artistName={release.name}
          />
        );
      })}
    </ul>
  );
};

export default ArtBoardzList;
