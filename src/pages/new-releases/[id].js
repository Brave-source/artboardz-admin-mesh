import { useEffect } from "react";
import releaseImg from "@/assets/images/new_release.png";
import NewReleaseDetails from "@/components/New Release/NewReleaseDetails";
import { useRouter } from 'next/router'

const DUMMY_DETAILS = {
  Art: "Origin",
  Artist: "SergeOne",
  image: releaseImg,
  location: { city: "Cape Town", country: "South Africa" },
  links: { instagram: "/", twitter: "/", discord: "/" },
  artDesc:
    "Origins pays homage to the genesis of graffiti art originating from the San Bushmen. The bushmen crushed up a red ochre mineral into fine powder. They would then put it in their mouth and spray it over their hands and onto the rock face which would create a hand print. This made them the original graffiti artists. ",

  moreDetails: [
    {
      title: "Creator",
      image: releaseImg,
      desc: "SergeOne is an award-winning Cape Town-based graffiti artist and illustrator. He started writing graffiti in 2008, focusing on letter forms and style writing. In 2013 he started focusing on painting animals and nature pieces in public spaces after an epiphany about the powerful connection between humans and nature.Graffiti Art Murals by SergeOne can be seen around the greater Cape Town area and is a welcome and familiar sight to all. The Art Bank knew SergeOne’s art before the artist, and is pleased to work with him.",
    },
    {
      title: "Location",
      image: releaseImg,
      desc: "Battery Park Waterfront, Cape Town, South Africa Battery Park is located in the heart of Cape Town and connects the V&A Waterfront to the city through scenic pedestrian routes, canals, and recreational spots.The canal has a biodiverse ecosystem swarming with various fish species and several breeding pairs of Cape Clawless Otters. Access to the area is free and is buzzing with foot traffic from locals and international visitors.",
    },
    {
      title: "Details",
      desc: "If you mint the single rare NFT, the artist will paint your tag on the mural. The rare NFT also comes with an animated version.",
    },
  ],
};

const NewReleaseDetailsPage = () => {
  const router = useRouter()
  const { id } = router.query
  useEffect(() => {
    document.querySelector("#main-layout").scrollTop = 0;
  }, []);

  return (
    <>
      <h1 className="text-2xl md:text-4xl font-medium tracking-wide text-center mb-6 text-white font-Montserrat">
        New Releases {id}
      </h1>
      <NewReleaseDetails
        image={DUMMY_DETAILS.image}
        art={DUMMY_DETAILS.Art}
        artist={DUMMY_DETAILS.Artist}
        location={DUMMY_DETAILS.location}
        links={DUMMY_DETAILS.links}
        artDesc={DUMMY_DETAILS.artDesc}
        moreInfo={DUMMY_DETAILS.moreDetails}
      />
    </>
  );
};

export default NewReleaseDetailsPage;
