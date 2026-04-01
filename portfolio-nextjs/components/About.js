import React from 'react'
import ScrollReveal from './ScrollReveal'

const About = () => {
    // const text = "I'm passionate about writing clean code, efficient architecture, and creating seamless user experiences --> Eager to tackle new challenges and collaborate with like-minds to deliver exceptional results.";
    const text = "I'm passionate about writing clean code, and efficient architecture --> Eager to tackle new challenges and collaborate with like-minds to deliver exceptional results.";

    return (
        <div id="about" className='text-white text-left min-h-fit flex items-center mb-20'>
            <ScrollReveal text={text} />
        </div>
    )
}

export default About;


export const Experience = () => {
 const text = "A proven track record of experience in building scalable and efficient software solutions across the globe with different teams and companies. ";

    return (
        <div id="experience" className='text-white text-left min-h-fit flex items-center mb-20'>
            <ScrollReveal text={text} />
        </div>
    )
}
export const Projects = () => {
 const text = "My expertise spans the full development lifecycle, from concept and design to development, testing, and deployment. Here are some of my projects I deployed over a good pizza";

    return (
        <div id="projects" className='text-white text-left min-h-fit flex items-center mb-20'>
            <ScrollReveal text={text} />
        </div>
    )
}
export const Blogs = () => {
 const text = "Beyond the code...";

    return (
        <div id="blogs" className='text-white text-left flex items-center mb-20'>
            <ScrollReveal text={text} />
        </div>
    )
}