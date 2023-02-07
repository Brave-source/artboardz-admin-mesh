import NewReleaseList from "../../New Release/NewReleaseList";
import releaseImg from "@/assets/images/new_release.png";

export const DUMMY_RELEASES = [
  {
    id: "R1",
    image: releaseImg,
    source: "Origin",
    location: { city: "Cape Town", country: "South Africa" },
    author: "SergeOne",
    links: { instagram: "/", twitter: "/", discord: "/" },
  },
  {
    id: "R2",
    image: releaseImg,
    source: "Origin",
    location: { city: "Cape Town", country: "South Africa" },
    author: "SergeOne",
    links: { instagram: "/", twitter: "/", discord: "/" },
  },
  {
    id: "R3",
    image: releaseImg,
    source: "Origin",
    location: { city: "Cape Town", country: "South Africa" },
    author: "SergeOne",
    links: { instagram: "/", twitter: "/", discord: "/" },
  },
  {
    id: "R4",
    image: releaseImg,
    source: "Origin",
    location: { city: "Cape Town", country: "South Africa" },
    author: "SergeOne",
    links: { instagram: "/", twitter: "/", discord: "/" },
  },
];

const NewReleaseSection = () => {
  return (
    <section className="p-5 text-white font-Montserrat">
      <h1 className="text-2xl md:text-4xl font-medium tracking-wide text-center mb-6">
        New Releases
      </h1>
      <NewReleaseList releases={DUMMY_RELEASES} />
    </section>
  );
};

export default NewReleaseSection;
