import {useContext} from "react";
import {characters} from "../utils/constants";
import {SWContext} from "../utils/context.ts";
import {useParams,useNavigate} from "react-router";
import {defaultHero} from "../utils/constants.ts";


interface FriendProps {
    friend: string;
    pos: number;
}

const Friend = ({friend, pos}: FriendProps) => {

    const {changeHero} = useContext(SWContext);
    const {heroID = defaultHero} = useParams();
    const navigate = useNavigate();
    let styles = "w-full";
    if (pos === 9) {
        styles += " rounded-br-3xl";
    }
    if (pos === 7) {
        styles += " rounded-bl-3xl";
    }

    
    

    
    return (
        <img className={styles} src={characters[friend].img} alt="Friend" onClick={() => {
            changeHero(friend)
           if (friend !== heroID) {
            navigate(`/home/${friend}`);
           }
        }}/>
    )
}

export default Friend;