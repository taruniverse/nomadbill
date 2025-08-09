import {
  input,
  inputIcon,
  inputParent,
  line,
} from "@/constant/styles";
import Image from "next/image";
import React from "react";
import Search from "../../public/icons/search.svg";
import Notify from "../../public/icons/notify.svg";
import sampleProfile from "../../public/profileSample.png";

const DashboardHeader = () => {
  return (
    <header className={`${line} my-1 px-10 py-3`}>
      <div className="flex flex-wrap justify-between items-center">
        <div className="search-box w-[24%]">
          <div className={inputParent}>
            <input type="text" className={input} placeholder="Search" />
            <Image
              src={Search}
              alt="Search"
              width={20}
              height={20}
              className={inputIcon}
            />
          </div>
        </div>
        <div className="notify-account-profile flex items-center">
          <Image
            src={Notify}
            alt="Notify"
            width={24}
            height={24}
            className="notify mx-8 after:bg-red-900"
          />
          <div className="account-profile flex items-center">
            <Image
              src={sampleProfile}
              alt="Avatar"
              className="avatar mr-4 border-1 rounded-full border-gray-950 p-1 h-10 w-10"
            />
            <p className="text-sm space-x-1">Tarun Gupta</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
