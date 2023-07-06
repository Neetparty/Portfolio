'use client'

import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react"

type ProductItemsProps = {
    data: any
}

export const ProductItems = ({ data }: ProductItemsProps) => {
    return (
        <Card
            maxW='300px'
            minH='300px'
            align='center'
            variant='elevated'
            zIndex='0'
        >
            <CardBody>
                <Image
                    src={data?.image}
                    alt={data?.title}
                    objectFit='contain'
                    boxSize='250px'
                    borderRadius='lg'
                />
                <Heading mt='2rem' mb='1rem' noOfLines={1} size='md'>{data?.title}</Heading>
                <Text noOfLines={3} as='kbd' >{data?.description}</Text>
                <Text fontSize='xl' mt='1rem'>{`฿ ${data?.price}`}</Text>
            </CardBody>
        </Card>
    )
}