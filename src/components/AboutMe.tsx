import {useEffect, useState} from "react";
import {periodMonth, characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router";
import ErrorPage from "./ui/ErrorPage.tsx";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";



const AboutMe = () => {
    
    const {heroID = defaultHero}= useParams();
    const {changeHero} = useContext(SWContext);


    const [hero, setHero] = useState(() => {
        const hero = JSON.parse(localStorage.getItem(heroID)!);
        if(hero && (Date.now() - hero.timestamp < periodMonth)) {
            return hero.payload;
        }
    });

    
    useEffect(() => {

if(!(heroID in characters)) {
       return;
    }
changeHero(heroID);
        if (!hero) {
            fetch(characters[heroID as keyof typeof characters].url)
                .then(res => res.json())
                .then(data => {
                    const info = {
                        Name: data.name,
                        Gender: data.gender,
                        'Birth year': data.birth_year,
                        Height: data.height,
                        Mass: data.mass,
                        'Hair color': data.hair_color,
                        'Eye color': data.eye_color,
                        'Skin color': data.skin_color,
                    };
                    setHero(info);
                    localStorage.setItem(heroID, JSON.stringify({
                        payload: info,
                        timestamp: Date.now()
                    }));
                })
        }
    }, []);

    return (heroID in characters) ? (
        <>
            {!!(hero) &&
                <div className={'text-3xl text-justify tracking-widest leading-14 ml-8'}>
                    {Object.keys(hero).map(key => (
                        <p key={key}>
                            {key}:{hero[key]}
                            </p>
                    ))}
                </div>
            }
        </>
    ) : <ErrorPage/>;
}

export default AboutMe;





