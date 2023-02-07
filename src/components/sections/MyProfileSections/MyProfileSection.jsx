import MainProfile from "../../User/MainProfile";
import { DUMMY_RELEASES } from "../NewReleaseSections/NewReleaseSection";
import UserArtboardzList from "../../User/UserArtboardzList";

const DUMMY_USER = {
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvFFG-hAuwWCF1wpo8rDXVEfoFI4_MTg0V8Q&usqp=CAU",
  username: "Edmund E. M ",
  location: { city: "Lagos", country: "Nigeria" },
};

const MyProfileSection = () => {
  return (
    <section className=" text-white font-Montserrat relative">
      <MainProfile
        image={DUMMY_USER.image}
        username={DUMMY_USER.username}
        location={DUMMY_USER.location}
      />
      <div className="p-4">
        <p className="font-Roboto text-lg font-semibold tracking-wide sm:ml-5">
          Owned Artboardz ({DUMMY_RELEASES.length}){" "}
        </p>
      </div>
      <div className="p-4">
        <UserArtboardzList artBoardz={DUMMY_RELEASES} />
      </div>
    </section>
  );
};

export default MyProfileSection;
