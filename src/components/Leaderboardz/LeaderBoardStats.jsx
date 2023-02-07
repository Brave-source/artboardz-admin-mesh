const LeaderBoardStats = () => {
  return (
    <div className="text-white font-Montserrat tracking-wide">
      <p className="text-xl text-center">Statistics</p>
      <div className="max-w-md mx-auto">
        <div className="grid grid-cols-3 gap-2 my-4 items-center justify-center text-base sm:text-xl">
          <div className=" p-2 border rounded-lg border-light-purple text-center">
            <p>Collections</p>
            <p className="font-semibold">5</p>
          </div>
          <div className="p-2 border rounded-lg border-light-purple text-center">
            <p>NFTs</p>
            <p className="font-semibold">200</p>
          </div>
          <div className="p-2  border rounded-lg border-light-purple text-center">
            <p>Owners</p>
            <p className="font-semibold">63</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardStats;
