import React, { useState } from "react";
import Chat from "../Chat";
import HeadingList from "../HeadingList";
import Footer from "../Footer";
import Category from "../Category";
import Store from "../Store";

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

import boost from "../assets/boost.jpeg";
import tommy from "../assets/tommy.jpg";
import ej from "../assets/ej.png";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import Carousel from "../Carousel";

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

    const stores = [
        {
            name: "Boost Mobile",
            subtitle:
                "Compra accesorios de teléfono y recibelos rápido o recógelos en la tienda más cercana.",
            location:
                "1.16 MI   -  Paseo del pueblo local 6-a (0.62 mi) Guayama, Puerto Rico 00784",
            minimum: "Minimum Order: $7.00",
            rating: "No rating yet",
            img: boost,
        },
        {
            name: "Tommy's Pizza",
            subtitle: "",
            location: "1.21 MI   -  450 Calle A, Guayama, 00784",
            minimum: "Minimum Order: $7.00",
            rating: "⭐⭐⭐⭐⭐",
            img: tommy,
        },
        {
            name: "EJ Repairs & More",
            subtitle: "Accesorios de Electrónicos",
            location: "1.06 MI   -  Frente a Céntrico Guayama",
            minimum: "Minimum Order: $5.00",
            rating: "No rating yet",
            img: ej,
        },
    ];
    return (
        <>
            <HeadingList />

            <div className=" overflow-hidden w-[1324px] mt-4 mx-auto mb-8 bg-pink-200  h-[270px] ">
                <Carousel />
            </div>
            <div className=" mb-10 flex justify-center items-center">
                <button
                    className={`${
                        isLeft ? "visible" : "invisible"
                    }  rounded-full p-2 drop-shadow-xl border self-start mt-8  mr-2`}
                    onClick={handleIsLeft}>
                    <AiOutlineArrowLeft className=" text-gray-400" size={16} />
                </button>
                <div className=" flex w-[980px] overflow-hidden  mb-4 ">
                    <div
                        className={` flex transition-all duration-1000 ${
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
            <div className=" mb-96 flex items-center justify-center mx-4   h-[168px]">
                {stores.map((store) => (
                    <Store
                        name={store.name}
                        subtitle={store.subtitle}
                        location={store.location}
                        minimum={store.minimum}
                        rating={store.rating}
                        img={store.img}
                    />
                ))}
            </div>

            <Chat />
            <Footer />
        </>
    );
};

export default list;
