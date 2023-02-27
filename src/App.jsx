import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Footer from "./Footer";
import Location from "./Location";
import Header from "./Header";
import Chat from "./Chat";
import List from "./routes/list";

function App() {
    const [count, setCount] = useState(0);
    const [page, setPage] = useState("main");

    return (
        <div className=" overflow-hidden">
            {page === "main" ? (
                <div className=" h-screen bg-cover bg-[url('assets/hero.gif')] ">
                    <Header />
                    <Location page={page} setPage={setPage} />
                    <Chat />
                </div>
            ) : (
                <List page={page} setPage={setPage} />
            )}

            <Footer />
        </div>
    );
}

export default App;
