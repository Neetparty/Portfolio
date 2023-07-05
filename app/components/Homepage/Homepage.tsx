'use client'

import { ChevronDownIcon } from "@chakra-ui/icons"
import { Avatar, Box, ButtonGroup, Center, Container, IconButton, Text, VStack } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { ChakraUiIcon, FramerIcon, NextjsIcon, ReactjsIcon } from "../Icons"
import Link from "next/link"

export const Homepage = () => {

    const MotionVStack = motion(VStack)

    const variants = {
        enter: {
            y: -500,
            opacity: 0
        },
        initial: {
            y: 0,
            opacity: 1
        },
        exit: {
            y: -100,
            opacity: 0
        }
    }


    return (
        <Container
            height='min-content'
        >
            <Center
                height='100vh'
            >
                <MotionVStack
                    textAlign='center'
                    variants={variants}
                    initial="enter"
                    animate='initial'
                    exit='exit'
                    transition={{
                        y: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.75 },
                    }}
                >
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
                        <IconButton aria-label="chakra" border='none' icon={<ChakraUiIcon boxSize='3rem' />} />
                        <IconButton aria-label="framer" border='none' icon={<FramerIcon boxSize='3rem' />} />
                    </ButtonGroup>
                    <Box pt='3rem'>
                        <Link href='/about' >
                            <IconButton
                                aria-label="down"
                                border='2px'
                                borderColor='blackAlpha.400'
                                borderRadius='full'
                                color='blackAlpha.700'
                                size='lg'
                                icon={<ChevronDownIcon boxSize='2rem' />}
                                _hover={{
                                    colorScheme: 'white',
                                    borderColor: 'purple.400',
                                    color: 'purple.400'
                                }}
                                _active={{
                                    colorScheme: 'white',
                                    borderColor: 'purple.400',
                                    color: 'purple.400',
                                    size: 'md',
                                }}
                            />
                        </Link>
                    </Box>
                </MotionVStack>
            </Center>
        </Container>
    )
}