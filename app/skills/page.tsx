'use client'

import { Box, Container, Text, Divider, SimpleGrid, Progress } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const SkillProgressComponent = ({ percentage, text }: { percentage: number, text: string }) => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        count < percentage ? setCount(count+5) : setCount(percentage)
    }, [count, percentage])

    return (
        <Box>
            <Text fontSize='xl' as='kbd' >{text}</Text>
            <Progress
                colorScheme='purple'
                bgColor='gray.300'
                value={count}
            />
        </Box>
    )
}

const Skills = () => {

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
                <Text fontSize='4xl' textColor='blackAlpha.700' >Skills</Text>
                <Divider mt='1rem' mb='2rem' border='1px' borderColor='blackAlpha.400' />
                <Text fontSize='2xl' as='kbd' textColor='blackAlpha.900'>Front-End Skills</Text>
                <SimpleGrid spacingX='3rem' spacingY='2rem' mt='1rem' mb='2rem' columns={{ base: 1, lg: 2 }} >
                    <SkillProgressComponent percentage={80} text='HTML : Advanced' />
                    <SkillProgressComponent percentage={70} text='CSS : Advanced' />
                    <SkillProgressComponent percentage={70} text='JavaScript : Advanced' />
                    <SkillProgressComponent percentage={50} text='Next JS : Competent' />
                    <SkillProgressComponent percentage={60} text='React JS : Competent' />
                    <SkillProgressComponent percentage={70} text='Chakra UI : Competent' />
                    <SkillProgressComponent percentage={30} text='Redux : Beginner' />
                    <SkillProgressComponent percentage={20} text='Framer Motion : Beginner' />
                </SimpleGrid>
                <Divider mt='3rem' mb='2rem' border='1px' borderColor='blackAlpha.400' />
                <Text fontSize='2xl' as='kbd' textColor='blackAlpha.900' >Back-End Skills</Text>
                <SimpleGrid spacingX='3rem' spacingY='2rem' mt='1rem' mb='2rem' columns={{ base: 1, lg: 2 }} >
                    <SkillProgressComponent percentage={45} text='Node JS : Competent' />
                    <SkillProgressComponent percentage={45} text='Express : Competent' />
                    <SkillProgressComponent percentage={40} text='Mongo DB : Competent' />
                    <SkillProgressComponent percentage={40} text='SQL : Competent' />
                </SimpleGrid>
                <Divider mt='3rem' mb='2rem' border='1px' borderColor='blackAlpha.400' />
                <Text fontSize='2xl' as='kbd' textColor='blackAlpha.900' >Other Dev Skills</Text>
                <SimpleGrid spacingX='3rem' spacingY='2rem' mt='1rem' mb='2rem' columns={{ base: 1, lg: 2 }} >
                    <SkillProgressComponent percentage={50} text='Git : Competent' />
                    <SkillProgressComponent percentage={40} text='Docker : Competent' />
                    <SkillProgressComponent percentage={40} text='TypeScript : Competent' />
                    <SkillProgressComponent percentage={20} text='Google Cloud Platform : Beginner' />
                    <SkillProgressComponent percentage={15} text='Kubernetes : Beginner' />
                </SimpleGrid>
                <Divider mt='3rem' mb='2rem' border='1px' borderColor='blackAlpha.400' />
                <Text fontSize='2xl' as='kbd' textColor='blackAlpha.900' >Language Skills</Text>
                <SimpleGrid spacingX='3rem' spacingY='2rem' mt='1rem' mb='2rem' columns={{ base: 1, lg: 2 }} >
                    <SkillProgressComponent percentage={90} text='Thai : Native' />
                    <SkillProgressComponent percentage={50} text='English : Competent' />
                    <SkillProgressComponent percentage={30} text='Japanese : Beginner' />
                </SimpleGrid>
            </MotionBox>
        </Container>
    )
}

export default Skills