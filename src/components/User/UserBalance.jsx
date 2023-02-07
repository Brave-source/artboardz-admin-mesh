import { ChevronDownIcon } from "@heroicons/react/24/solid";
import nIcon from "@/assets/icons/namimIcon.png";
import Image from 'next/image'

const UserBalance = ({ CreditBalance }) => {
  return (
    <div className="h-10 flex">
      <div className="bg-white flex gap-x-2 h-full rounded-md sm:rounded-tr-none sm:rounded-br-none w-fit px-1 items-center">
        <Image src={nIcon} alt="" />
        <span aria-hidden>
          <ChevronDownIcon className="w-4" />
        </span>
      </div>
      <div className="hidden sm:flex bg-light-purple items-center px-6 rounded-br-md rounded-tr-md">
        <p className="text-white font-Roboto text-sm tracking-wide">
          {CreditBalance}
        </p>
      </div>
    </div>
  );
};

export default UserBalance;
