import React from 'react';
import { ExternalLink } from 'react-external-link';

function Cards({props}) {
    console.log(props)
    return (
    
            <li className="cards__item">
                <ExternalLink className="cards__item__link" href={props.href}>
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img className="card__img" src={props.src} alt={props.alt}/>
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.text}</h5>
                    </div>
                </ExternalLink>
            </li>

    )
}

export default Cards
