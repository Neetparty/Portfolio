'use client'
import { ChevronLeftIcon } from "@chakra-ui/icons"
import { Container, Heading, Box, HStack, IconButton } from "@chakra-ui/react"
import Link from "next/link"

type ItemLayoutProps = {
    children: React.ReactNode
    title: string | undefined
}

export const ItemLayout = ({title, children}:ItemLayoutProps) => {
    return (
        <Container
            minW={{
                base: '',
                sm: '',
                md: 'container.md',
                xl: 'container.lg',
            }}
            p={{
                base: '0',
                sm: '0',
                md: '1rem',
                xl: '2rem',
            }}
            pt={{
                base: '0',
                sm: '0',
                md: '2rem',
                xl: '4rem',
            }}
        >
            <Box
                p={{
                    base: '0',
                    sm: '0',
                    md: '0.5rem',
                    xl: '1rem',
                }}
                border='1px'
                borderColor='blackAlpha.300'
                borderRadius='10px'
                minH='max-content'
                backgroundColor='whiteAlpha.700'
            >
                <HStack m='1.5rem'>
                    <Link href='/project'><IconButton aria-label="back" colorScheme='none' color='blackAlpha.700' icon={<ChevronLeftIcon boxSize='2rem' />} /></Link>
                    <Heading ml='1.5rem' textColor='blackAlpha.700' >{title}</Heading>
                </HStack>
                {children}
            </Box>
        </Container>
    )
}