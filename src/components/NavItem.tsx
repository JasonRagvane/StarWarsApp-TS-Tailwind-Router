import Button from "./ui/Button.tsx";
import { NavLink } from "react-router";

const NavItem = ({itemTitle}:{itemTitle:string}) => {

    return (
        <NavLink to={`/${itemTitle.toLocaleLowerCase()}`}>
            <Button>{itemTitle}</Button>
        </NavLink>
        






        // <div onClick={() => changePage(itemTitle)}
        //      className="bg-danger rounded-md px-3 cursor-pointer text-center hover:bg-red-500 hover:text-white"
        // >{itemTitle}</div>
    )
}

export default NavItem;