import React from 'react'
import Cards from './Cards'




//my projects
const projectList = [
    {
        id: '1',
        src: '/assets/images/tech-blog.jpg',
        text: 'Placeholder Project',
        label: 'coding language',
        href: "https://blooming-citadel-66585.herokuapp.com/",
        alt: "project one placeholder"
    },
    {
        id: '2',
        src: '/assets/images/tech-blog.jpg',
        text: 'A simple tech blog website that allows the user to sign up, post, and comment.',
        label: 'Node.js',
        href: "https://blooming-citadel-66585.herokuapp.com/",
        alt: "project two tech blog"
    },
    {
        id: '3',
        src: '/assets/images/work-day-scheduler.jpg',
        text: 'A Work Day Scheduler that using jquery and moment.js to check the time and adjusts the class of the hours as the time passes.',
        label: 'Moment.js & Jquery',
        href: "https://kwedwick.github.io/weekday-scheduler/",
        alt: "project three work day scheduler"
    },
    {
        id: '4',
        src: '/assets/images/password-generator.jpg',
        text: 'Random Password Generator using basic JavaScript to take in user input through the form.',
        label: 'JavaScript',
        href: "https://kwedwick.github.io/generate-password-challenge/",
        alt: "project four random password generator"
    },
    {
        id: '5',
        src: '/assets/images/pwa-budget-tracker.jpg',
        text: 'A budget tracker that uses basic PWA systems for use offline.',
        label: 'PWA',
        href: "https://protected-bastion-93932.herokuapp.com/",
        alt: "project five progressive web application for budget tracking"
    }
];



function Projects() {
    return (
        <div className="project">
            <h1>Web Dev Projects</h1>
            <div className="cards__container">
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        {/* <Cards props={props} /> */}
                        {projectList.map(project => {
                            console.log(project)
                            return (<Cards props={project} key={project.id} />)
                        })}
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Projects
