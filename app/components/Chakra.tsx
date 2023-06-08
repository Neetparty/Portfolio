'use client'
import { Box, Grid, GridItem } from '@chakra-ui/react'
import { ChakraProvider } from "@chakra-ui/react"
import { ContentSidebar, FooterSidebar, HeaderSidebar } from './Sidebar'
import { MiniMenu } from './Sidebar/MiniMenu'

import theme from '../theme/theme'
import { motion } from 'framer-motion'
import { useRef } from 'react'

export const Chakra = ({ children }: { children: React.ReactNode }) => {
    return (
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    )
}

export const ChakraLayout = ({ children }: { children: React.ReactNode }) => {

    const gridRef = useRef<any>()
    const MotionBox = motion(Box)

    return (
        <Grid
            templateAreas={{ base: `'Content Content'`, lg: `'Sidebar Content'` }}
            gridTemplateRows={'100vh 100%'}
            gridTemplateColumns={'300px'}
            gap='0'
        >
            <GridItem
                key='Content'
                area={'Content'}
                ref={gridRef}
            >
                <MotionBox
                    display={{ base: 'block', lg: 'none' }}
                    position='absolute'
                    top='1.5rem'
                    left='1.5rem'
                    zIndex='toast'
                    drag
                    dragConstraints={gridRef}
                >
                    <MiniMenu />
                </MotionBox>
                {children}
            </GridItem>
            <GridItem
                display={{ base: 'none', lg: 'block' }}
                bg='purple.400'
                area={'Sidebar'}
            >
                <Box height='25%' >
                    <HeaderSidebar />
                </Box>
                <Box height='68%' >
                    <ContentSidebar />
                </Box>
                <Box height='7%' >
                    <FooterSidebar />
                </Box>
            </GridItem>
        </Grid>
    )
}
