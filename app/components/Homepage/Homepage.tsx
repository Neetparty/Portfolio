'use client'

import { Avatar, ButtonGroup, Center, Container, IconButton, Text, VStack } from "@chakra-ui/react"
import { NextjsIcon, ReactjsIcon } from "../Icons"

export const Homepage = () => {
    return (
        <Container
            height='min-content'
        >
            <Center
                height='83vh'
            >
                <VStack textAlign='center' >
                    <Avatar
                        name='avatar'
                        size='2xl'
                        src='FbXxKbwaUAANdvS.jfif'
                        showBorder={true}
                    />
                    <Text
                        fontSize='4xl'
                        as='b'
                        color='blackAlpha.700'
                    >{`SATHAPAT KHEAWRODPAI`}</Text>
                    <Text
                        fontSize='2xl'
                        as='b'
                        color='blackAlpha.600'
                    >{`< I am Fullstack Developer />`}</Text>
                    <ButtonGroup pt='3rem' variant='outline' spacing='6'>
                        <IconButton aria-label="next" border='none' icon={<NextjsIcon boxSize='6rem' />} />
                        <IconButton aria-label="react" border='none' icon={<ReactjsIcon boxSize='3rem' />} />
                    </ButtonGroup>
                </VStack>
            </Center>
        </Container>
    )
}