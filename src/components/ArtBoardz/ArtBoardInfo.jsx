const ArtBoardzInfo = ({ art, location, artist, listing }) => {
  return (
    <div className=" space-y-3 tracking-wide text-white font-Montserrat">
      <div className="flex gap-1 items-center justify-between">
        <p className="text-lg font-semibold ">{art}</p>
        <p className="text-sm">Listing:3/30</p>
      </div>

      <div className="flex gap-1 items-center justify-between">
        <p className="text-sm"> by {artist}</p>
        <p className="text-sm text-right">{location}</p>
      </div>
    </div>
  );
};

export default ArtBoardzInfo;
