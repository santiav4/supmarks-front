import React from "react";

const Category = ({ text, img }) => {
    return (
        <div className=" hover:cursor-pointer rounded-tr-3xl rounded-bl-3xl">
            <div
                style={{ backgroundImage: `url(${img})` }}
                className=" bg-cover h-[90px] w-[90px] mx-1 mb-6  rounded-tr-3xl rounded-bl-3xl"></div>
            <p className=" text-center text-sm">{text}</p>
        </div>
    );
};

export default Category;
