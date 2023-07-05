'use client'
import { Box, Container, Divider, SimpleGrid, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"

export const ProjectLayout = ({ children }: { children: React.ReactNode }) => {

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
            maxW='container.xl'
            mt='3rem'
            p='2rem'
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
                <Text fontSize='4xl' textColor='blackAlpha.700' >Works List</Text>
                <Divider mt='1rem' mb='1rem' border='1px' borderColor='blackAlpha.400' />
                <SimpleGrid
                    columns={{
                        base: 1,
                        md: 2,
                        lg: 3
                    }}
                    spacing='2rem'
                    alignItems='center'
                    justifyItems='center'
                >
                    {children}
                </SimpleGrid>
            </MotionBox>
        </Container>
    )
}