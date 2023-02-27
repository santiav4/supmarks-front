import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineMyLocation } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { GoSearch } from "react-icons/go";
import { BiUser } from "react-icons/bi";
import { BsCaretDownFill } from "react-icons/bs";

import listLogo from "./assets/list-logo.png";

const HeadingList = ({ page, setPage }) => {
    return (
        <div className=" hover:cursor-pointer z-10 sticky top-0 px-8 h-16 flex justify-between items-center bg-[#0169E8] text-white">
            <IoIosArrowBack
                onClick={() => setPage("main")}
                className=" text-black"
                size={30}
            />

            <img width={100} src={listLogo} alt="" />
            <select
                className="  rounded-sm rounded-tr-3xl rounded-bl-3xl px-4 h-10 text-black outline-none"
                name=""
                id="">
                <option value="home" slected>
                    Home Delivery
                </option>
                <option value="pickup">Pick-Up (Recogido)</option>
            </select>
            <div className="min-w-[540px]">
                <input
                    className=" placeholder: pl-4  rounded-bl-3xl w-[400px] h-10 outline-none"
                    placeholder="Guayama, Puerto Rico"
                    type="text"
                />
                <button className="  rounded-tr-3xl  h-10 px-4 border border-white">
                    <MdOutlineMyLocation size={20} className=" inline mr-2" />{" "}
                    Locate me
                </button>
            </div>
            <div className=" hover:text-[#549ad6] hover:cursor-pointer px-4">
                <ImLocation size={22} className=" inline" /> list view
            </div>
            <div className=" hover:text-[#549ad6] hover:cursor-pointer px-4">
                {" "}
                <GoSearch size={22} className=" inline " /> Search
            </div>
            <div className=" hover:text-[#549ad6] hover:cursor-pointer px-4">
                {" "}
                <BiUser size={22} className=" inline " /> Log in
            </div>
            <div className=" hover:text-[#549ad6] hover:cursor-pointer ">
                En <BsCaretDownFill size={12} className="  inline" />
            </div>
        </div>
    );
};

export default HeadingList;
