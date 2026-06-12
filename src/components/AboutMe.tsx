import {useEffect, useState} from "react";
import {periodMonth, characters} from "../utils/constants.ts";
import ErrorPage from "./ui/ErrorPage.tsx";
import { useValidHero } from "../hooks/customHooks.ts";



const AboutMe = () => {
    
    const {isHeroValid, heroID} = useValidHero();
    const [hero, setHero] = useState(() => {
        const hero = JSON.parse(localStorage.getItem(heroID)!);
        if(hero && (Date.now() - hero.timestamp < periodMonth)) {
            return hero.payload;
        }
    });

    
    useEffect(() => {
        if (!hero && isHeroValid) {
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
    }, [hero, heroID,]);

    return (isHeroValid) ? (
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





