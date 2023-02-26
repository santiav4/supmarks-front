import React from "react";
import logoFooter from "./assets/logo-footer.png";
import playStore from "./assets/play-store.png";
import appStore from "./assets/app-store.png";
import { GrTwitter } from "react-icons/gr";
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
    let date = new Date();
    return (
        <div className="   bg-[#0169E8] text-white pt-12 border-t-[1px] border-stone-900">
            <div className=" w-[1210px] mx-auto">
                <div className="  flex  justify-between pb-16">
                    <img className=" w-22 h-14" src={logoFooter} alt="" />
                    <div>
                        <div className=" text-xl mb-4">
                            For any queries, reach out to us:
                        </div>
                        <p className="  ">Email:info@supmarks.com</p>
                    </div>
                    <div className=" ">
                        <h2 className=" text-lg pb-3">Supmarks</h2>
                        <h3 className=" hover:cursor-pointer hover:underline pb-3">
                            Become a Merchant
                        </h3>
                        <h3 className=" hover:cursor-pointer hover:underline pb-3">
                            Become a Driver
                        </h3>
                        <h3 className=" hover:cursor-pointer hover:underline">
                            Become a Developer
                        </h3>
                    </div>
                    <div>
                        <h2 className="  text-lg pb-3">Help & Legal</h2>
                        <h3 className=" hover:cursor-pointer hover:underline pb-3">
                            Help & Support
                        </h3>
                        <h3 className=" hover:cursor-pointer hover:underline pb-3">
                            Terms & Conditions
                        </h3>
                        <h3 className=" hover:cursor-pointer hover:underline pb-3">
                            Privacy Policy
                        </h3>
                        <h3 className=" hover:cursor-pointer hover:underline">
                            FAQ
                        </h3>
                    </div>
                </div>
                <hr className="  border-[#5a5a5a] pb-6" />
                <div className=" flex justify-around pb-10">
                    <div className="flex items-center">
                        <div className=" mr-6 font-bold text-lg">
                            ORDER IN THE APP
                        </div>
                        <img
                            className=" hover:cursor-pointer h-10 mr-4"
                            src={playStore}
                            alt=""
                        />
                        <img
                            className=" hover:cursor-pointer h-10"
                            src={appStore}
                            alt=""
                        />
                    </div>
                    <div className=" flex items-center">
                        <div className=" font-bold text-lg mr-4">FOLLOW US</div>
                        <GrTwitter
                            className=" mr-4 hover:cursor-pointer"
                            size={28}
                        />
                        <AiFillFacebook
                            className=" mr-4 hover:cursor-pointer"
                            size={28}
                        />
                        <BsInstagram
                            className=" mr-4 hover:cursor-pointer"
                            size={28}
                        />
                    </div>
                </div>
                <div className=" pb-6">
                    <p className=" text-center">
                        Supmarks | All Rights Reserved &copy;
                        {date.getFullYear()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
