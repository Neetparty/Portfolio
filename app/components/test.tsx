import axios from 'axios'
import { Carousel } from '../project/Carousel'

const loadImage = async () => {

    return await axios.get(`https://picsum.photos/v2/list?limit=5`)
        .then((res) => {
            return res.data
        })
}

export const Test = async (props:any) => {

    const image = await loadImage()
    
    return (
        <Carousel image={image} /> 
    )
}