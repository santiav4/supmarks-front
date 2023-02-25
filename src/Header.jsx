import React from "react";
import { BsCaretDownFill } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

const Header = () => {
    return (
        <div className="text-white text-lg absolute right-12 top-4 flex">
            <button className=" rounded-sm rounded-tr-xl rounded-bl-xl mr-4 px-3 py-[2px] bg-[#010050] flex items-center">
                <BiUser className=" mr-2" />
                Login
            </button>
            <button className=" rounded-sm rounded-tr-xl rounded-bl-xl flex px-4 items-baseline bg-[#010050]">
                En <BsCaretDownFill className="ml-2" size={10} />
            </button>
        </div>
    );
};

export default Header;
