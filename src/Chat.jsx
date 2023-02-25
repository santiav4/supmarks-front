import React, { useState } from "react";
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { GrAttachment } from "react-icons/gr";
import { IoMdHappy } from "react-icons/io";
import { BsFillMicFill } from "react-icons/bs";
import chatLogo from "./assets/chat-logo.jpg";
import texture from "./assets/texture.png";

const Chat = () => {
    const [isChat, setIsChat] = useState(false);

    const handleChat = () => {
        setIsChat((value) => !value);
    };
    return (
        <>
            <div
                onClick={handleChat}
                className="p-4 w-14 rounded-full ml-auto bg-[#010050] text-white fixed bottom-6 right-4 hover:cursor-pointer">
                {isChat ? (
                    <AiOutlineClose size={25} />
                ) : (
                    <BsFillChatDotsFill size={25} />
                )}
            </div>
            {isChat && (
                <div className=" flex flex-col rounded-lg bg-white w-[370px] h-[553px] ml-auto fixed bottom-20 right-4">
                    <div className=" rounded-t-lg px-8  h-20 flex items-center bg-[#010050]">
                        <img
                            className=" rounded-full mr-2"
                            width={40}
                            src={chatLogo}
                            alt=""
                        />{" "}
                        <p className=" text-white font-bold">Supmarks</p>
                    </div>
                    <div className=" bg-[url('./assets/texture.png')] flex-grow"></div>
                    <div className=" flex items-center p-4 h-12 bg-slate-100">
                        <GrAttachment />
                        <input
                            className=" flex-grow outline-none mx-4 bg-slate-100"
                            type="text"
                            placeholder="Type your message.."
                        />
                        <IoMdHappy className="mr-4" size={25} />
                        <BsFillMicFill size={20} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Chat;
