import NewReleaseImage from "./NewReleaseImage";

export const DetailsCard = ({ image, title, desc }) => {
  return (
    <div>
      {title && (
        <h2 className="text-2xl md:text-3xl font-medium pb-3">{title}</h2>
      )}
      {desc && <p className="text-base md:text-xl">{desc}</p>}
      {image && (
        <div className="mt-6">
          <NewReleaseImage image={image} />
        </div>
      )}
    </div>
  );
};
