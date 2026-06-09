import Friend from "./Friend.js";
import {friends} from "../utils/constants.js";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";


const DreamTeam = () => {

    const {hero} = useContext(SWContext);

    return (
        <section className="float-right w-1/2 border rounded-b-3xl grid grid-cols-3 gap-1.5 mt-2 ml-2">
            <h2 className="text-center col-span-3 text-2xl">Dream team</h2>
            {friends.filter((key) => key !== hero).map((key, i) => (
                
                <Friend friend={key} key={key} pos={i + 1} />
            ))}
        </section>
    )
}

export default DreamTeam;