'use client'
import { Box, Input, Text } from '@chakra-ui/react'
import { useState } from 'react'

export const Test = () => {

    const [ text, setText ] = useState(`Hi I'am Test`)

    return (
        <Box>
            <Input onChange={(e) => setText(e.currentTarget.value)} />
            <Text>  
                {text}
            </Text>
        </Box>
    )
}