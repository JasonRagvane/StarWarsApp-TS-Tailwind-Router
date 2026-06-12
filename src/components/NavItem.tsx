import { SWContext } from "../utils/context.ts";
import Button from "./ui/Button.tsx";
import { NavLink } from "react-router";
import {useContext} from "react";

const NavItem = ({itemTitle}:{itemTitle:string}) => {

    const {hero} = useContext(SWContext);

    return (
        <NavLink to={`/${itemTitle.toLowerCase()}/${hero}`}>
            <Button>{itemTitle}</Button>
        </NavLink>
        






        // <div onClick={() => changePage(itemTitle)}
        //      className="bg-danger rounded-md px-3 cursor-pointer text-center hover:bg-red-500 hover:text-white"
        // >{itemTitle}</div>
    )
}

export default NavItem;