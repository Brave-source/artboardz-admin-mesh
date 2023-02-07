import { useState } from "react";
import MinusIcon from "@/assets/icons/MinusIcon";
import PlusIcon from "@/assets/icons/PlusIcon";
import { DetailsCard } from "./DetailsCard";
import NewReleaseImage from "./NewReleaseImage";
import NewReleaseInfo from "./NewReleaseInfo";

function ItemPurchaseActions(props) {
  return (
    <div className="grid grid-cols-2 gap-2 md:w-10/12 md:mx-auto">
      <div className="border rounded-lg border-light-purple flex justify-between p-2">
        <p>Quantity:</p>
        <button onClick={props.decrementQuantityHandler}>
          <MinusIcon />
        </button>
        <p>{props.quantity}</p>
        <button onClick={props.incrementQuantityHandler}>
          <PlusIcon />
        </button>
      </div>
      <button className="bg-active-link rounded-lg font-semibold">Buy</button>
    </div>
  );
}

const NewReleaseDetails = ({
  image,
  art,
  location,
  artist,
  links,
  artDesc,
  moreInfo,
}) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantityHandler = () => {
    setQuantity((oldState) => oldState + 1);
  };
  const decrementQuantityHandler = () => {
    setQuantity((oldState) => (oldState > 1 ? oldState - 1 : 1));
  };
  return (
    <section className="p-4 text-white font-Montserrat">
      <div className="border-b-2 border-light-purple pb-6">
        <NewReleaseImage image={image} />
        <div className="max-w-md mx-auto">
          <div className="grid grid-cols-3 gap-2 my-4 items-center justify-center text-base sm:text-xl tracking-wide">
            <div className=" p-2 border rounded-lg border-light-purple text-center">
              <p>Price</p>
              <p className="font-semibold">100</p>
            </div>
            <div className="p-2 border rounded-lg border-light-purple text-center">
              <p>Items</p>
              <p className="font-semibold">40</p>
            </div>
            <div className="p-2  border rounded-lg border-light-purple text-center">
              <p>Royalty</p>
              <p className="font-semibold">5%</p>
            </div>
          </div>
          <ItemPurchaseActions
            quantity={quantity}
            incrementQuantityHandler={incrementQuantityHandler}
            decrementQuantityHandler={decrementQuantityHandler}
          />
        </div>
      </div>
      <div className="border-b-2 border-light-purple py-6">
        <NewReleaseInfo
          art={art}
          location={location}
          artist={artist}
          links={links}
          artDesc={artDesc}
        />
      </div>
      {moreInfo.map((info, index) => {
        return (
          <div key={index} className="border-b-2 border-light-purple py-6 last-of-type:border-none">
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

export default NewReleaseDetails;
