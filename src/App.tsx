
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {navItems} from "./utils/constants";
import {useState} from "react";
import {SWContext} from "./utils/context";

function App() {
    const [page, setPage] = useState<string>(navItems[0]);

    return (
        <div className={'mx-2'}>
            <SWContext value={{page, changePage: setPage}}>
                <Header/>
                <Main/>
                <Footer/>
            </SWContext>
        </div>
    )
}

export default App