import {starWarsInfo} from "../utils/constants.ts";
import Text from "./ui/Text.tsx";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";
import {useParams} from "react-router";
import {characters, defaultHero} from "../utils/constants.ts";
import ErrorPage from "./ui/ErrorPage.tsx";


const StarWars = () => {

    const {changeHero} = useContext(SWContext);
    const {heroID = defaultHero} = useParams();

    useEffect(() => {
        if(!(heroID in characters)) {
            return;
        }
        changeHero(heroID);
    },[])

    return(heroID in characters)? (
    <Text>{starWarsInfo}</Text>
    ) : <ErrorPage/>;
}

export default StarWars;