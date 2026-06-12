import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context";
import {useParams} from "react-router";
import {characters, defaultHero} from "../utils/constants";


export const useValidHero = (): {heroID: string, isHeroValid: boolean} => {
     const {changeHero} = useContext(SWContext);
    const {heroID = defaultHero} = useParams();

    useEffect(() => {
        if(!(heroID in characters)) {
            return;
        }
        changeHero(heroID);
    
    },[heroID])

    return {
        heroID, 
        isHeroValid: heroID in characters
    }
}