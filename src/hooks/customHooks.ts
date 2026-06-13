import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context";
import {useParams} from "react-router";
import {characters, defaultHero} from "../utils/constants";


export const useValidHero = (): {heroID: string, isHeroValid: boolean} => {
    const {changeHero, setIsError} = useContext(SWContext);
    const {heroID = defaultHero} = useParams();

    useEffect(() => {
        if(!(heroID in characters)) {
            setIsError(true);
            return;
        }
        setIsError(false);
        changeHero(heroID);
    
    },[heroID])

    return {
        heroID, 
        isHeroValid: heroID in characters
    }
}