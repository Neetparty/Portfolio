'use client'

import { Box, Text } from "@chakra-ui/react"

export const FooterSidebar = () => {
    return(
        <Box 
            position='relative'
            justifyContent='center'
        >
            <Box
                position='fixed'
                left='3.2rem'
                bottom='2rem'
            >
                <Text fontSize='0.8rem' color='white' align='center' p='0.2rem' >© COPYRIGHT 2023 Neetparty <br/>All Rights Reserved</Text>
            </Box>
        </Box>
    )
}