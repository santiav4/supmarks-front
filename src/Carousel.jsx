import React, { useEffect, useState } from "react";

import kitchen from "./assets/kitchen.png";
import taco from "./assets/taco.png";
import taza from "./assets/taza.png";

import { RxDotFilled } from "react-icons/rx";
import { RxDot } from "react-icons/rx";

const Carousel = () => {
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        const sliderTimer = setTimeout(() => {
            refresh > 1 ? setRefresh(0) : setRefresh(refresh + 1);
        }, 3000);

        return () => clearTimeout(sliderTimer);
    }, [refresh]);

    return (
        <>
            <div
                style={{ transform: `translateX(-${refresh * 1324}px)` }}
                className={` transition-all duration-1000 mx-auto overflow-hidden  flex w-[3972px]  h-full bg-green-200`}>
                <div
                    className="  h-full w-full bg-cover "
                    style={{
                        backgroundImage: `url(${taco})`,
                    }}></div>
                <div
                    className=" h-full w-full bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(${taza})` }}></div>
                <div
                    className="  h-full w-full bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(${kitchen})` }}></div>
            </div>
            <div className=" absolute top-1/3 left-2/4 flex">
                {refresh === 0 ? (
                    <RxDotFilled className="  text-white" size={30} />
                ) : (
                    <RxDot
                        onClick={() => setRefresh(0)}
                        className="hover:cursor-pointer text-white"
                        size={30}
                    />
                )}
                {refresh === 1 ? (
                    <RxDotFilled className=" text-white" size={30} />
                ) : (
                    <RxDot
                        onClick={() => setRefresh(1)}
                        className="hover:cursor-pointer text-white"
                        size={30}
                    />
                )}
                {refresh === 2 ? (
                    <RxDotFilled className=" text-white" size={30} />
                ) : (
                    <RxDot
                        onClick={() => setRefresh(2)}
                        className="hover:cursor-pointer text-white"
                        size={30}
                    />
                )}
            </div>
        </>
    );
};

export default Carousel;
