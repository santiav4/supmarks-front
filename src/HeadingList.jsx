import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import listLogo from "./assets/list-logo.png";

const HeadingList = () => {
    return (
        <div className=" flex justify-between bg-[#0169E8] text-white">
            <a className=" text-black" href="/">
                <IoIosArrowBack size={30} />
            </a>
            <img width={150} src={listLogo} alt="" />
            <select className="text-black outline-none" name="" id="">
                <option className="" value="home" slected>
                    Home Delivery
                </option>
                <option value="pickup">Pick-Up (Recogido)</option>
            </select>
            <div>
                <input
                    className=" outline-none"
                    placeholder="Guayama, Puerto Rico"
                    type="text"
                />
                <button className=" border border-white"> x Locate me</button>
            </div>
            <div>list view</div>
            <div>Search</div>
            <div>Log in</div>
            <div>En </div>
        </div>
    );
};

export default HeadingList;
