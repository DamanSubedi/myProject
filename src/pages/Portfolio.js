import { Skills, Experiences } from "./data";

import { FaRegGrinStars } from "react-icons/fa";

//importing css
import "../index.css"


export default function Portfolio() {
    return (
        <section className="section portfolio">
            <article className="skill_container">
                <div className="title">
                    <h1>
                        Skills
                    </h1>
                </div>
                <ul className="skill">
                    {Skills.map((skill, index) => {
                        return (<>
                            <FaRegGrinStars className="icon" />
                            <li key={index}>{skill}</li>
                        </>
                        )
                    })}
                </ul>
            </article>
            <article className="xp_container">
                <div className="title">
                    <h1>
                        Experiences
                    </h1>
                </div>
                <ul className="xp">
                    {Experiences.map((exp, index) => {
                        return (
                            <>
                                <FaRegGrinStars className="icon" />
                                <li key={index}>{exp}</li>
                            </>
                        )
                    })}
                </ul>
            </article>
        </section>
    )
}