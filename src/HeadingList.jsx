import React from "react";

const HeadingList = () => {
    return (
        <div className=" flex bg-[#0169E8]">
            <div>flecha</div>
            <div>logo</div>
            <select name="" id="">
                <option value="home">Home Delivery</option>
                <option value="pickup">Pick-Up (Recogido)</option>
            </select>
            <div>
                <input className=" outline-none" type="text" />
                <button> x Locate me</button>
            </div>
            <div>list view</div>
            <div>Search</div>
            <div>Log in</div>
            <div>En </div>
        </div>
    );
};

export default HeadingList;
