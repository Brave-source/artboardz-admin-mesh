import NewReleaseItem from "./NewReleaseItem";

const NewReleaseList = ({ releases }) => {
  return (
    <ul className="flex flex-col gap-8">
      {releases.map((release) => {
        return (
          <NewReleaseItem
            key={release.id}
            id={release.id}
            image={release.image}
            art={release.source}
            location={release.location}
            artist={release.author}
            links={release.links}
          />
        );
      })}
    </ul>
  );
};

export default NewReleaseList;
