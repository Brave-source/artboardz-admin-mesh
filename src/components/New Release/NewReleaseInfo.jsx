import DiscordIcon from "@/assets/icons/DiscordIcon";
import InstagramIconsOutline from "@/assets/icons/InstagramIconsOutline";
import TwitterIconsOutline from "@/assets/icons/TwitterIconsOutline";

const NewReleaseInfo = ({ art, location, artist, links, artDesc }) => {
  return (
    <div className=" space-y-3 tracking-wide">
      <div className="flex gap-1 items-center justify-between">
        <p className="text-lg font-semibold ">{art}</p>
        <p className="text-sm">{`${location.city},${location.country}`}</p>
      </div>

      <div className="flex gap-1 items-center justify-between">
        <p className="text-sm"> by {artist}</p>
        <div className="flex gap-2 items-center">
          <a href={links.instagram ? links.twitter : "/"}>
            <TwitterIconsOutline className="w-5" />
          </a>
          <a href={links.instagram ? links.instagram : "/"}>
            <InstagramIconsOutline className="w-5" />
          </a>
          <a href={links.instagram ? links.discord : "/"}>
            <DiscordIcon className="w-5" />
          </a>
        </div>
      </div>
      <p className="text-base">{artDesc}</p>
    </div>
  );
};

export default NewReleaseInfo;
