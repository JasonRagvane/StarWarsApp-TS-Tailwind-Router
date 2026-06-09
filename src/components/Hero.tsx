import { characters } from "../utils/constants";
import {useContext} from "react";
import {SWContext} from "../utils/context";
import {useParams} from "react-router";


const Hero = () => {
    const {hero} = useContext(SWContext);
    const {heroID} = useParams();
    return (
        <section className="float-left w-1/4 mt-2 mr-4">
            <img className="w-full shadow-hero" src={characters[heroID || hero].img} alt="Luke Skywalker"/>
        </section>
    )
}

export default Hero;