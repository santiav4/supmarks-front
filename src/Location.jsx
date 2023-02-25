import React from "react";
import logo from "./assets/logo-hero.png";
import { ImLocation } from "react-icons/im";
import { MdLocationSearching } from "react-icons/md";

const Location = () => {
    return (
        <div className="text-white  h-full flex justify-center items-center">
            <div className=" w-[453px] flex flex-col items-center">
                <img className="mb-10" width={300} src={logo} alt="" />
                <h2 className=" text-3xl mb-8">
                    Lo que quieres, cuando lo quieres.
                </h2>
                <div className=" rounded-sm rounded-tr-3xl rounded-bl-3xl bg-white flex items-center px-2 w-full h-12 mb-6">
                    <ImLocation
                        size={30}
                        className=" mr-8 text-black hover:cursor-pointer "
                    />

                    <input
                        className=" text-black   w-full outline-none "
                        placeholder="Guayama, Puerto Rico"
                        type="text"
                    />
                    <MdLocationSearching
                        size={30}
                        className=" text-black hover:cursor-pointer"
                    />
                </div>
                <button className=" transition-all duration-300 hover:bg-white hover:text-black rounded-sm rounded-tr-3xl rounded-bl-3xl h-14 px-4 bg-[#010050] font-bold text-xl mb-24">
                    Comenzar la Aventura
                </button>
                <h3 className=" text-lg font-semibold opacity-70">
                    Already have an account?{" "}
                    <a className="hover:underline  text-[#2396ff]" href="">
                        Log in
                    </a>
                </h3>
            </div>
        </div>
    );
};

export default Location;
