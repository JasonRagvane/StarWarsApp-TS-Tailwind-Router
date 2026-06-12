import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import OpeningCrawl from "./OpeningCrawl";
import { SWContext } from "../utils/context";
import { useContext } from "react";
import { useParams } from "react-router";
import { characters, defaultHero } from "../utils/constants";
import { useEffect } from "react";
import ErrorPage from "./ui/ErrorPage";

const Home = () => {

    const {changeHero} = useContext(SWContext);
    const {heroID = defaultHero} = useParams();

    useEffect(() => {
        if(!(heroID in characters)) {
            return;
        }
        changeHero(heroID);
    
    },[heroID])

    return (heroID in characters) ? (
        <main>
            <Hero/>
            <DreamTeam/>
            <OpeningCrawl/>
        </main>
    ) : <ErrorPage/>;
}

export default Home;