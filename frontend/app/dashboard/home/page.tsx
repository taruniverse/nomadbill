"use client";
import React, { useState } from "react";
import Bell from "../../../public/bell.png";
import { MyChartDoughnut, MyChartLine } from "@/components/admin/chat";
import feedback from "../../../public/icons/avg.svg";
import cart from "../../../public/icons/cart.svg";
import Visit from "../../../public/icons/perVisit.svg";
import Users from "../../../public/icons/users.svg";
import Button from "@/components/admin/Button";
import Bulb from "../../../public/idea.png";
import WhiteCreate from "../../../public/icons/whiteCreate.svg";
import WhiteClient from "../../../public/icons/whiteClient.svg";
import Expense from "../../../public/icons/expense.svg";
import Sign from "../../../public/icons/sign.svg";
import Close from "../../../public/icons/close.svg";
import {
  buttonPrimary,
  secondaryPrimary,
  subHeadColorText,
} from "@/constant/styles";
import Image from "next/image";

const Home = () => {
  const [isActiveQuickSetting, setActiveQuickSetting] = useState(false);

  const openQuickSetting = () => {
    if (isActiveQuickSetting) setActiveQuickSetting(false);
    if (!isActiveQuickSetting) setActiveQuickSetting(true);
  };

  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        data: [65, 65, 80, 81, 56, 55, 40],
        borderColor: "#F1F0EA",
        backgroundColor:
          "linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%);",
        tension: 0.6,
      },
    ],
  };

  const expenseType = {
    labels: ["Food", "Rent", "Transportation", "Utilities", "Entertainment"],
    datasets: [
      {
        label: "Expense Breakdown",
        data: [300, 1200, 150, 200, 100], // Amounts for each category
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
        tension: 0.6,
      },
    ],
  };

  const salesData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const CirclechartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Expense Breakdown by Category",
      },
    },
  };

  const LinechartOptions = {
    responsive: true,
    legend: {
      display: false,
    },
    scales: {
      x: {
        grid: {
          display: true,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        // tension: 0.8,
      },
    },
  };

  const BarchartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Monthly Sales Data",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      {" "}
      <div className="relative quick-action">
        <div className="fixed right-10 bottom-10 text-right">
          <ul
            className={`text-right flex flex-col items-end transition-all duration-1000 ease-in-out transform ${
              isActiveQuickSetting
                ? "translate-y-0 opacity-100"
                : "translate-y-100 opacity-0"
            }`}
          >
            <li className="w-max">
              <div
                className={`${buttonPrimary} !rounded-full text-center flex flex-wrap items-center !w-auto px-4`}
              >
                <Image
                  src={WhiteCreate}
                  alt="Create"
                  width={20}
                  height={20}
                  className="mr-2 text-white"
                />
                Create Invoice
              </div>
            </li>
            <li className="w-max mt-2">
              <div
                className={`${buttonPrimary} !bg-[#ffea94] border-1 border-gray-300 !rounded-full text-center flex flex-wrap items-center !w-auto px-4 hover:!bg-[#FDD52E] !text-gray-900`}
              >
                <Image
                  src={Sign}
                  alt="Create"
                  width={20}
                  height={20}
                  className="mr-2 text-gray-900"
                />
                Sign Contract
              </div>
            </li>
            <li className="w-max mt-2">
              <div
                className={`${buttonPrimary} !bg-white border-1 border-gray-300 !rounded-full text-center flex flex-wrap items-center !w-auto px-4 hover:!bg-gray-300 !text-gray-900`}
              >
                <Image
                  src={Expense}
                  alt="Create"
                  width={20}
                  height={20}
                  className="mr-2 text-gray-900"
                />
                Add Expense
              </div>
            </li>
            <li className="w-max my-2">
              <div
                className={`${buttonPrimary} !bg-red-400 !rounded-full text-center flex flex-wrap items-center !w-auto px-4 hover:!bg-red-600`}
              >
                <Image
                  src={WhiteClient}
                  alt="Create"
                  width={20}
                  height={20}
                  className="mr-2 text-white"
                />
                Add Client
              </div>
            </li>
          </ul>
          <Button
            text="Quick Action"
            style={`${buttonPrimary} flex items-center px-4 py-3 transition-all duration-300 ease-in-out transform ${
              isActiveQuickSetting
                ? "opacity-0 translate-x-full hidden"
                : "opacity-100 translate-x-0"
            }`}
            onClick={openQuickSetting}
          >
            <Image src={Bulb} alt="" width={18} height={18} className="ml-2" />
          </Button>

          <Button
            text=""
            style={`${buttonPrimary} flex items-center p-4 !w-auto transition-all duration-300 ease-in-out transform ${
              isActiveQuickSetting
                ? "opacity-100 translate-x-0 inline"
                : "opacity-0 translate-x-full hidden"
            } !bg-white border-1 border-gray-200 rounded-full w-auto h-auto`}
            onClick={openQuickSetting}
          >
            <Image src={Close} alt="" width={18} height={18} />
          </Button>
        </div>
      </div>
      <div className="flex justify-between flex-wrap flex-row premium-offer">
        <div className="w-[58%] bg-[#F1F0EA] rounded-[12px] px-8 py-6 relative">
          <Image src={Bell} alt="BEll" className="w-70 absolute right-10" />
          <div className="w-[46%] relative">
            <h5 className="font-semibold text-gray-900 text-2xl leading-snug spacing tracking-wide">
              Upgrade to Premium for Unlimited Access!
            </h5>
            <p className={`${subHeadColorText} mt-4 text-sm`}>
              Offer continues maintaince, support, update and features addition!
            </p>
            <Button
              text="Upgrade Now"
              style={`${secondaryPrimary} !w-50 mt-8`}
            />
          </div>
        </div>
        <div
          className={`border border-gray-300 w-[38%] rounded-[12px] p-4 tracking-wide`}
        >
          <div className="headings w-60">
            <h5 className="text-lg font-semibold">Frequent Actions</h5>
            <p className={`${subHeadColorText} text-sm mt-2`}>
              Contact us by chat or telephone number.
            </p>
          </div>
          <div className="row mt-4">
            <div className="w-full bg-[#F1F6FF] h-14 rounded-[8px] my-2"></div>
            <div className="w-full bg-[#F9F1FF] h-14 rounded-[8px] my-2"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-10 reports-cards justify-center statistic">
        <div className="w-[18.84%] border-1 border-gray-300 rounded-[12px] py-6 p-4 mr-2">
          <p className={`${subHeadColorText} text-sm`}>Earnings Summary</p>
          <h6 className="text-2xl text-gray-900 font-semibold my-1">7.2k</h6>
          <p className="text-green-600 text-xs">+15%</p>
        </div>
        <div className="w-[18.84%] border-1 border-gray-300 rounded-[12px] py-6 p-4 mx-2">
          <p className={`${subHeadColorText} text-sm`}>Invoice Snapshot</p>
          <h6 className="text-2xl text-gray-900 font-semibold my-1">7.2k</h6>
          <p className="text-green-600 text-xs">+15%</p>
        </div>
        <div className="w-[18.84%] border-1 border-gray-300 rounded-[12px] py-6 p-4 mx-2">
          <p className={`${subHeadColorText} text-sm`}>
            Clients/Projects Activity
          </p>
          <h6 className="text-2xl text-gray-900 font-semibold my-1">7.2k</h6>
          <p className="text-red-600 text-xs">-15%</p>
        </div>
        <div className="w-[18.84%] border-1 border-gray-300 rounded-[12px] py-6 p-4 mx-2">
          <p className={`${subHeadColorText} text-sm`}>Bills Generated</p>
          <h6 className="text-2xl text-gray-900 font-semibold my-1">7.2k</h6>
          <p className="text-green-600 text-xs">+15%</p>
        </div>
        <div className="w-[18.84%] border-1 border-gray-300 rounded-[12px] py-6 p-4 ml-2">
          <p className={`${subHeadColorText} text-sm`}>Bills Generated</p>
          <h6 className="text-2xl text-gray-900 font-semibold my-1">7.2k</h6>
          <p className="text-green-600 text-xs">+15%</p>
        </div>
      </div>
      <div className="flex flex-wrap mt-4 stats-cards justify-between user-stats-charts">
        <div className="w-[32%] border-1 border-gray-300 rounded-[12px] py-6 p-4">
          <p className={`tracking-wide font-semibold`}>Monthly Earnings</p>
          <div className="mt-8">
            <MyChartLine data={chartData} options={LinechartOptions} />
          </div>
          <div className="customers-list mt-4">
            <ul>
              <li className="flex flex-wrap justify-between items-center my-4">
                <div className="flex flex-wrap items-center">
                  <div className="bg-[#F1F0EA] w-8 h-8 rounded-full text-center">
                    <Image src={Users} alt="" className="h-4/4 m-auto" />
                  </div>
                  <p className="ml-4 text-sm font-semibold tracking-wide">
                    Total Customers
                  </p>
                </div>
                <p className={`${subHeadColorText} text-sm`}>45%</p>
              </li>
              <li className="flex flex-wrap justify-between items-center my-4">
                <div className="flex flex-wrap items-center">
                  <div className="bg-[#F1F0EA] w-8 h-8 rounded-full text-center">
                    <Image src={Users} alt="" className="h-4/4 m-auto" />
                  </div>
                  <p className="ml-4 text-sm font-semibold tracking-wide">
                    Returnings Customers
                  </p>
                </div>
                <p className={`${subHeadColorText} text-sm`}>45%</p>
              </li>
              <li className="flex flex-wrap justify-between items-center my-4">
                <div className="flex flex-wrap items-center">
                  <div className="bg-[#F1F0EA] w-8 h-8 rounded-full text-center">
                    <Image src={Visit} alt="" className="h-4/4 m-auto" />
                  </div>
                  <p className="ml-4 text-sm font-semibold tracking-wide">
                    Avg. Visit Customers
                  </p>
                </div>
                <p className={`${subHeadColorText} text-sm`}>45%</p>
              </li>
              <li className="flex flex-wrap justify-between items-center my-4">
                <div className="flex flex-wrap items-center">
                  <div className="bg-[#F1F0EA] w-8 h-8 rounded-full text-center">
                    <Image src={feedback} alt="" className="h-4/4 m-auto" />
                  </div>
                  <p className="ml-4 text-sm font-semibold tracking-wide">
                    Avg. spent Per Visit
                  </p>
                </div>
                <p className={`${subHeadColorText} text-sm`}>45%</p>
              </li>
              <li className="flex flex-wrap justify-between items-center mt-4">
                <div className="flex flex-wrap items-center">
                  <div className="bg-[#F1F0EA] w-8 h-8 rounded-full text-center">
                    <Image src={cart} alt="" className="h-4/4 m-auto" />
                  </div>
                  <p className="ml-4 text-sm font-semibold tracking-wide">
                    Feedback
                  </p>
                </div>
                <p className={`${subHeadColorText} text-sm`}>45%</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[32%] border-1 border-gray-300 rounded-[12px] py-6 p-4">
          <p className={`tracking-wide font-semibold`}>Growth</p>
          <div className="mt-8">
            <MyChartDoughnut data={expenseType} options={CirclechartOptions} />
          </div>
          <div className="customers-list mt-4"></div>
        </div>
        <div className="w-[32%] border-1 border-gray-300 rounded-[12px] py-6 p-4">
          <p className={`tracking-wide font-semibold`}>
            Total Earned this Year
          </p>
          <div className="mt-8">
            <MyChartLine data={salesData} options={BarchartOptions} />
          </div>
          <div className="customers-list mt-4">
            <ul>
              <li className="flex flex-wrap justify-between items-center my-4">
                <div className="flex flex-wrap items-center">
                  <div className="bg-[#F1F0EA] w-8 h-8 rounded-full text-center">
                    <Image src={Users} alt="" className="h-4/4 m-auto" />
                  </div>
                  <p className="ml-4 text-sm font-semibold tracking-wide">
                    Total Customers
                  </p>
                </div>
                <p className={`${subHeadColorText} text-sm`}>45%</p>
              </li>
              <li className="flex flex-wrap justify-between items-center my-4">
                <div className="flex flex-wrap items-center">
                  <div className="bg-[#F1F0EA] w-8 h-8 rounded-full text-center">
                    <Image src={Users} alt="" className="h-4/4 m-auto" />
                  </div>
                  <p className="ml-4 text-sm font-semibold tracking-wide">
                    Returnings Customers
                  </p>
                </div>
                <p className={`${subHeadColorText} text-sm`}>45%</p>
              </li>
              <li className="flex flex-wrap justify-between items-center my-4">
                <div className="flex flex-wrap items-center">
                  <div className="bg-[#F1F0EA] w-8 h-8 rounded-full text-center">
                    <Image src={Visit} alt="" className="h-4/4 m-auto" />
                  </div>
                  <p className="ml-4 text-sm font-semibold tracking-wide">
                    Avg. Visit Customers
                  </p>
                </div>
                <p className={`${subHeadColorText} text-sm`}>45%</p>
              </li>
              <li className="flex flex-wrap justify-between items-center my-4">
                <div className="flex flex-wrap items-center">
                  <div className="bg-[#F1F0EA] w-8 h-8 rounded-full text-center">
                    <Image src={feedback} alt="" className="h-4/4 m-auto" />
                  </div>
                  <p className="ml-4 text-sm font-semibold tracking-wide">
                    Avg. spent Per Visit
                  </p>
                </div>
                <p className={`${subHeadColorText} text-sm`}>45%</p>
              </li>
              <li className="flex flex-wrap justify-between items-center mt-4">
                <div className="flex flex-wrap items-center">
                  <div className="bg-[#F1F0EA] w-8 h-8 rounded-full text-center">
                    <Image src={cart} alt="" className="h-4/4 m-auto" />
                  </div>
                  <p className="ml-4 text-sm font-semibold tracking-wide">
                    Feedback
                  </p>
                </div>
                <p className={`${subHeadColorText} text-sm`}>45%</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-4 stats-cards justify-between data-table">
        <div className="w-full border-1 border-gray-300 rounded-[12px]">
          <div className="py-6 p-4 flex flex-wrap justify-between">
            <p className={`tracking-wide font-semibold`}>Payment Types</p>
            <div className="flex flex-wrap">
              <div className="border-1 p-1 rounded-sm border-gray-300 mr-1">
                <p className={`tracking-wide text-sm text-gray-500`}>
                  150 Items
                </p>
              </div>
              <div className="border-1 p-1 rounded-sm border-gray-300 ml-1 hover:cursor-pointer">
                <p className={`tracking-wide text-sm text-gray-500`}>
                  Show All
                </p>
              </div>
            </div>
          </div>

          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                  Product
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                  Quantity
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                  Avg.Sale
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                  Client Name
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  450
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  1
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  20
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  20/08/2025
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  Sold
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                  <button
                    type="button"
                    className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-hidden focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
