import { useEffect } from "react";
import MyProfileSection from "@/components/sections/MyProfileSections/MyProfileSection";

const MyProfilePage = () => {
  useEffect(() => {
    document.querySelector("#main-layout").scrollTop = 0;
  }, []);
  return (
    <>
      <h1 className="text-2xl md:text-4xl font-medium tracking-wide text-center my-4 text-white font-Montserrat">
        My Profile
      </h1>
      <MyProfileSection />
    </>
  );
};

export default MyProfilePage;
