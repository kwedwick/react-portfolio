import React from 'react'
import Cards from './Cards'

//my projects
const props = [
    {
        src: 'path',
        text: 'text about project',
        label: 'coding language',
        path: "browser path"
    }
];



function Portfolio() {
    return (
        <div className="cards">
            <h1>Web Dev Projects</h1>
            <div className="cards__container">
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <Cards props={props} />
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Portfolio
