import { DetailsCard } from "../New Release/DetailsCard";
import NewReleaseImage from "../New Release/NewReleaseImage";
import NewReleaseInfo from "../New Release/NewReleaseInfo";
import { PatronsCard } from "../New Release/PatronsCard";
import useCollapse from 'react-collapsed'

const ArtBoardzDetails = ({
  image,
  art,
  location,
  artist,
  links,
  artDesc,
  patrons,
  moreInfo,
}) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <section className="p-4 text-white font-Montserrat">
      <div className="py-6">
        <NewReleaseImage image={image} />
        <div className="max-w-md mx-auto">
          <div className="grid grid-cols-3 gap-2 my-4 items-center justify-center text-base sm:text-xl tracking-wide">
            <div className=" p-2 border rounded-lg border-light-purple text-center">
              <p>Floor</p>
              <p className="font-semibold">100</p>
            </div>
            <div className="p-2 border rounded-lg border-light-purple text-center">
              <p>Listings</p>
              <p className="font-semibold">5/40</p>
            </div>
            <div className="p-2  border rounded-lg border-light-purple text-center">
              <p>Royalty</p>
              <p className="font-semibold">5%</p>
            </div>
          </div>
          <button className="bg-active-link rounded-md p-2 font-semibold w-full sm:w-1/3 mx-auto block tracking-wide text-base my-4">
            Jpgstore
          </button>
        </div>
      </div>

      <div className="py-6">
        <NewReleaseInfo
          art={art}
          location={location}
          artist={artist}
          links={links}
          artDesc={artDesc}
        />
      </div>
      {/* Patrons */}
      {patrons.title && (
        <h2 className="text-2xl md:text-3xl font-medium pb-3">{patrons.title}</h2>
      )}
      <div className="py-4" style={{ backgroundColor: '#011335' }}>
        <div className="md:flex justify-between">
          {patrons.patron.slice(0, 4).map((info, index) => {
            let first = (index + 4) % 4 === 0;
            return(
                <div className={`xs:w-full md:w-1/4 my-2 ${first ? '' : 'xs:border-b md:border-l border-purple-800'}`} key={index}>
                  <PatronsCard 
                    image={info.image}
                    name={info.name}
                    twitter={info.twitter}
                    country={info.country}
                    assets={info.assets}
                  />
                </div>
            );
          })}
        </div>
        <div className="md:flex justify-between" {...getCollapseProps()}>
          {patrons.patron.slice(4).map((info, index) => {
            let first = (index + 4) % 4 === 0;
            return(
                <div className={`xs:w-full md:w-1/4 my-2 ${first ? '' : 'xs:border-b md:border-l border-purple-800'}`} key={index}>
                  <PatronsCard 
                    image={info.image}
                    name={info.name}
                    twitter={info.twitter}
                    country={info.country}
                    assets={info.assets}
                  />
                </div>
            );
          })}
        </div>
        <p className="text-center" {...getToggleProps()}>
            {isExpanded ? 'Collapse' : 'Expand'}
        </p>
      </div>

      {moreInfo.map((info, index) => {
        return (
          <div key={index} className="py-6">
            <DetailsCard
              image={info.image}
              title={info.title}
              desc={info.desc}
            />
          </div>
        );
      })}
    </section>
  );
};

export default ArtBoardzDetails;
