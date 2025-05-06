import React from 'react';
import { heroes } from "../constants/heroes";
import { Card } from './Card';



const MainPage = () =>{
    return (
        <div>
            {
                heroes.map((hero)=>{
                    return(
                        <Card hero={hero} />
                    )
                })
            }
        </div>
    )
}

export default MainPage;
