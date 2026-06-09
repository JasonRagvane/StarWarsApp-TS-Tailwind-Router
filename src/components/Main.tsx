import Home from "./Home";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./Contact";
import {navItems} from "../utils/constants";
// import {useContext} from "react";
// import {SWContext} from "../utils/context";
import { Route, Routes} from "react-router";
import ErrorPage from "./ui/ErrorPage";


const Main = () => {
    // const {page} = useContext(SWContext);

    return(
        <Routes>
            {[`/`,`/${navItems[0]}`].map(p => <Route key={p} path={p} element={<Home/>}/>)}
            {[`/${navItems[1]}`, `${navItems[1]}/:heroID`].map(p => <Route key={p} path={p} element={<AboutMe/>}/>)}
            <Route path={`/${navItems[2]}`} element={<StarWars/>}/>
            <Route path={`/${navItems[3]}`} element={<Contact/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    )


    // switch (page) {
    //     case navItems[1]:
    //         return <AboutMe/>
    //     case navItems[2]:
    //         return <StarWars/>
    //     case navItems[3]:
    //         return <Contact/>
    //     default:
    //         return <Home/>
    // }
}

export default Main;