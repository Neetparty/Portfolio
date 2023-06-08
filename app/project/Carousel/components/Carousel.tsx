'use client'

import { Box, Button, Image, Stack } from '@chakra-ui/react'
import { useState } from 'react'


interface CarouselProps {
    image: Array<object>
}

export const Carousel = ({ image }: CarouselProps) => {

    const [count, setCount] = useState(0)
    const [animation, setAnimation] = useState(0)

    const getImage = image.map((i: any, k: number) => {

        if (k !== count) {
            return false
        }

        return <CarouselItems alt={i.id} key={k} src={i.download_url} />

    })

    return (
        <Box>
            <Stack>
                {getImage}
            </Stack>
            <Stack direction='row' >
                <Button onClick={() => { count <= 0 ? setCount(image.length - 1) : setCount(count - 1) }} >{'<'}</Button>
                <Button onClick={() => { count === image.length - 1 ? setCount(0) : setCount(count + 1) }} >{'>'}</Button>
            </Stack>
        </Box>
    )

}

interface CarouselItemsProps {
    alt: string,
    src: string
}

export const CarouselItems = ({alt, src}:CarouselItemsProps) => {
    return <Image minH='300px' minW='500px' maxH='300px' maxW='500px' alt={alt} fit='cover' src={src} />
}  