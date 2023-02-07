import { useEffect } from "react";
import ArtBoardzDetails from "@/components/ArtBoardz/ArtBoardzDetails";
import releaseImg from "@/assets/images/new_release.png";
import { useRouter } from 'next/router'

const DUMMY_DETAILS = {
  Art: "Origin",
  Artist: "SergeOne",
  image: releaseImg,
  location: { city: "Cape Town", country: "South Africa" },
  links: { instagram: "/", twitter: "/", discord: "/" },
  artDesc:
    "Origins pays homage to the genesis of graffiti art originating from the San Bushmen. The bushmen crushed up a red ochre mineral into fine powder. They would then put it in their mouth and spray it over their hands and onto the rock face which would create a hand print. This made them the original graffiti artists. ",

  patrons: {
    title: "Patrons",
    patron: [
      {
        image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
        name: "The Art Guy",
        twitter: "twitter.com",
        country: "China",
        assets: 20
      },
      {
        image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
        name: "Some Guy",
        twitter: "twitter.com",
        country: "USA",
        assets: 18
      },
      {
        image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
        name: "The Random Guy",
        assets: 10
      },
      {
        image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
        name: "Rodrigo Borgues",
        country: "Spain",
        assets: 6
      },
      {
        image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
        name: "Fatima",
        twitter: "twitter.com",
        country: "Argentina",
        assets: 6
      },
      {
        image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
        name: "Michael",
        twitter: "twitter.com",
        country: "Argentina",
        assets: 6
      },
      {
        image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
        name: "David",
        twitter: "twitter.com",
        country: "Argentina",
        assets: 6
      },
      {
        image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
        name: "Lucy",
        twitter: "twitter.com",
        country: "Argentina",
        assets: 6
      }
    ]

  },

  moreDetails: [
    {
      title: "Creator",
      image: releaseImg,
      desc: "SergeOne is an award-winning Cape Town-based graffiti artist and illustrator. He started writing graffiti in 2008, focusing on letter forms and style writing. In 2013 he started focusing on painting animals and nature pieces in public spaces after an epiphany about the powerful connection between humans and nature.Graffiti Art Murals by SergeOne can be seen around the greater Cape Town area and is a welcome and familiar sight to all. The Art Bank knew SergeOne’s art before the artist, and is pleased to work with him.",
    },
    {
      title: "Location",
      desc: "Battery Park Waterfront, Cape Town, South Africa Battery Park is located in the heart of Cape Town and connects the V&A Waterfront to the city through scenic pedestrian routes, canals, and recreational spots.The canal has a biodiverse ecosystem swarming with various fish species and several breeding pairs of Cape Clawless Otters. Access to the area is free and is buzzing with foot traffic from locals and international visitors.",
    },
    {
      title: "Origins Evolution",
      desc: "Digital",
      image: releaseImg,
    },
    {
      desc: "Location",
      image: releaseImg,
    },
    {
      desc: "Artboard",
      image: releaseImg,
    },
  ],
};

const ArtBoardzDetailsPage = () => {
  const router = useRouter()
  const { id } = router.query
  useEffect(() => {
    document.querySelector("#main-layout").scrollTop = 0;
  }, []);

  return (
    <>
      <h1 className="text-2xl md:text-4xl font-medium tracking-wide text-center my-4 text-white font-Montserrat">
        Artboardz {id}
      </h1>
      <ArtBoardzDetails
        image={DUMMY_DETAILS.image}
        art={DUMMY_DETAILS.Art}
        artist={DUMMY_DETAILS.Artist}
        location={DUMMY_DETAILS.location}
        links={DUMMY_DETAILS.links}
        artDesc={DUMMY_DETAILS.artDesc}
        patrons={DUMMY_DETAILS.patrons}
        moreInfo={DUMMY_DETAILS.moreDetails}
      />
    </>
  );
};

export default ArtBoardzDetailsPage;
