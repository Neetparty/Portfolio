'use server'
import axios from "axios"
import { ProjectCard, ProjectLayout } from "./components"

const getProjectData = async () => {
    const res = await axios.get('http://localhost/api/project')
    return res.data
}


const Project = async () => {

    const raw = await getProjectData()
    const data = raw.DATA

    return(
        <ProjectLayout>
            {
                data.map((val: {name: string, image: string, link: string}, index:number) => <ProjectCard data={val} key={index} />)
            }
        </ProjectLayout>
    )
}

export default Project