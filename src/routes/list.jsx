import React, { useState } from "react";
import Chat from "../Chat";
import HeadingList from "../HeadingList";
import Footer from "../Footer";
import Category from "../Category";

import recomendado from "../assets/recomendado.jpg";
import pizza from "../assets/pizza.png";
import alcohol from "../assets/alcohol.png";
import burgers from "../assets/burgers.png";
import mexicana from "../assets/mexicana.png";
import fastFood from "../assets/fast-food.png";
import mariscos from "../assets/mariscos.png";
import farmacia from "../assets/farmacia.png";
import electronicos from "../assets/electronicos.png";
import desayuno from "../assets/desayuno.png";
import pasta from "../assets/pasta.png";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const list = () => {
    const [isLeft, setIsLeft] = useState(true);

    const handleIsLeft = () => {
        setIsLeft((value) => !value);
    };

    const categories = [
        { text: "Recomendado", img: recomendado },
        { text: "Pizza", img: pizza },
        { text: "Alcohol", img: alcohol },
        { text: "Burgers", img: burgers },
        { text: "Mexicana", img: mexicana },
        { text: "Fast Food", img: fastFood },
        { text: "Mariscos", img: mariscos },
        { text: "Farmacia", img: farmacia },
        { text: "Electrónicos", img: electronicos },
        { text: "Desayunos", img: desayuno },
        { text: "Pizza", img: pizza },
        { text: "Alcohol", img: alcohol },
        { text: "Burgers", img: burgers },
        { text: "Mexicana", img: mexicana },
        { text: "Fast Food", img: fastFood },
        { text: "Mariscos", img: mariscos },
        { text: "Farmacia", img: farmacia },
        { text: "Electrónicos", img: electronicos },
        { text: "Desayunos", img: desayuno },
        { text: "Pasta", img: pasta },
    ];
    return (
        <>
            <HeadingList />

            <div className=" mt-4 mx-4 mb-8 bg-pink-200  h-[270px]"></div>
            <div className=" flex justify-center items-center">
                <button
                    className={`${
                        isLeft ? "visible" : "invisible"
                    }  rounded-full p-2 drop-shadow-xl border self-start mt-8  mr-2`}
                    onClick={handleIsLeft}>
                    <AiOutlineArrowLeft className=" text-gray-400" size={16} />
                </button>
                <div className=" flex w-[980px] overflow-hidden  mb-4 ">
                    <div
                        className={` flex transition-all duration-300 ${
                            isLeft ? "-translate-x-1/2" : ""
                        }`}>
                        {categories.map((cat) => (
                            <Category text={cat.text} img={cat.img} />
                        ))}
                    </div>
                </div>
                <button
                    className={`${
                        isLeft ? "invisible" : "visible"
                    }  rounded-full p-2 drop-shadow-xl border self-start mt-8  ml-2`}
                    onClick={handleIsLeft}>
                    <AiOutlineArrowRight className=" text-gray-400" size={16} />
                </button>
            </div>
            <div className=" mx-4 mb-4 bg-blue-200 h-[168px]"></div>

            <Chat />
            <Footer />
        </>
    );
};

export default list;
