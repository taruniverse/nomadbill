import { input, inputParent, requiredField } from "@/constant/styles";
import React from "react";

const create = () => {
  return (
    <div>
      <h4 className="text-gray-900 text-2xl font-semibold tracking-wide my-4">
        New Client
      </h4>
      <div className="border border-gray-300 rounded-xl px-4 py-6">
        <h5 className="text-gray-900 text-lg font-semibold">Basic Info</h5>
        <form className="form">
          <div className="flex flex-wrap w-full">
            <div className={`${inputParent} w-1/2 pr-4`}>
              <label
                className={`label text-sm text-gray-600 ${requiredField}`}
                htmlFor="clientName"
              >
                Client Name
              </label>
              <input
                type="text"
                className={`${input} mt-1 !pl-2`}
                placeholder="American Express"
              />
            </div>
            <div className={`${inputParent} w-1/2 pl-4`}>
              <label
                className={`label text-sm text-gray-600`}
                htmlFor="companyName"
              >
                Company Name
              </label>
              <input
                type="text"
                className={`${input} mt-1 !pl-2`}
                placeholder="American Express"
              />
            </div>
            <div className={`${inputParent} w-1/3 pr-4`}>
              <label
                className={`label text-sm text-gray-600 ${requiredField}`}
                htmlFor="emailAddress"
              >
                Email Address
              </label>
              <input
                type="email"
                className={`${input} mt-1 !pl-2`}
                placeholder="email@domain.com"
              />
            </div>
            <div className={`${inputParent} w-1/3 px-4`}>
              <label
                className={`label text-sm text-gray-600 ${requiredField}`}
                htmlFor="phoneNumber"
              >
                Email Address
              </label>
              <input
                type="text"
                className={`${input} mt-1 !pl-2`}
                placeholder="(+91) 8120239387"
              />
            </div>
            <div className={`${inputParent} w-1/3 pl-4`}>
              <label
                className={`label text-sm text-gray-600`}
                htmlFor="phoneNumber"
              >
                Preferred Language
              </label>
              {/* <div className="countryFlag">sd</div> */}
              <input
                type="text"
                className={`${input} mt-1 !pl-2`}
                placeholder="(+91) 8120239387"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default create;
