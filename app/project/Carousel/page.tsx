import axios from 'axios'
import { ItemLayout } from '../components'
import { Carousel } from "./components/Carousel"

const loadImage = async () => {

    return await axios.get(`https://picsum.photos/v2/list?limit=5`)
        .then((res) => {
            return res.data
        })
}

const CarouselProject = async () => {

    const image = await loadImage()

    return(
        <ItemLayout title='Chakra UI Carousel'>
            <Carousel image={image} />
        </ItemLayout>
    )
}

export default CarouselProject