'use client'

import { Box, Button, Image, Stack } from '@chakra-ui/react'
import { useState } from 'react'


interface CarouselProps {
    image: Array<object>
}

export const Carousel = ({ image }: CarouselProps) => {

    const [count, setCount] = useState(0)

    const getImage = image.map((i: any, k: number) => {

        if (k !== count) {
            return false
        }

        return <CarouselItems alt={i.id} key={k} src={i.download_url} />

    })

    return (
        <Box
            display='flex'
            w='100%'
            alignContent='center'
            alignItems='center'
            justifyContent='center'
            justifyItems='center'
            mt='2rem'
            mb='2rem'
        >
            <Box position='relative' >
                <Stack
                    width='max-content'
                    align='center'
                    justify='center'
                >
                    {getImage}
                </Stack>
                <Button
                    position='absolute'
                    left='0'
                    top='0'
                    width='3rem'
                    height='100%'
                    borderRadius='0'
                    variant='ghost'
                    color='whiteAlpha.900'
                    bgColor='blackAlpha.400'
                    onClick={() => { count <= 0 ? setCount(image.length - 1) : setCount(count - 1) }}
                    _hover={{
                        bgColor: 'blackAlpha.600'
                    }}
                >
                    {'<'}
                </Button>
                <Button
                    position='absolute'
                    right='0'
                    top='0'
                    width='3rem'
                    height='100%'
                    borderRadius='0'
                    variant='ghost'
                    color='whiteAlpha.900'
                    bgColor='blackAlpha.400'
                    onClick={() => { count === image.length - 1 ? setCount(0) : setCount(count + 1) }} 
                    _hover={{
                        bgColor: 'blackAlpha.600'
                    }}
                >
                    {'>'}
                </Button>
            </Box>
        </Box>
    )

}

interface CarouselItemsProps {
    alt: string,
    src: string
}

export const CarouselItems = ({ alt, src }: CarouselItemsProps) => {
    return <Image 
                minH={{base: '250px', md: '400px', lg: '400px', xl: '475px'}} 
                minW={{base: '370px', md: '700px', lg: '700px', xl: '750px'}} 
                maxH={{base: '250px', md: '400px', lg: '400px', xl: '475px'}} 
                maxW={{base: '370px', md: '700px', lg: '700px', xl: '750px'}} 
                alt={alt} 
                fit='cover' 
                src={src} 
            />
}  