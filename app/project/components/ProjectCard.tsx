'use client'

import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import Link from "next/link"

type CardProps = {
    data: {
        name?: string
        image?: string
        link: string
    }
}

export const ProjectCard = ({ data }: CardProps) => {

    return (
        <Link href={data.link} >
            <Card
                maxW='350px'
                minH='300px'
                align='center'
                variant='elevated'
            >
                <CardBody>
                    <Image
                        src={data.image}
                        alt='placeholder image'
                        borderRadius='lg'
                    />
                    <Heading mt='1rem' size='md'>{data.name}</Heading>
                </CardBody>
            </Card>
        </Link>
    )
}