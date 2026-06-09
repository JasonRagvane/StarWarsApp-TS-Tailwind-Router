import {useContext} from "react";
import {characters} from "../utils/constants";
import {SWContext} from "../utils/context.ts";


interface FriendProps {
    friend: string;
    pos: number;

}

const Friend = ({friend, pos}: FriendProps) => {

    const {hero, changeHero} = useContext(SWContext);

    let styles = "w-full";
    if (pos === 9) {
        styles += " rounded-br-3xl";
    }
    if (pos === 7) {
        styles += " rounded-bl-3xl";
    }

    console.log(friend, hero);

    

    
    return (
        <img className={styles} src={characters[friend].img} alt="Friend" onClick={() => {changeHero(friend)}}/>
    )
}

export default Friend;