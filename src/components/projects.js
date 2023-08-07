import React from "react";
import projectsData from "./projectsData"
import Card from "./subcomponents/card";

export default function Projects(){
    const [index , setIndex] = React.useState(0)
    const [projectsArray] = React.useState(
            projectsData.map((project,key) => 
            <Card
                key = {key}
                cardName = {project.cardName}
                cardImage = {project.cardImage}
                cardDescription = {project.cardDescription}
                cardLink = {project.cardLink}
            />
            )

        
    )
    React.useEffect(() => {
        const timeout = setTimeout(() => {document.querySelector('.projects--array').classList.add('show--projects')} , 250)
        return () => clearTimeout(timeout)
    },[])
    function handleIncrement(){
        setIndex((prevData) => (prevData+3))
    }
    function handleDecrement(){
        setIndex((prevData) => (prevData-3))
    }
    const element = (
        <>
        <div className="arrow-right">

            <svg onClick={handleDecrement} xmlns="http://www.w3.org/2000/svg" width="100" height="80" fill="currentColor" class="bi bi-arrow-bar-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z"/>
                        </svg>
                        <h1 className="arrow">Go back</h1>
        </div>
        </>
    )
    return (

    <>
        <div className="projects">
            <h1 className="primary project--heading">Projects that I have worked on</h1>
        </div>
        <div className="projects--array">
            {projectsArray.slice(index,index+3)}
            <div className="arrow-right" >
            {index + 3 < projectsArray.length && 
                (<>

                <svg onClick={handleIncrement} xmlns="http://www.w3.org/2000/svg" width="100" height="80" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8Zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Z"/>
                </svg> 
                <h1 className="arrow">See More</h1>
                </>)}
            {index > 0 && element}
            </div>
        </div>
    </>
    )
}