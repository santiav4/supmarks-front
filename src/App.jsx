import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Footer from "./Footer";
import Location from "./Location";
import Header from "./Header";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="">
            <div className=" h-screen bg-cover bg-[url('assets/hero.gif')] ">
                <Header />

                <Location />
            </div>

            <Footer />
        </div>
    );
}

export default App;