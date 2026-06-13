import {createContext} from "react";
import {defaultHero} from "./constants";
import type {SWContextValue} from "./types";

export const SWContext = createContext<SWContextValue>({
    hero: defaultHero,
    isError: false,
    setIsError: (isError: boolean) => {console.log(isError)},
    changeHero: (hero: string) => {console.log(hero)}
});