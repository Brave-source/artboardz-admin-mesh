import LeaderboardItem from "./LeaderBoardItem";
import photo from "@/assets/images/ProfilePhoto.png";

const DUMMY_LEADERS = [
  {
    image: photo,
    name: "Edmund scnmc cdjkfv cvnjkdx bkdscjk ",
    amount: 20,
  },
  {
    image: photo,
    name: "Edmund Moses",
    amount: 20,
  },
  {
    image: photo,
    name: "Edmund",
    amount: 20,
  },
  {
    image: photo,
    name: "Edmund",
    amount: 20,
  },
  {
    image: photo,
    name: "Edmund",
    amount: 20,
  },
  {
    image: photo,
    name: "Edmund",
    amount: 20,
  },
];

const LeaderBoardList = () => {
  return (
    <ul className="bg-primary-color p-4 grid gap-3 rounded-lg">
      {DUMMY_LEADERS.map((leader, index) => {
        return (
          <div
            key={index}
            className="border-b border-white last-of-type:border-none"
          >
            <LeaderboardItem
              position={index + 1}
              image={leader.image}
              name={leader.name}
              amount={leader.amount}
            />
          </div>
        );
      })}
    </ul>
  );
};

export default LeaderBoardList;
