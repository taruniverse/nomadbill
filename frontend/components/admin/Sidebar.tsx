"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { buttonPrimary, line } from "@/constant/styles";
import Logo from "../../public/logo.png";
import HomeIcon from "../../public/icons/home.svg";
import Invoice from "../../public/icons/invoice.svg";
import Client from "../../public/icons/client.svg";
import RocketImg from "../../public/rocket.png";
import DownArrow from "../../public/icons/downArrow.svg";
import UpArrow from "../../public/icons/uparrow.svg";
import Notes from "../../public/icons/notes.svg";
import Project from "../../public/icons/project.svg";
import Money from "../../public/icons/money.svg";
import Tax from "../../public/icons/tax.svg";

type DropdownKey = "invoices" | "clients";

const Sidebar = () => {
  const [isTabOpen, setTabOpen] = useState<DropdownKey | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const toggleDropdown = (key: DropdownKey) => {
    setTabOpen((prev) => (prev === key ? null : key));
  };

  return (
    <aside className={`border-r-1 ${line} h-[100%] px-8 py-7`}>
      <div className="company-logo">
        <Image src={Logo} alt="" className="h-8 w-auto" />
      </div>
      <div className="mt-10 h-[50%] overflow-scroll mb-2">
        <ul>
          <li
            className={`flex items-center py-3 px-6 rounded-[12px] my-2 hover:cursor-pointer hover:bg-[#F1F0EA] ${
              pathname == "/dashboard/home"
                ? "bg-[#f9f8f0] text-[#000] font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => router.push("home")}
          >
            <Image
              src={HomeIcon}
              alt="Dashboard"
              width={20}
              height={20}
              className="mr-2"
            />
            <span className="m-0 text-sm ">Dashboard</span>
          </li>
          <li
            className={`py-3 px-6 rounded-[12px] my-2 hover:cursor-pointer  transition-colors duration-300 ease-in-out text-gray-500  ${
              !isTabOpen ? "hover:bg-[#F1F0EA] hover:text-[#2a2713]" : ""
            }`}
          >
            <div
              className="flex items-center justify-between"
              onClick={() => toggleDropdown("invoices")}
            >
              <div className="flex flex-wrap">
                <Image
                  src={Invoice}
                  alt="Report"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <span className="m-0 text-sm">Invoices</span>
              </div>
              {isTabOpen == "invoices" ? (
                <Image
                  src={UpArrow}
                  alt="Report"
                  width={14}
                  height={14}
                  className="mr-2"
                />
              ) : (
                <Image
                  src={DownArrow}
                  alt="Report"
                  width={14}
                  height={14}
                  className="mr-2"
                />
              )}
            </div>
            <ul className={`${isTabOpen == "invoices" ? "show" : "hidden"}`}>
              <li
                className={`py-2 px-6 rounded-[12px] mt-4 hover:cursor-pointer transition-colors duration-300 ease-in-out text-sm hover:bg-[#F1F0EA] hover:text-[#2a2713] ${
                  pathname == "/dashboard/invoice"
                    ? "bg-[#f9f8f0] text-[#000] font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => router.push("invoice")}
              >
                All Invoices
              </li>
              <li
                className={`py-2 px-6 rounded-[12px] mt-2 hover:cursor-pointer transition-colors duration-300 ease-in-out text-sm hover:bg-[#F1F0EA] hover:text-[#2a2713] ${
                  pathname == "/dashboard/invoice/create"
                    ? "bg-[#f9f8f0] text-[#000] font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => router.push("invoice")}
              >
                Create Invoice
              </li>
              <li
                className={`py-2 px-6 rounded-[12px] mt-2 hover:cursor-pointer transition-colors duration-300 ease-in-out text-gray-500  text-sm hover:bg-[#F1F0EA] hover:text-[#2a2713]`}
              >
                Invoice Template
              </li>
            </ul>
          </li>
          <li
            className={`py-3 px-6 rounded-[12px] my-2 hover:cursor-pointer  transition-colors duration-300 ease-in-out text-gray-500  ${
              !isTabOpen ? "hover:bg-[#F1F0EA] hover:text-[#2a2713]" : ""
            }`}
          >
            <div
              className="flex items-center justify-between"
              onClick={() => toggleDropdown("clients")}
            >
              <div className="flex flex-wrap">
                <Image
                  src={Client}
                  alt="Client"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <span className="m-0 text-sm">Clients</span>
              </div>
              {isTabOpen == "clients" ? (
                <Image
                  src={UpArrow}
                  alt="Report"
                  width={14}
                  height={14}
                  className="mr-2"
                />
              ) : (
                <Image
                  src={DownArrow}
                  alt="Report"
                  width={14}
                  height={14}
                  className="mr-2"
                />
              )}
            </div>
            <ul className={`${isTabOpen == "clients" ? "show" : "hidden"}`}>
              <li
                className={`py-2 px-6 rounded-[12px] mt-4 hover:cursor-pointer transition-colors duration-300 ease-in-out text-sm hover:bg-[#F1F0EA] hover:text-[#2a2713] ${
                  pathname == "/dashboard/client"
                    ? "bg-[#f9f8f0] text-[#000] font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => router.push("client")}
              >
                All Clients
              </li>
              <li
                className={`py-2 px-6 rounded-[12px] mt-2 hover:cursor-pointer transition-colors duration-300 ease-in-out text-sm hover:bg-[#F1F0EA] hover:text-[#2a2713] ${
                  pathname == "/dashboard/invoice/create"
                    ? "bg-[#f9f8f0] text-[#000] font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => router.push("invoice")}
              >
                Add Client
              </li>
              <li
                className={`py-2 px-6 rounded-[12px] mt-2 hover:cursor-pointer transition-colors duration-300 ease-in-out text-gray-500  text-sm hover:bg-[#F1F0EA] hover:text-[#2a2713]`}
              >
                Contracts / Docs
              </li>
              <li
                className={`py-2 px-6 rounded-[12px] mt-2 hover:cursor-pointer transition-colors duration-300 ease-in-out text-gray-500  text-sm hover:bg-[#F1F0EA] hover:text-[#2a2713]`}
              >
                Payments
              </li>
            </ul>
          </li>
          <li
            className={`flex items-center py-3 px-6 rounded-[12px] my-2 hover:cursor-pointer hover:bg-[#F1F0EA] ${
              pathname == "/dashboard/tax"
                ? "bg-[#f9f8f0] text-[#000] font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => router.push("home")}
          >
            <Image
              src={Project}
              alt="Project"
              width={20}
              height={20}
              className="mr-2"
            />
            <span className="m-0 text-sm ">Projects</span>
          </li>
          <li
            className={`flex items-center py-3 px-6 rounded-[12px] my-2 hover:cursor-pointer hover:bg-[#F1F0EA] ${
              pathname == "/dashboard/tax"
                ? "bg-[#f9f8f0] text-[#000] font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => router.push("home")}
          >
            <Image
              src={Money}
              alt="Money"
              width={20}
              height={20}
              className="mr-2"
            />
            <span className="m-0 text-sm ">Expenses</span>
          </li>
          <li
            className={`flex items-center py-3 px-6 rounded-[12px] my-2 hover:cursor-pointer hover:bg-[#F1F0EA] ${
              pathname == "/dashboard/notes"
                ? "bg-[#f9f8f0] text-[#000] font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => router.push("home")}
          >
            <Image
              src={Notes}
              alt="Notes"
              width={20}
              height={20}
              className="mr-2"
            />
            <span className="m-0 text-sm ">Notes</span>
          </li>
          <li
            className={`flex items-center py-3 px-6 rounded-[12px] my-2 hover:cursor-pointer hover:bg-[#F1F0EA] ${
              pathname == "/dashboard/tax"
                ? "bg-[#f9f8f0] text-[#000] font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => router.push("home")}
          >
            <Image
              src={Tax}
              alt="Tax"
              width={20}
              height={20}
              className="mr-2"
            />
            <span className="m-0 text-sm ">Tax Summary</span>
          </li>
        </ul>
      </div>
      <div className="bg-[#F1F0EA] min-h-[34%] h-auto max-h-[40%] rounded-[12px] py-8 px-4 text-center w-[100%]">
        <Image
          src={RocketImg}
          alt="Premium Feature"
          className="w-[60%] m-auto"
        />
        <p className="text-[#333] mt-2">Get Premium features</p>
        <p className="text-gray-400 mt-2 text-sm">
          Get Premium for access all features in there.
        </p>
        <button className={`${buttonPrimary} mt-2`}>Get Premium now</button>
      </div>
    </aside>
  );
};

export default Sidebar;
