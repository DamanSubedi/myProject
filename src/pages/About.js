import { Skills, Experiences } from "./data";

import { FaRegGrinStars } from "react-icons/fa";

//importing css
import "../index.css"
import Title from "../component/global/Title";
import { Link } from "react-router-dom";


export default function About() {
    return (
        <section className="abouts">
            <article className="abouts_container">
                <Title title="tech stack" />
                <ul className="skill">
                    {Skills.map((skill) => {
                        const { id, logo, info } = skill
                        return (<>
                            <li key={id}>
                                <img src={logo} alt="logo" className="tech_logo" />
                                <p>{info}</p>
                            </li>
                        </>
                        )
                    })}
                </ul>


            </article>
            <article className="abouts_container">
                <Title title="project" />
                <ul className="projects">
                    {Experiences.map((exp) => {
                        return (
                            <>
                                <li key={exp.index} className="project">
                                    <iframe
                                        src={exp.url} title={exp.title}></iframe>
                                    <Link to={exp.url} className="project_title btn_white">
                                        {exp.title}
                                    </Link>
                                </li>
                            </>
                        )
                    })}
                </ul>
            </article>

        </section>
    )
}