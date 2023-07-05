'use client'

import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Container, Divider, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import { motion } from "framer-motion"
import Link from "next/link"

const AccordionComponent = ({ text, children }: { text: string, children: React.ReactNode }) => {
    return (
        <Accordion
            allowToggle={true}
        >
            <AccordionItem>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        <Text fontSize='lg' as='kbd' >{text}</Text>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                    {children}
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

const About = () => {

    const MotionBox = motion(Box)

    const variants = {
        enter: {
            y: 500,
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
            mt='3rem'
            p='2rem'
            minW={{ base: '100%', md: '90%', lg: '75%', xl: '60%' }}
        >
            <MotionBox
                variants={variants}
                initial="enter"
                animate='initial'
                exit='exit'
                transition={{
                    y: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 1.25 }
                }}
            >
                <Text fontSize='4xl' textColor='blackAlpha.700' >About</Text>
                <Divider mt='1rem' mb='1rem' border='1px' borderColor='blackAlpha.400' />
                <Text fontSize='lg'>
                    {
                        `Hi. I'm Sathapat Kheawrodpai. I am someone who is curious and eager to learn. 
                        I enjoy immersing myself in the pursuit of knowledge, which has allowed me to acquire a wide range of skills. 
                        I tend to be a mediator in various matters and often provide solutions to problems. 
                        Sometimes, my suggestions can surprise people, but they are often effective in solving the issues. 
                        I prefer working alone, which is a significant drawback for me as it prevents me from fully collaborating with others`
                    }
                </Text>
                <Divider mt='2rem' mb='2rem' border='1px' borderColor='blackAlpha.400' />
                <SimpleGrid columns={{base: 1, lg: 2}} spacingX='3rem' spacingY='2.5rem' >
                    <Text fontSize='lg' as='kbd' >{`Name > Sathapat Kheawrodpai`}</Text>
                    <Text fontSize='lg' as='kbd' >{`Age > 24`}</Text>
                    <Text fontSize='lg' as='kbd' >{`Birthday > 29 Dec 1998`}</Text>
                    <Text fontSize='lg' as='kbd' >{`Degree > Junior`}</Text>
                    <HStack><Text fontSize='lg' as='kbd' >{`Website > `}</Text><Link href='https://neetparty-portfolio.vercel.app/' ><Text fontSize='lg' as='kbd' >{`neetparty-portfolio.vercel.app`}</Text></Link></HStack>
                    <Text fontSize='lg' as='kbd' >{`City > Huaiyot, Trang`}</Text>
                    <Text fontSize='lg' as='kbd' >{`Email > Private`}</Text>
                    <Text fontSize='lg' as='kbd' >{`Phone > Private`}</Text>
                </SimpleGrid>
                <SimpleGrid columns={1} mt='2rem' spacingY='2.5rem'>
                    <Text fontSize='lg' as='kbd' >{`Hobby > Listen to music, Play the game, Read a book, Learn something`}</Text>
                </SimpleGrid>
                <Divider mt='2rem' mb='2rem' border='1px' borderColor='blackAlpha.400' />
                <AccordionComponent text='Education' >
                    <VStack gap='0.5rem' mt='1rem' >
                        <Text fontSize='xl' as='kbd' >{`Faculty of Business Administration`}</Text>
                        <Text fontSize='lg' as='kbd' >{`Ramkhamhaeng University`}</Text>
                        <Text fontSize='xl' as='kbd' >{`2018 - Present`}</Text>
                    </VStack>
                    <Divider mt='2rem' mb='2rem' variant='dashed' border='1px' borderColor='blackAlpha.400' />
                    <VStack gap='0.5rem' mt='1rem' mb='2rem' >
                        <Text fontSize='xl' as='kbd' >{`Infomation Technology`}</Text>
                        <Text fontSize='lg' as='kbd' >{`Trang Technical College`}</Text>
                        <Text fontSize='xl' as='kbd' >{`2015 - 2018`}</Text>
                    </VStack>
                </AccordionComponent>
                {/* <AccordionComponent text='My Favorite Song' >
                    <SimpleGrid display='grid' alignItems='center' columns={{base: 1, lg: 2}} spacingX='1rem' spacingY='2.5rem'>
                        <iframe width="400" height="225" src="https://www.youtube-nocookie.com/embed/GNkPJvVEm0s" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <iframe width="400" height="225" src="https://www.youtube-nocookie.com/embed/I8yBbwRurAE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <iframe width="400" height="225" src="https://www.youtube-nocookie.com/embed/paVYNlZ5Xuk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <iframe width="400" height="225" src="https://www.youtube-nocookie.com/embed/3pqE_O1Z84Y" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </SimpleGrid>
                </AccordionComponent> */}
            </MotionBox>
        </Container>
    )
}

export default About