import UserArtBoardItem from "./UserArtBoardItem";

const UserArtboardzList = ({ artBoardz }) => {
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-2">
      {artBoardz.map((artBorder) => {
        return (
          <UserArtBoardItem
            key={artBorder.id}
            id={artBorder.id}
            image={artBorder.image}
            art={artBorder.source}
            location={artBorder.location}
            artist={artBorder.author}
            links={artBorder.links}
          />
        );
      })}
    </ul>
  );
};

export default UserArtboardzList;
