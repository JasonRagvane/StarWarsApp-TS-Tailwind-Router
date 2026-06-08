import NavItem from "./NavItem";
import {navItems} from "../utils/constants.ts";

const Navigation = () => {
    return (
        <nav className="fixed top-2 left-12 flex gap-3">
            {navItems.map((item, i) => <NavItem itemTitle={item} key={i}/>)}
        </nav>
    )
}

export default Navigation;