import {createContext} from "react";

export const SWContext = createContext({
    page: '',
    changePage: (page: string) => {console.log(page)}
});