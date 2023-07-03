'use client'
import { Container, Divider, SimpleGrid, Text } from "@chakra-ui/react"

export const ProjectLayout = ({ children }: { children: React.ReactNode }) => {
    return(
        <Container 
            maxW='container.xl'
            mt='3rem'
            p='2rem'
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
        </Container>
    )
}