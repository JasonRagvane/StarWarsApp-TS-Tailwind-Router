import { characters } from "../utils/constants";
import {useContext} from "react";
import {SWContext} from "../utils/context";


const Hero = () => {
    const {hero} = useContext(SWContext);
    return (
        <section className="float-left w-1/4 mt-2 mr-4">
            <img className="w-full shadow-hero" src={characters[hero].img} alt="Luke Skywalker"/>
        </section>
    )
}

export default Hero;