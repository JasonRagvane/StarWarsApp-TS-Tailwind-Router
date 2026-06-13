
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {SWContext} from "./utils/context";
import {useState} from "react";
import {defaultHero} from "./utils/constants";

function App() {
    const [hero, setHero] = useState(defaultHero);
    const [isError, setIsError] = useState(false);

    return (
        <div className={'mx-2'}>
            <SWContext.Provider value={{hero, changeHero: setHero, isError, setIsError}}>
                <Header/>
                <Main/>
                <Footer/>           
            </SWContext.Provider>
        </div>
    )
}

export default App