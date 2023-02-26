import React from "react";

const Category = ({ text, img }) => {
    return (
        <div className=" hover:cursor-pointer">
            <div
                style={{ backgroundImage: `url(${img})` }}
                className=" bg-cover h-[90px] w-[90px] mx-1 mb-6 "></div>
            {/* <img className="     bg-blue-300 mb-4" src={img} alt="" /> */}
            <p className=" text-center text-sm">{text}</p>
        </div>
    );
};

export default Category;
