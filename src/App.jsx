import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Footer from "./Footer";
import Location from "./Location";
import Header from "./Header";
import Chat from "./Chat";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className=" overflow-hidden">
            <div className=" h-screen bg-cover bg-[url('assets/hero.gif')] ">
                <Header />
                <Location />
                <Chat />
            </div>
            <Footer />
        </div>
    );
}

export default App;
