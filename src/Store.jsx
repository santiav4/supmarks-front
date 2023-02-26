import React from "react";
import boost from "./assets/boost.jpeg";

const Store = ({ name, subtitle, location, minimum, rating, img }) => {
    return (
        <div className="  hover:bg-gradient-to-t from-slate-300 hover:cursor-pointer p-2 mr-6 rounded-tr-3xl rounded-bl-3xl w-[317px] h-[180px] flex border ">
            <div
                style={{ backgroundImage: `url('${img}')` }}
                className=" p-4 bg-cover flex-1 rounded-tr-3xl rounded-bl-3xl "></div>

            <div className=" p-4 flex-1 truncate ">
                <h2 className=" truncate">{name}</h2>
                <p className=" truncate">{subtitle}</p>
                <p className=" truncate">{location}</p>
                <p className=" truncate">{minimum}</p>
                <p className=" truncate">{rating}</p>
            </div>
        </div>
    );
};

export default Store;
