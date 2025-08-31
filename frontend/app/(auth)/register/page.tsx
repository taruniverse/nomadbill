import Image from "next/image";
import React from "react";
import Google from "../../../public/google.webp";
import Apple from "../../../public/apple.webp";
import Email from "../../../public/icons/email.svg";
import Password from "../../../public/icons/password.svg";
import LoginImg from "../../../public/login.png";
import {
  buttonPrimary,
  input,
  inputIcon,
  inputParent,
  line,
} from "@/constant/styles";
const Register = () => {
  return (
    <div className="font-sans lg:flex items-center justify-center min-h-screen gap-16 h-[100vh] md:p-4">
      <div className="h-[100%] lg:w-[40%] bg-[#F1F0EB] rounded-xl sm:hidden md:hidden lg:block relative">
        <Image
          src={LoginImg}
          alt=""
          className="w-[98%] h-auto absolute left-8 top-0 bottom-0 my-auto"
        />
      </div>
      <div className="container min-w-[60%] h-[100%] md:w-[100%] lg:w-[60%] relative md:px-40 lg:px-40">
        <div className="absolute right-0 p-4">
          <p className="text-[0.9rem]">
            <span className="text-gray-500">Dont have an account?</span>{" "}
            <span className="font-bold hover:cursor-pointer">Sign Up</span>
          </p>
        </div>
        <div className="h-[100%] w-[100%] grid grid-cols-1 justify-start items-center">
          <div className="w-[100%]">
            <h3 className="text-4xl font-bold mb-6">Sign in</h3>
            <p className="text-sm">Sign in with open accounts!</p>
            <div className="mt-3">
              <div className="w-[100%] flex">
                <div className="border-2 border-gray-100 h-[42px] px-10 py-1.5 rounded-[10px] text-center flex items-center justify-center mr-2 hover:bg-[#F5F5F5] hover:border-[#F5F5F5] cursor-pointer transition-colors duration-300 ease-in-out">
                  <Image src={Google} alt="Google" width={20} height={20} />
                  <p className="text-sm font-semibold ml-2">Google</p>
                </div>
                <div className="border-2 border-gray-100 h-[42px] px-10 py-1.5 rounded-[10px] text-center flex items-center justify-center ml-2 hover:bg-[#F5F5F5] hover:border-[#F5F5F5] cursor-pointer transition-colors duration-300 ease-in-out">
                  <Image src={Apple} alt="Google" width={30} height={30} />
                  <p className="text-sm font-semibold ml-2">Apple</p>
                </div>
              </div>
            </div>
            <hr className={`${line} my-6 `} />
            <div className="w-[100%]">
              <p className="text-sm mb-4">Or continue with email address</p>
              <form>
                <div className={inputParent}>
                  <input
                    type="email"
                    className={input}
                    placeholder="email@gmail.com"
                  />
                  <Image
                    src={Email}
                    alt="Email"
                    width={20}
                    height={20}
                    className={inputIcon}
                  />
                </div>
                <div className={inputParent}>
                  <input
                    type="password"
                    className={input}
                    placeholder="*******"
                  />
                  <Image
                    src={Password}
                    alt="Password"
                    width={20}
                    height={20}
                    className={inputIcon}
                  />
                </div>
                <button className={`${buttonPrimary} mt-5 `}>Sign In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
