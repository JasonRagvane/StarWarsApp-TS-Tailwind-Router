import Navigation from "./Navigation";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";
import {characters} from "../utils/constants.ts";




const Header = () => {

    const {hero, isError} = useContext(SWContext);
    

    return (!isError) ? (
        <header className="rounded-t-3xl bg-gray-700/60">
            <Navigation/>
            <h1 className="text-center text-4xl py-6">{characters[hero].name}</h1>
        </header>
    ):(
        <header className="rounded-t-3xl bg-gray-700/60">
            <Navigation/>
            <h1 className="text-center text-4xl py-6 text-red-500">Error!</h1>
        </header>
    )
}

export default Header;