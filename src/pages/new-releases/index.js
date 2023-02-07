import NewReleaseSection from "@/components/sections/NewReleaseSections/NewReleaseSection";
import { useEffect } from "react";

const NewRelease = () => {
  useEffect(() => {
    document.querySelector("#main-layout").scrollTop = 0;
  }, []);
  return (
    <>
      <NewReleaseSection />
    </>
  );
};

export default NewRelease;
