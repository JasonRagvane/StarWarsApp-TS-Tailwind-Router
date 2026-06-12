import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import OpeningCrawl from "./OpeningCrawl";
import ErrorPage from "./ui/ErrorPage";
import { useValidHero } from "../hooks/customHooks";

const Home = () => {
    const {isHeroValid} = useValidHero();

    return (isHeroValid) ? (
        <main>
            <Hero/>
            <DreamTeam/>
            <OpeningCrawl/>
        </main>
    ) : <ErrorPage/>;
}

export default Home;