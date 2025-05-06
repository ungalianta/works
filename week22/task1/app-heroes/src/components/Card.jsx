import React from 'react';
import {Rating} from './Rating';

export const Card = ({hero}) => {
    const {name, universe, alterego, occupation, friends, superpowers, url, info} = hero;
    return (
        <div>
    <h3>{name}</h3>
    <p>{universe}</p>
    <p>{alterego}</p>
    <p>{occupation}</p>
    <p>{friends}</p>
    <p>{superpowers}</p>
    <p>{info}</p>
    <img src={url} alt="" />
    <Rating />
    </div>
    );
}
